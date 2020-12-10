import React from 'react';
import { Row, Carousel, Container, Jumbotron, Col } from 'react-bootstrap';
import image from '../../local/carouselImage.png'
import image2 from '../../local/carouselle2.jpg'
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
                   
            </Container>

        )
    }
}


export default Main;