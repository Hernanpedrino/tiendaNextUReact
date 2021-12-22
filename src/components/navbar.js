import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Navbarapp = () => {
    return (
        
        <Navbar bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <span style={{color: 'White'}}>
                    <i className='fas fa-shopping-cart fa-2x'></i>
                </span>
            </Container>
        </Navbar>
       
    )
}
