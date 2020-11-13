import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from "react";



const Header = () => {
    return (
        <div className="header">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BrutalBAR</Navbar.Brand>
                <Nav className="ml-5">
                    <NavLink className="mr-5" NavLink to="masters">Мастера</NavLink>
                    <NavLink className="mr-5" NavLink to="#">Услуги</NavLink>
                    <NavLink className="mr-5" NavLink to="profile">Профиль</NavLink>
                </Nav>
        </Navbar>
        </div>
    )
}



export default Header;
