import React from 'react'
import {Form } from 'react-bootstrap'
import './forms.css';

export const Email = (props) => {
    return (
        <Form >
            <Form.Group controlId="formBasicEmail">
                <Form.Control className="input" type="Email" placeholder="email" {...props.input} />
            </Form.Group>
        </Form>
    )
}


export const Password = (props) => {
    return (
        <Form >
             <Form.Group controlId="formBasicPassword">
                <Form.Control className="input" type="Password" placeholder="password" {...props.input} />
            </Form.Group>
        </Form>
    )
}


export const Input = (props) => {
    return (
        <Form >
             <Form.Group controlId="formBasicInput">
                <Form.Control className="input" type="Input" {...props.input} />
            </Form.Group>
        </Form>
    )
}