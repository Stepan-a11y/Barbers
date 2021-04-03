import React from "react";
import { Card } from 'react-bootstrap';
import "./Footer.css"


const Footer = () => {
    return (
                
                <Card bg="dark" className = "mt-4 footer">
                    <Card.Header as="h4" className="ml-2">Наши контакты!</Card.Header>
                        <Card.Body>
                            <Card.Title className="ml-5"> 
                                    Instagram:
                                    <br/>
                                    <br/>
                                    VK:
                                    <br/>
                                    <br/>
                                    Gmail:
                                    <br/>
                            </Card.Title>
                        </Card.Body>
                </Card>
               
                  
    )
 
}


export default Footer;