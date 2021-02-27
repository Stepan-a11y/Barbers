import React from "react";
import './Profile.css';
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import avatar from "../../local/avatar.png"
import { NavLink } from 'react-router-dom';


let inputTextMaster = React.createRef();
let inputTextDate = React.createRef();

let Orders = (props) => {

    return(
        <Row>
            <Col>

            </Col>
        </Row>
    )
}

const Profile = (props) => {

   

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

                        <Button variant="light"><NavLink NavLink to="neworder">Записаться на услугу </NavLink></Button>
                    
                </Col>
            </Row>
        </Container>
    )
}


export default Profile;