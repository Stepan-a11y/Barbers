import React from 'react';
import * as axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';




let Masters = (props) => {

    if (props.masters.length === 0) {
       /* props.setMasters([
            { id: 1, avatar: "PHOTO", firstName: "Petr", lastName:"Ivanow", masterOf: "Barber, 3 years"},
            { id: 2, avatar: "PHOTO", firstName: "Vitaly", lastName:"Korchin", masterOf: "Barber, 6 years"}
                ]
            )*/
                debugger;

        axios.get("https://localhost:3001")
        .then(response => {
            console.log(response);
            //props.setMasters(response.masters.firstName)
        });
    }

debugger;


    return (
        <Container>
            
            { 
            props.masters.map(m => <Row key={m.id}>
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


export default Masters;