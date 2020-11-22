import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import Masters from './components/Masters/Masters';



const App = (props) => {

debugger;
  return (
    
      <Container>
        <Header />
          <Row>
            <Col className = "mt-5">
              <Route path = "/profile" render = { () => <ProfileContainer state={props.store} /> } />
              <Route path = "/masters" render = { () => <Masters /> } />
            </Col>
          </Row>
      </Container>
    
  );

}

export default App;
