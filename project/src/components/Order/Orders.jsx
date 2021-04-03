import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { ordersThunk, getServicesOrdersThunk, setServicesToOrder, getMastersOrdersThunk, setMastersToOrder } from '../../reducers/ordersReducer'
import { authThunk } from '../../reducers/authReducer'
import './Orders.css';
import { useEffect } from 'react';



const FormOrders = (props) => {



    return (
        <form onSubmit={props.handleSubmit}>
            <Card>
            <Row className="mt-5">
                <Col md={6}>
                 <h3><label>Выберите мастера</label></h3>
                    <Field name={"masterName"} component={"select"}>
                    <option >Выберите мастера</option>
                    { props.mast.map(m => <option key={m.id} >
                        {m.firstName}
                        {m.lastName}
                    </option> )}
                    </Field>   
                    
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={6}>
                <h3><label>Выберите услугу</label></h3>
                    <Field name="serviceName" component="select">
                    <option value=""> Выберите услугу</option>
                    { props.serv.map(s => <option key={s.id} >
                        {s.name}
                        {s.price}
                    </option> )}
                   
                    </Field>
                       
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={6}>
                <h3><label>Укажите желаемую дату</label></h3>
                    <Field name="orderDate" component="input" type="date" />
                </Col>
            </Row>
        
            <Row className="mt-5">
                        <Button as="input" type="submit" value="Записаться" /> 
            </Row>
            </Card>
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

   
debugger;

    const serv = props.servicesOrder;
    const mast = props.mastersOrder;


    const onSubmit = (formData) => {
        props.ordersThunk(props.email, formData.masterName, formData.serviceName, formData.orderDate);
    }
    debugger;
   
    return (
        <Container>
             <h1 className="text mt-5 ">Запишитесь на услугу:</h1>  

            <OrdersReduxForm serv={serv} mast={mast} onSubmit={onSubmit} />
            
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