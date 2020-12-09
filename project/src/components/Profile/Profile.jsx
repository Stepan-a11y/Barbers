import React from "react";
import './Profile.css';
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import avatar from "../../local/avatar.png"


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

    let orderElem = props.orders.map( o => <Orders nameMaster={o.nameMaster} dateOrder={o.dateOrder} />);

    let informChange = () => {
        
        let order = {
            newNameMaster: inputTextMaster.current.value,
            newDateOrder: inputTextDate.current.value
    }
        props.updateInform(order);
    }
   
    let addOrder = () => {  
        props.addOrder();      
    }

    return(
        <Container className="mt-5 color">
            <Row>
                <Col sm={12} md={4} lg={3}>
                    <Image src={avatar} className="ava"/>
                    <h2 className="mt-4">Firstname</h2>
                    <h2 className="mt-2">Lastname</h2>
                    <Button variant="light" className="mt-4">Редактировать профиль</Button>
                </Col>
                <Col sm={12} md={8} lg={9}>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Имя мастера</Form.Label>
                                <Form.Control onChange={ informChange } ref={inputTextMaster} value={props.inform.newNameMaster} type="text"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Дата записи</Form.Label>
                                <Form.Control onChange={ informChange } ref={inputTextDate} value={props.inform.newDateOrder} type="text" />
                        </Form.Group>

                        <Button variant="light" onClick = { addOrder } >Записаться</Button>
                    </Form>
                    <Row className="mt-4">
                        <Col>
                            { orderElem }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default Profile;