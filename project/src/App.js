import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import MastersContainer from './components/Masters/MastersContainer';
import ServicesContainer from './components/Services/ServicesContainer';
import Main from './components/Main/Main'
import Login from './components/Login/Login';
import Orders from './components/Order/Orders';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';
import RedactProfile from './components/RedactProfile/RedactProfile';




const App = (props) => {

  return (
      <Container >
        <HeaderContainer />
          <Row >
            <Col className="grid">
              <Route path = "/login" render ={() => <Login />}/>
              <Route path = "/registration" render ={() => <Registration />}/>
              <Route exact path = "/" render ={() => <Main />}/>
              <Route path = "/profile" render = { () => <ProfileContainer /> } />
              <Route path = "/neworder" render = { () => <Orders /> } />
              <Route path = "/upduser" render = { () => <RedactProfile /> } />
              <Route path = "/masters" render = { () => <MastersContainer className="masters"/> } />
              <Route path = "/services" render = { () => <ServicesContainer /> } />
            </Col>
          </Row>
          <Footer />
      </Container>
  );

}

export default App;
