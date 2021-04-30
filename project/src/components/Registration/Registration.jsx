import React, { useEffect } from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { registrationThunk } from '../../reducers/registrationReducer'
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form'
import {setUsers, getUsersThunk} from '../../reducers/validReducer';
//import './Login.css';
import { Email, Password, InputFirstName, InputLastName } from '../forms/forms';
import { email, required } from '../forms/validators';



const FormRegistration = (props) => {

    let submit = (values) => {  
        debugger;     
        if (props.validUser.includes(values.email)) {
            throw new SubmissionError({
              email: 'Такой пользователь уже есть',
              _error: 'Login failed!'
            })
    } else { 
        props.handleSubmit()
    }
}  


    return (
        <form onSubmit={props.handleSubmit(submit)}>
            <Row  className="mt-4 back1" >
                <Col className="back mt-5 mb-5" md={{span:6, offset:3}}>
                    <h1 className="mb-4 mt-4">Зарегистрируйтесь</h1>
                    <Row >
                        <Col xs={12} sm={12} md={{span:6, offset:3}}>

                        <Field className="inp ml-5"  name={"firstName"} component={InputFirstName} validate={[required]}/>

                        <Field className="inp ml-5"  name={"lastName"} component={InputLastName} validate={[required]}/>
                
                        <Field className="inp ml-5"  name={"email"} component={Email} validate={[required, email]}/>

                        <Field className="inp ml-5"  name={"password"} component={Password} validate={[required]}/>
                    </Col>
                    </Row>

                    <Row>
                        <Col md={{span:8, offset:2}}>
                    <Button block variant="dark" className="mb-4" as="input" type="submit"  value="Зарегистрироваться" />
                    </Col>
                    </Row>
                </Col>
            </Row>
        </form>
)

}



const RegistrationReduxForm = reduxForm({form: 'registration'})(FormRegistration)




const Registration = (props) => {

    useEffect( () => {
        props.getUsersThunk();
    }, [])

    
    const onSubmit = (formData) => {  
     props.registrationThunk(formData.firstName, formData.lastName, formData.email, formData.password);
    }
    
    let validUser = props.users.map(v => v.email)
    
    return (
        <Container>
            
            <RegistrationReduxForm validUser={validUser} onSubmit={onSubmit} />
            
        </Container>
    )
    
}


const mapStateToProps = (state) => ({
    users: state.usersValid.users
})


export default connect (mapStateToProps, { registrationThunk, setUsers, getUsersThunk })(Registration)