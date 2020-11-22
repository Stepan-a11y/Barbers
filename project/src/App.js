import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import MastersContainer from './components/Masters/MastersContainer';



const App = (props) => {

debugger;
  return (
    
      <Container>
        <Header />
          <Row>
            <Col className = "mt-5">
              <Route path = "/profile" render = { () => <ProfileContainer /> } />
              <Route path = "/masters" render = { () => <MastersContainer /> } />
            </Col>
          </Row>
      </Container>
    
  );

}

export default App;
