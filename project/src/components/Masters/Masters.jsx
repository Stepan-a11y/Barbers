import React from 'react';
import * as axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';



class Masters extends React.Component {

    componentDidMount(){
        axios.get("http://127.0.0.1:3001/api/masters")
        .then(response => {
            console.log(response);
            this.props.setMasters(response.data)
        })
    }
    
    
    
    render(){
        return(
        <Container>  
            { 
            this.props.masters.map(m => <Row key={m.id}>
                <Col>
                    {m.avatar}
                </Col>
                <Col>
                    {m.firstName}
                </Col>
                <Col>
                    {m.lastName}
                </Col>
                <Col>
                    {m.masterOf}
                </Col>
            </Row>) 
            }
        </Container>
        )
    }
}







export default Masters;