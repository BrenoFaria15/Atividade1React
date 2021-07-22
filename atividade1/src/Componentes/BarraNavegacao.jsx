import React, { Component } from 'react';
import {Nav,Container,Navbar} from 'react-bootstrap';

class BarraNavegacao extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                     <Navbar.Brand href="#">SpringApp-BrenoFaria</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                         <Nav.Link href="/veiculos">Veiculos</Nav.Link>
                         </Nav>
                    </Container>
                 </Navbar>
                
            </header>
        );
    }
}

export default BarraNavegacao;