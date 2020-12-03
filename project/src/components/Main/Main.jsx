import React from 'react';
import { Row, Carousel, Container, Jumbotron, Col } from 'react-bootstrap';
import image from '../../local/carouselImage.png'

 
class Main extends React.Component {
    render(){
        return(
            <Container>
            <Row>          
                <Carousel className="carSize">
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    </Carousel.Item>
                </Carousel>
            </Row>
             <Row>
                   
            </Row>
            </Container>

        )
    }
}


export default Main;