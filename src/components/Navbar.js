import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => (
    <Container>
        <Navbar expand="lg" bg="primary" variant="dark">
            <Navbar.Brand>
                <Link to="/">Sport App</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/">Exercises</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/create">Create Exercises Log</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/user">Create User</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
);

export default NavigationBar;
