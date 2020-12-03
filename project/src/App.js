import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import MastersContainer from './components/Masters/MastersContainer';
import Main from './components/Main/Main'




const App = (props) => {

debugger;
  return (
      <Container>
        <Header />
          <Row>
            <Col>
              <Route exact path = "/" render ={() => <Main />}/>
              <Route path = "/profile" render = { () => <ProfileContainer /> } />
              <Route path = "/masters" render = { () => <MastersContainer /> } />
            </Col>
          </Row>
      </Container>
  );

}

export default App;
