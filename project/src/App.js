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
              <Route path = "/profile" render = { () => <Profile orders={props.state.orders} inform={props.state.inform} addOrder={props.addOrder} update={props.update} /> } />
            </Col>
          </Row>
      </Container>
    </BrowserRouter>
  );

}

export default App;
