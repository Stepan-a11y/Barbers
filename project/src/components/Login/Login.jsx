import React, { useEffect } from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button, Card, InputGroup } from 'react-bootstrap'
import { loginThunk, authThunk, } from '../../reducers/authReducer'
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { email, required} from '../forms/validators';
import {setUsers, getUsersThunk} from '../../reducers/validReducer';
import { SubmissionError } from 'redux-form'
import './Login.css';
import { Email, Password } from '../forms/forms';



const FormLogin = (props) => {

    let submit = (values) => {       
        if (!props.validUser.includes(values.email)) {
            throw new SubmissionError({
              email: 'Такого пользователя нет',
              _error: 'Неверный пароль'
            })
    } else { 
        props.handleSubmit()
    }
}  

    return (
            <form onSubmit={props.handleSubmit(submit)}>
                
                <Row  className="mt-4 back1" >
                    <Col className="back mt-5 mb-5" md={{span:6, offset:3}}>
                        <h1 className="mb-4 mt-4">Войдите в аккаунт</h1>
                        <Row >
                            <Col xs={12} sm={12} md={{span:6, offset:3}}>
                    
                            <Field className="inp ml-5" placeholder={"email"} name={"email"} component={Email} validate={[required, email]}/>
    
                            <Field className="inp ml-5" placeholder={"password"} name={"password"} component={Password} validate={[required]}/>
                           
                        </Col>
                        </Row>

                        <Row>
                            <Col md={{span:8, offset:2}}>
                        <Button block variant="dark" className="mb-2 sign" as="input" type="submit" value="Войти" /> 
                        <Button block variant="dark" className="navLink mb-4"><NavLink NavLink to="registration" >Регистрация</NavLink></Button>
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

    useEffect( () => {
        props.getUsersThunk();
    }, [])
   

   
    
    const onSubmit = (formData) => {  
     props.loginThunk(formData.email, formData.password);     
    }
    
    let validUser = props.users.map(v => v.email)
    
    

    if (props.isAuth) return <Redirect to="/profile"/>
    return (
        <Container>
            
            <LoginReduxForm validUser={validUser} onSubmit={onSubmit} />
            
        </Container>
    )
    
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    users: state.usersValid.users
})

export default connect (mapStateToProps, {loginThunk, authThunk, setUsers, getUsersThunk})(Login)