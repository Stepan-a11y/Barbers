import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import React from "react";
import './Header.css';
import { Redirect } from 'react-router-dom';



const Header = (props) => {
    
  
     

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="justify-content-between">
            <Navbar.Brand className="navBrand ml-5"><NavLink className="ml-5" NavLink to="/" >BarberBAR</NavLink></Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className="navLink mr-5"><NavLink  NavLink to="masters" className="mr-5">Мастера</NavLink></Nav.Link>
                        <Nav.Link className="navLink mr-5"><NavLink  NavLink to="services" className="mr-5" >Услуги</NavLink></Nav.Link>
                        {  props.isAuth && <Nav.Link className="navLink mr-5"><NavLink  NavLink to="profile" className="mr-5">Профиль</NavLink></Nav.Link>}
                        { !props.isAuth && <Nav.Link className="navLink mr-5"><NavLink  NavLink to="login" className="mr-5">Войти</NavLink></Nav.Link>}
                        { props.isAuth && <Button variant="outline-light" type="submit" onClick = { props.logout } >Выйти</Button> }
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}


export default Header;
