import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';



const App = (props) => {

debugger;
  return (
    <BrowserRouter>
      <Container>
        <Header />
          <Row>
            <Col className = "mt-5">
              <Route path = "/profile" render = { () => <Profile profile={props.state.profile} dispatch={props.dispatch} /> } />
            </Col>
          </Row>
      </Container>
    </BrowserRouter>
  );

}

export default App;
