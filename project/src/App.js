import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
          <Row>
            <Col className = "mt-5">
              <Route path = "/profile" render = { () => <Profile state={props.state.orders} addOrder={props.addOrder} updateInforfm={props.updateInforfm}/> } />
            </Col>
          </Row>
      </Container>
    </BrowserRouter>
  );
  debugger;
}

export default App;
