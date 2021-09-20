import React, { Component } from 'react';
import { Navbar,Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                   <Navbar.Brand>&copy; Best Books</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Footer
