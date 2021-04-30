import React from 'react'
import {Form, Col } from 'react-bootstrap'
import './forms.css';

export const Email = ({input, meta, ...props}) => {
    return (
        
        <Form >
            <Form.Group>
                <Form.Control className="input" type="Email" placeholder="email" {...input} />
                {meta.touched && (meta.error && <span className="error">{meta.error}</span>)}
            </Form.Group>
        </Form>
        
    
    )
}


export const Password = ({input, meta, ...props}) => {
    return (
        <Form >
             <Form.Group>
                <Form.Control className="input" type="Password" placeholder="Пароль" {...input} />
                {meta.touched && (meta.error && <span className="error">{meta.error}</span>)}
            </Form.Group>
        </Form>
    )
}


export const InputFirstName = ({input, meta, ...props}) => {
    return (
        <Form >
             <Form.Group>
                <Form.Control className="input" type="Input" placeholder="Ваше имя" {...input} />
                {meta.touched && (meta.error && <span className="error">{meta.error}</span>)}
            </Form.Group>
        </Form>
    )
}

export const InputLastName = ({input, meta, ...props}) => {
    return (
        <Form >
             <Form.Group>
                <Form.Control className="input" type="Input" placeholder="Ваша фамилия" {...input} />
                {meta.touched && (meta.error && <span className="error">{meta.error}</span>)}
            </Form.Group>
        </Form>
    )
}