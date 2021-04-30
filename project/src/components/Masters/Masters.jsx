import React from 'react';
import './Masters.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import image from '../../local/avatar.png';



class Masters extends React.Component {

    render(){
        return(
        <Container className="mt-5">  
        <Row>
            { 
            this.props.masters.map(m => <Col md={4} className="mb-3 block" key={m._id}>
                <Card>
                    <Card.Body>
                        <Card.Title className="mr-2">
                        <Image src={image} roundedCircle className="size mr-4 mb-4"/>
                        <span className="mb-3"><h4>{m.firstName}</h4></span>
                        <span className="mb-3"><h4>{m.lastName}</h4></span>
                        </Card.Title>
                            <Card.Text>
                            <span className="ml-1 mt-3">{m.masterOf}</span>
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>) 
            }
            </Row>
        </Container>
        )
    }
}


export default Masters;