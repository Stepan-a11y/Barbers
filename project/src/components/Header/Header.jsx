import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from "react";
import './Header.css';



const Header = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand className="navBrand ml-5"><NavLink className="ml-5" NavLink to="/" >BarberBAR</NavLink></Navbar.Brand>
                <Nav>
                    <Nav.Link className="navLink mr-5"><NavLink  NavLink to="masters" className="mr-5">Мастера</NavLink></Nav.Link>
                    <Nav.Link className="navLink mr-5"><NavLink  NavLink to="#" className="mr-5" >Услуги</NavLink></Nav.Link>
                    <Nav.Link className="navLink mr-5"><NavLink  NavLink to="profile" className="mr-5">Профиль</NavLink></Nav.Link>
                </Nav>
        </Navbar>
    )
}



export default Header;
