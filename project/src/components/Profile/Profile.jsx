import React from "react";
import './Profile.css';
import { Button, Container, Row, Col, Image, Card } from 'react-bootstrap';
import avatar from "../../local/avatar.png"
import { NavLink } from 'react-router-dom';



let Orders = (props) => {

    if (props.orderEmail === props.emailAuth){
        debugger;
    return(
        <Row>
            <Col>

            </Col>
        </Row>
    )
    }
    else {
        return(
            <Row>
                <Col>
    
                </Col>
            </Row>
        )
    }
    
}

const Profile = (props) => {

   

    return(
        <Container className="mt-5 mb-5">
            <Row>
                <Col md={4}>
                <Card>
                
                    <Image src={avatar} className="ml-4 ava"/>
                    <h2 className="ml-5 mt-4">Firstname</h2>
                    <h2 className="ml-5 mt-2">Lastname</h2>
                    <Button variant="dark" className="mt-4">Редактировать профиль</Button>
                
                </Card>
                </Col>
                <Col md={8}>
                <Card >

                        <Button variant="dark" className="navLink"><NavLink NavLink to="neworder" >Записаться на услугу </NavLink></Button>
                    
                        <Orders />
                </Card>
                </Col>
            </Row>
        </Container>
    )
}


export default Profile;