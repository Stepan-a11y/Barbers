import React, { useEffect } from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { loginThunk, authThunk, } from '../../reducers/authReducer'
import { connect } from 'react-redux';
import './Login.css';



const FormLogin = (props) => {
    
    return (
            <form onSubmit={props.handleSubmit}>
                <Col>
                    <Row className="mb-3">
                    <Field placeholder={"email"} name={"email"} component={"input"}/>
                    </Row>
                    <Row>
                        <Field placeholder={"password"} name={"password"} component={"input"}/>
                    </Row>
                    <Row className="mt-4">
                        <Button as="input" type="submit" value="Войти" /> 
                    </Row>
                </Col>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(FormLogin)




const Login = (props) => {

    debugger;

    useEffect( () => {
        props.authThunk();
    }, [props])


    const onSubmit = (formData) => {
     props.loginThunk(formData.email, formData.password);
    }

    return (
        <Container>
            {!props.isAuth && <h1 className="text mt-5">Войдите в аккаунт</h1> }
            { props.isAuth && <h1 className="text mt-5">{props.firstName} {props.lastName}</h1> }
            <LoginReduxForm onSubmit={onSubmit} />
        </Container>
    )
    
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName
})

export default connect (mapStateToProps, {loginThunk, authThunk})(Login)