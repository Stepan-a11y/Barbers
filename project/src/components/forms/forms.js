import React from 'react'
import {Form} from 'react-bootstrap'
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
    debugger;
    return (
        <Form >
             <Form.Group>
                <Form.Control className="input" type="Password" placeholder="Пароль" {...input} />
                {meta.touched && (meta.error && <span className="error">{meta.error}</span>)}
                {props.passErr && <p className="passError">{props.passErr}</p>}
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


export const InputRedactFirstName = ({input, meta, ...props}) => {
    return (
        <Form >
             <Form.Group>
                <Form.Control className="input" type="Input" placeholder="Ваше новое имя" {...input} />
                {meta.touched && (meta.error && <span className="error">{meta.error}</span>)}
            </Form.Group>
        </Form>
    )
}

export const InputRedactLastName = ({input, meta, ...props}) => {
    return (
        <Form >
             <Form.Group>
                <Form.Control className="input" type="Input" placeholder="Ваша новая фамилия" {...input} />
                {meta.touched && (meta.error && <span className="error">{meta.error}</span>)}
            </Form.Group>
        </Form>
    )
}


export const SelectMast = ({input, options}) => {
    debugger;
    return (
    <Form>
    <Form.Group>
      <Form.Control className="input" as="select" custom  {...input}>
        {options.map(m => <option key={m._id} >
        {m.firstName} {m.lastName}
        </option> )}     
      </Form.Control>
    </Form.Group>
  </Form>
    )
}


export const SelectServ = ({input, options}) => {
    return (
    <Form>
    <Form.Group>
      <Form.Control className="input" as="select" custom  {...input}>  
        {options.map(m => <option key={m._id} >
        {m.name} {m.price}
        </option> )}     
      </Form.Control>
    </Form.Group>
  </Form>
    )
}


export const SelectTime = ({input, options}) => {
    return (
    <Form>
    <Form.Group>
    <Form.Control className="input" as="select" custom  {...input}>  
    <option>9:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
        <option>17:00</option>  
      </Form.Control>
    </Form.Group>
  </Form>
    )
}