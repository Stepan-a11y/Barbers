import React from "react";
import './Profile.css';
import { Button, Container, Row, Col, Image, Card } from 'react-bootstrap';
import avatar from "../../local/avatar.png"
import { NavLink } from 'react-router-dom';








const Profile = (props) => {

    

    return(
        <Container className="mt-5 mb-5">
            <Row>
                <Col md={4}>
                <Card>
                
                    <Image src={avatar} className="ml-4 ava"/>
                    {props.isAuth && <h2 className="ml-5 mt-4">{props.firstName}</h2>}
                    {props.isAuth && <h2 className="ml-5 mt-2">{props.lastName}</h2>}
                    <Button variant="dark" className="mt-4 navLink"><NavLink NavLink to="upduser" >Редактировать профиль</NavLink></Button>
                
                </Card>
                </Col>
                <Col md={8}>
                <Card >

                        <Button variant="dark" className="navLink"><NavLink NavLink to="neworder" >Записаться на услугу </NavLink></Button>
                    
                        
                </Card>

                
                    { 
                        props.orders.map(m => <Col md={12} className="mt-4 mb-3 block orders" key={m._id}>
                             {
                                 
                                (props.emailAuth === m.email) && <Col md={12} className="orderCont">
                                 <p> <span className="orderText">Имя мастера:</span> <span>{m.masterName}</span></p>
                                 <p> <span className="orderText">Наименование и цена услуги:</span> <span>{m.serviceName}</span></p>
                                 <p> <span className="orderText">Дата проведения услуги:</span> <span>{m.date}</span></p>
                                 <p> <span className="orderText">Время проведения услуги:</span> <span>{m.time}</span></p>
                            
                                 <Button  variant="dark" className="btnOrder" onClick={() => {props.deleteOrdersThunk(m._id); if(props.del) return window.location.reload()}} block>Отменить запись</Button>

                                 </Col>
                             }
                           
                        </Col>)
  
                    }
                

                </Col>
            </Row>
        </Container>
    )
}


export default Profile;