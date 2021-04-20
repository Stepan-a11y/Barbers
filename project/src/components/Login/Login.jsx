import React, { useEffect } from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button, Card, InputGroup } from 'react-bootstrap'
import { loginThunk, authThunk, } from '../../reducers/authReducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Login.css';
import { Email, Password } from '../forms/forms';



const FormLogin = (props) => {
    
    
    
    


    return (
            <form onSubmit={props.handleSubmit}>
                <Row  className="mt-4 back1" >
                    <Col className="back mt-5 mb-5" md={{span:6, offset:3}}>
                        <h1 className="mb-4 mt-4">Войдите в аккаунт</h1>
                        <Row >
                            <Col xs={12} sm={12} md={{span:6, offset:3}}>
                    
                            <Field className="inp ml-5" placeholder={"email"} name={"email"} component={Email}/>
    
                            <Field className="inp ml-5" placeholder={"password"} name={"password"} component={Password}/>
                        </Col>
                        </Row>

                        <Row>
                            <Col md={{span:8, offset:2}}>
                        <Button block className="mb-2 sign" as="input" type="submit" value="Войти" /> 
                        <Button block className="mb-4" as="input" type="submit" value="Регистрация" />
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(FormLogin)




const Login = (props) => {

    

    useEffect( () => {
        props.authThunk();
    }, [props])

   
    
    const onSubmit = (formData) => {  
     props.loginThunk(formData.email, formData.password);
    }
    
    if (props.isAuth) return <Redirect to="/profile"/>
    return (
        <Container>
            
            <LoginReduxForm onSubmit={onSubmit} />
            
        </Container>
    )
    
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
})

export default connect (mapStateToProps, {loginThunk, authThunk})(Login)