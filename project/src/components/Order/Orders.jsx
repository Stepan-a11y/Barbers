import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { ordersThunk, getServicesOrdersThunk, setServicesToOrder, getMastersOrdersThunk, setMastersToOrder, getOrdersThunkSubmit, setOrdersSubmit } from '../../reducers/ordersReducer'
import { authThunk } from '../../reducers/authReducer'
import { NavLink, Redirect } from 'react-router-dom';
import { SubmissionError } from 'redux-form'
import './Orders.css';
import { useEffect } from 'react';
import { SelectMast, SelectServ, SelectTime } from '../forms/forms';




const FormOrders = (props) => {


    let submit = (values) => {       
        debugger;
        if (props.ordMast.includes(values.masterName) && props.ordDate.includes(values.orderDate) && props.ordTime.includes(values.orderTime)) {
            throw new SubmissionError({
              _error: 'Это время уже занято, пожалуйста, выберите другое время или мастера!'
            })
    } else { 
        props.handleSubmit()
        alert("Ваша запись успешно добавлена!")
        
    }

}  


    return (
        <form onSubmit={props.handleSubmit(submit)}>
            <Row className="backOrder1 mt-4">
                <Col className="backOrder mt-5 mb-5" md={{span:10, offset:1}}>
                    <Col md={{span:8, offset:2}}><h1 className="text mt-4 mb-5">Запишитесь на услугу:</h1></Col>
                        <Col className="mt-3" md={{span:8, offset:2}}> 
                                <h4>Выберите мастера:</h4>
                                <Field name={"masterName"} options = {props.mast} component={SelectMast} />   
                        </Col>

                    <Col className="mt-4" md={{span:8, offset:2}}> 
                                <h4>Выберите услугу:</h4>
                                <Field name="serviceName" options = {props.serv} component={SelectServ} />
                    </Col>

                    <Col className="mt-4" md={{span:8, offset:2}}> 
                            <h4>Выберите желаемые дату и время:</h4>
                            <Row>
                                <Col className="mb-3" md={6}><Field className="opt" name="orderDate" component="input" type="date"/></Col>
                                <Col md={6}><Field name="orderTime" component={SelectTime} /></Col>
                            </Row>
                    </Col>
                    <Col md={{span:6, offset:3}}>{props.error && <p className="err">{props.error}</p>}</Col>
                    
                    <Col className="mt-5 mb-4" md={{span:4, offset:4}}> 
                            
                               <Button block variant="dark" as="input" type="submit" value="Записаться"/>
                            
                    </Col>
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
        props.getOrdersThunkSubmit();
    }, [])


    const serv = props.servicesOrder;
    const mast = props.mastersOrder;
    const ordMast = props.ordersSubmit.map(o => o.masterName);
    const ordDate = props.ordersSubmit.map(o => o.date);
    const ordTime = props.ordersSubmit.map(o => o.time);


    const onSubmit = (formData) => {
        props.ordersThunk(props.email, formData.masterName, formData.serviceName, formData.orderDate, formData.orderTime);
        
    }
    

    if(props.isSetting) return <Redirect to="profile" />
    return (
        <Container>            
                <OrdersReduxForm  isSetting={props.isSetting} ordMast={ordMast} ordDate={ordDate} ordTime={ordTime} serv={serv} mast={mast} onSubmit={onSubmit} />
        </Container>
        
    )
    
}

const mapStateToProps = (state) => {
    return {
        mastersOrder: state.orders.mastersOrder,
        servicesOrder: state.orders.servicesOrder,
        ordersSubmit: state.orders.ordersSubmit,
        isSetting: state.orders.isSetting,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect (mapStateToProps, {getOrdersThunkSubmit, setOrdersSubmit, ordersThunk, getServicesOrdersThunk, 
    setServicesToOrder, getMastersOrdersThunk, setMastersToOrder, authThunk} )(Orders)
    