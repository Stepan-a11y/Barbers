import React from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

let inputTextMaster = React.createRef();
let inputTextDate = React.createRef();

let Orders = (props) => {
    <Container>
        <Row>
            <Col>
               <h4>{props.orders.nameMaster}</h4>
            </Col>
        </Row>
    </Container>
}



const Profile = (props) => {
debugger;
    //let orderElem = props.orders.map( o => <Orders nameMaster={o.nameMaster} date={o.dateOrder} />);



    let updateInform = () => {
        let order = {
            nameMaster: inputTextMaster.current.value,
            date: inputTextDate.current.value
    }
        props.updateInform(order);
    }



    let addOrder = (props) => {
      
        props.addOrder();
        
    }


    return(
        <div>
           <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Имя мастера</Form.Label>
                    <Form.Control onChange={ updateInform } ref={inputTextMaster} type="text"/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Дата записи</Form.Label>
                    <Form.Control onChange={ updateInform } ref={inputTextDate} type="text" />
                </Form.Group>

                <Button onClick = { addOrder }>Записаться</Button>
            </Form>

        


        </div>
    )
}


export default Profile;