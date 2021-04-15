import React from 'react';
import { Row, Carousel, Container, Image, Col, Card } from 'react-bootstrap';
import image from '../../local/carouselImage.png'
import image2 from '../../local/carcar.jpg'
import image3 from '../../local/barImg.jpg'
import "./Main.css"

 
class Main extends React.Component {
    render(){
        return(
            <Container>
            <Row>          
                <Carousel>
                    <Carousel.Item className="firstImg">
                        <img src={image} className="d-block w-100" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item className="secondImg">
                        <img src={image2} className="d-block w-100" alt=""/>
                    </Carousel.Item>
                </Carousel>
            </Row>
            
                <Row className = "mt-4">
                <Col md={7} className="ttt">
                        <Row className = "mt-5 ml-3 mr-2 mb-4" > 
                        <h3>Выбирайте наш барбершоп!</h3>
                        В нашем барбершопе вы сможете насладиться приятной дружественной атмосферой,
                        высоким профиссионализмом сотрудников, а также вас порадует большой выбор 
                        услуг. У нас в салоне вы останетесь довольны в любой ситуации. 
                        </Row>
                </Col>     
                    <Col md={5} className="ttt">
                        <Row xs={1} sm={1} md={1}>
                            <Image classname="img" src={image3}/>
                        </Row>
                    </Col>
                </Row>  

            </Container>

        )
    }
}


export default Main;