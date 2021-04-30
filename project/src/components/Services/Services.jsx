import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';



class Services extends React.Component {
 
    render(){
        return(
        <Container className="mt-5">  
            { 
            this.props.services.map(m => <Row key={m._id} className="block">
                <Col className="mb-3">
                <Card>
                    <Card.Body>
                        <Card.Title className="mr-2">
                        <span className="mr-2">{m.name}</span>
                        <span>{m.price}</span>
                        </Card.Title>
                            <Card.Text>
                            <span className="ml-1">{m.about}</span>
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







export default Services;