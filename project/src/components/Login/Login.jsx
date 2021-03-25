import React, { useEffect } from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button, Card, InputGroup } from 'react-bootstrap'
import { loginThunk, authThunk, } from '../../reducers/authReducer'
import { connect } from 'react-redux';
import './Login.css';



const FormLogin = (props) => {
    
    return (
            <form onSubmit={props.handleSubmit}>
                <Col  md={{span:6, offset:3}} className="mt-5">
                    <Card>
                    <Card.Body>
                    <h1 className="mb-5">Войдите в аккаунт</h1>
                    <Row className="mb-3">
                    <InputGroup className="mb-3">
                        <Field className="inp" placeholder={"email"} name={"email"} component={"input"}/>
                    </InputGroup>
                    </Row>
                    <Row>
                        <Field className="inp" placeholder={"password"} name={"password"} component={"input"}/>
                    </Row>
                    <Row className="mt-4">
                        <Button as="input" type="submit" value="Войти" /> 
                        <Button className="ml-2" as="input" type="submit" value="Регестрация" />
                    </Row>
                    </Card.Body>
                    </Card>
                </Col>
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

    return (
        <Container>
            
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