import React from 'react';
import { Row, Carousel, Container, Image, Col, Card } from 'react-bootstrap';
import image from '../../local/carouselImage.png'
import image2 from '../../local/carouselle2.jpg'
import image3 from '../../local/barImg.png'
import "./Main.css"

 
class Main extends React.Component {
    render(){
        return(
            <Container>
            <Row>          
                <Carousel>
                    <Carousel.Item className="firstImg">
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item className="secondImg">
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="second slide"
                    />
                    </Carousel.Item>
                </Carousel>
            </Row>
            
                <Row className = "mt-4" md={1}>
                    <Card className="bg-dark text-black">
                        <Card.Img src={image3} alt="Card image" />
                            <Card.ImgOverlay>
                                <Col xs={6} md={6}>
                                <Card.Title className="mt-3"><h3>Выбирайте наш барбершоп!</h3></Card.Title>
                                    <Card.Text>
                                        В нашем барбершопе вы сможете насладиться приятной дружественной атмосферой,
                                        высоким профиссионализмом сотрудников, а также вас порадует большой выбор 
                                        услуг. У нас в салоне вы останетесь довольны в любой ситуации. 
                                    </Card.Text>
                                    </Col>
                                </Card.ImgOverlay>
                    </Card>
                </Row>       
            </Container>

        )
    }
}


export default Main;