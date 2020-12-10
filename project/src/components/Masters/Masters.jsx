import React from 'react';
import './Masters.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import image from '../../local/avatar.png';



class Masters extends React.Component {

    render(){
        return(
        <Container className="mt-5">  
            { 
            this.props.masters.map(m => <Row key={m.id} className="block">
                <Col className="mb-3">
                <Card>
                    <Card.Body>
                        <Card.Title className="mr-2">
                        <Image src={image} roundedCircle className="size mr-4"/>
                        <span className="mr-2">{m.firstName}</span>
                        <span>{m.lastName}</span>
                        </Card.Title>
                            <Card.Text>
                            <span className="ml-1">{m.masterOf}</span>
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>) 
            }
        </Container>
        )
    }
}


export default Masters;