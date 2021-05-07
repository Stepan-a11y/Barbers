import React from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux'
import { authThunk } from '../../reducers/authReducer'
import { useEffect } from 'react';
import { required} from '../forms/validators';
import { InputRedactFirstName, InputRedactLastName } from '../forms/forms';
import { updUserState, updUserThunk } from '../../reducers/validReducer'
import { Redirect } from 'react-router-dom';


const FormRedact = (props) => {

   
    return (
            <form onSubmit={props.handleSubmit}>
                
                <Row  className="mt-4 back1" >
                    <Col className="back mt-5 mb-5" md={{span:8, offset:2}}>
                        <h1 className="mb-4 mt-4">Редактируйте профиль:</h1>
                        <Row >
                            <Col xs={12} sm={12} md={{span:6, offset:3}}>
                                <h4>Ваше имя: {props.firstName}</h4>
                            <Field className="inp ml-5" name={"firstName"} component={InputRedactFirstName} validate={[required]}/>
                                <h4>Ваша фамилия: {props.lastName}</h4>
                            <Field className="inp ml-5" name={"lastName"} component={InputRedactLastName} validate={[required]} />
                           
                            </Col>
                        </Row>

                        <Row>
                            <Col className="mt-3 mb-3" md={{span:4, offset:4}}>
                                <Button block variant="dark" className="mb-2 sign" as="input" type="submit" onClick={props.updUserThunk} value="Редактировать" /> 
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </form>
    )
}

const RedactProfileReduxForm = reduxForm({form: 'redact'})(FormRedact)




const RedactProfile = (props) => {

    useEffect( () => {
        props.authThunk();
    }, [])

    
    const onSubmit = (formData) => {  
     props.updUserThunk(props.userId, formData.firstName, formData.lastName);     
    }

    

    if(props.isUpd) return window.location.reload()
    return (
        <Container>
            
            <RedactProfileReduxForm  isUpd={props.isUpd} firstName={props.firstName} lastName={props.lastName} onSubmit={onSubmit} />
            
        </Container>
    )
    
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    isUpd: state.usersValid.isUpd,
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {authThunk, updUserState, updUserThunk})(RedactProfile)