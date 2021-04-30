import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { ordersThunk, getServicesOrdersThunk, setServicesToOrder, getMastersOrdersThunk, setMastersToOrder } from '../../reducers/ordersReducer'
import { authThunk } from '../../reducers/authReducer'
import { NavLink, Redirect } from 'react-router-dom';
import './Orders.css';
import { useEffect } from 'react';




const FormOrders = (props) => {

    function confirm () {
        alert("Ваша запись добавлена! Перейдите в профиль для просмотра.")
        
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <Row className="backOrder mt-4">
                    <h1 className="text mt-3">Запишитесь на услугу:</h1>
                    <Col className="mt-3" md={{span:10, offset:1}}> 
                                <h3><label>Выберите мастера:</label></h3>
                                <Field className="opt" name={"masterName"} component={"select"}>
                                    <option >Выберите мастера</option>
                                    { props.mast.map(m => <option key={m._id} >
                                    {m.firstName} {m.lastName}
                                    </option> )}
                                </Field>   
                    </Col>

                    <Col className="mt-4" md={{span:10, offset:1}}> 
                                <h3><label>Выберите услугу:</label></h3>
                                <Field className="opt" name="serviceName" component={"select"}>
                                    <option >Выберите услугу</option>
                                    { props.serv.map(m => <option key={m._id} >
                                    {m.name} {m.price}
                                    </option> )}
                                </Field>
                    </Col>

                    <Col className="mt-4" md={{span:10, offset:1}}> 
                                <h3><label>Выберите желаемую дату:</label></h3>
                                <Field className="opt" name="orderDate" component="input" type="date" />
                    </Col>

                    <Col className="mt-5 mb-3" md={{span:10, offset:1}}> 
                            
                               <Button variant="dark" as="input" type="submit" onClick={ confirm } value="Записаться"/>
                            
                    </Col>
            </Row>
        </form>

    )

    
}


const OrdersReduxForm = reduxForm({form: 'order'})(FormOrders)

const Orders = (props) => {
   
    useEffect( () => {
        props.getServicesOrdersThunk();
        props.getMastersOrdersThunk();
        props.authThunk();
    }, [])

    const serv = props.servicesOrder;
    const mast = props.mastersOrder;

    

    const onSubmit = (formData) => {
        props.ordersThunk(props.email, formData.masterName, formData.serviceName, formData.orderDate);
        
    }
    
   
    return (
        <Container>            
                <OrdersReduxForm  serv={serv} mast={mast} onSubmit={onSubmit} />
        </Container>
        
    )
    
}

const mapStateToProps = (state) => {
    return {
        mastersOrder: state.orders.mastersOrder,
        servicesOrder: state.orders.servicesOrder,
        email: state.auth.email
    }
}

export default connect (mapStateToProps, {ordersThunk, getServicesOrdersThunk, 
    setServicesToOrder, getMastersOrdersThunk, setMastersToOrder, authThunk} )(Orders)
    