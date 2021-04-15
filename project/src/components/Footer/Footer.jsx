import React from "react";
import { Card, Col, Row, Container } from 'react-bootstrap';
import "./Footer.css"


const Footer = () => {
    return (
                
        <Container className="mt-4 footer">
            <Row >
            <Col>
                <Row className="us">
                    <h3 className="ml-5 mt-3 mb-3">Наши контакты!</h3>
                </Row>

                <Row className="social">
                    <ul className="ml-4 mt-3">
                        <li>VK:</li>
                        <li>Instagram:</li>
                        <li>Gmail:</li>
                        <li>Twitter:</li>
                        <li>Telegram:</li>
                    </ul>
                </Row>
        
            </Col>
            </Row>
        </Container>

               
                  
    )
 
}


export default Footer;