import React, { useEffect } from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button, Card, InputGroup } from 'react-bootstrap'
import { registrationThunk } from '../../reducers/registrationReducer'
import { connect } from 'react-redux';
//import './Login.css';
import { Email, Password, Input } from '../forms/forms';



const FormRegistration = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Row  className="mt-4 back1" >
                <Col className="back mt-5 mb-5" md={{span:6, offset:3}}>
                    <h1 className="mb-4 mt-4">Зарегистрируйтесь</h1>
                    <Row >
                        <Col xs={12} sm={12} md={{span:6, offset:3}}>

                        <Field className="inp ml-5" placeholder={"firstName"} name={"firstName"} component={Input}/>

                        <Field className="inp ml-5" placeholder={"lastName"} name={"lastName"} component={Input}/>
                
                        <Field className="inp ml-5" placeholder={"email"} name={"email"} component={Email}/>

                        <Field className="inp ml-5" placeholder={"password"} name={"password"} component={Password}/>
                    </Col>
                    </Row>

                    <Row>
                        <Col md={{span:8, offset:2}}>
                    <Button block variant="dark" className="mb-4" as="input" type="submit" value="Зарегистрироваться" />
                    </Col>
                    </Row>
                </Col>
            </Row>
        </form>
)

}



const RegistrationReduxForm = reduxForm({form: 'registration'})(FormRegistration)




const Registration = (props) => {

    

    /*useEffect( () => {
        props.registrationThunk();
    }, [props])
*/
   
    
    const onSubmit = (formData) => {  
     props.registrationThunk(formData.firstName, formData.lastName, formData.email, formData.password);
    }
    
    
    return (
        <Container>
            
            <RegistrationReduxForm onSubmit={onSubmit} />
            
        </Container>
    )
    
}


export default connect (null, { registrationThunk })(Registration)