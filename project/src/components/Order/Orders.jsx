import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import './Orders.css';




const FormOrders = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Row className="mt-5">
                <Col md={6}>
                 <h3><label>Выберите мастера</label></h3>
                 <Field
                        name="selectMaster"
                        component="input"
                        type="text"
                       />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={6}>
                <h3><label>Выберите услугу</label></h3>
                    <Field
                        name="selectService"
                        component="input"
                        type="text"
                       />
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

   
    const onSubmit = (formData) => {
     props.loginThunk(formData.email, formData.password);
    }

    return (
        <Container>
             <h1 className="text mt-5 ">Запишитесь на услугу:</h1>  
            <OrdersReduxForm onSubmit={onSubmit} />
        </Container>
    )
    
}



const mapStateToProps = (state) => ({
    
})

export default connect (mapStateToProps, null )(Orders)