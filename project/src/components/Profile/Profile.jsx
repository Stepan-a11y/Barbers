import React from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { addOrderAC, updateInformAC } from "../../reducers/profileReducer";

let inputTextMaster = React.createRef();
let inputTextDate = React.createRef();




let Orders = (props) => {
    return(
    
        <Row>
            <Col>
                <h4>{props.nameMaster}</h4>
                <p>{props.dateOrder}</p>
            </Col>
        </Row>
    )
}



const Profile = (props) => {



    let orderElem = props.profile.orders.map( o => <Orders nameMaster={o.nameMaster} dateOrder={o.dateOrder} />);


debugger;
    let informChange = () => {
        
        let order = {
            newNameMaster: inputTextMaster.current.value,
            newDateOrder: inputTextDate.current.value
    }
        props.dispatch(updateInformAC(order));
    }
   
    


    let addOrder = () => {  
        props.dispatch(addOrderAC());      
    }



    return(
        <Container>
           <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Имя мастера</Form.Label>
                    <Form.Control onChange={ informChange } ref={inputTextMaster} value={props.profile.inform.newNameMaster} type="text"/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Дата записи</Form.Label>
                    <Form.Control onChange={ informChange } ref={inputTextDate} value={props.profile.inform.newDateOrder} type="text" />
                </Form.Group>

                <Button onClick = { addOrder } >Записаться</Button>
            </Form>

            
            <Row className="mt-4">
                <Col>
                    { orderElem }
                </Col>
            </Row>
        
           
        </Container>
    )
}


export default Profile;