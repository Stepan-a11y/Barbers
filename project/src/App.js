import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import MastersContainer from './components/Masters/MastersContainer';
import ServicesContainer from './components/Services/ServicesContainer';
import Main from './components/Main/Main'
import Login from './components/Login/Login';




const App = (props) => {

  return (
      <Container>
        <Header />
          <Row>
            <Col>
              <Route path = "/" render ={() => <Login />}/>
              <Route path = "/profile" render = { () => <ProfileContainer /> } />
              <Route path = "/masters" render = { () => <MastersContainer /> } />
              <Route path = "/services" render = { () => <ServicesContainer /> } />
            </Col>
          </Row>
      </Container>
  );

}

export default App;
