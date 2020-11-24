import React from 'react';
import { Row, Carousel, Container, Jumbotron } from 'react-bootstrap';
import image from '../../local/carouselImage.jpg'

 
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
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                    </Jumbotron>
            </Container>

        )
    }
}


export default Main;