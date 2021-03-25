import React, { useEffect }from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { ordersThunk, getServicesOrdersThunk, setServicesToOrder } from '../../reducers/ordersReducer'
import './Orders.css';





const FormOrders = (props) => {

    

    return (
        <form onSubmit={props.handleSubmit}>
            <Row className="mt-5">
                <Col md={6}>
                 <h3><label>Выберите мастера</label></h3>
                    <Field name={"masterName"} component={"select"}>
                    <option >Выберите мастера</option>
                    </Field>   
                    
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={6}>
                <h3><label>Выберите услугу</label></h3>
                    <Field name="serviceName" component="select">
                    <option value=""> Выберите услугу</option>
                        {props.services.map}
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
        </form>

    )
}


const OrdersReduxForm = reduxForm({form: 'order'})(FormOrders)

const Orders = (props) => {

    useEffect( () => {
        props.getServicesOrdersThunk();
    }, [props])
   
   
    const onSubmit = (formData) => {
        props.ordersThunk(formData.masterName, formData.serviceName, formData.orderDate);
    }

    return (
        <Container>
             <h1 className="text mt-5 ">Запишитесь на услугу:</h1>  
            <OrdersReduxForm onSubmit={onSubmit} />
            <h1>{props.services.name}</h1>
        </Container>
    )
    
}


const mapStateToProps = (state) => {
        return{
        services: state.orders.services
        }
}

export default connect (mapStateToProps, {ordersThunk, getServicesOrdersThunk, setServicesToOrder} )(Orders)