import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (

        // <nav>
        //     {/* 
        //     <a href="/">Home </a>
        //     <a href="/about">About </a>
        //     <a href="/contacts">Contacts </a>
        //     */}

        //     <Link to="/">Home </Link>
        //     <Link to="/about">About </Link>
        //     <Link to="/contacts">Contacts </Link>
        // </nav>

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">React Router</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} style={({isActive}) => isActive ? { backgroundColor: 'white', color: 'red'  } : {}} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} style={({isActive}) => isActive ? { backgroundColor: 'white', color: 'red' } : {}} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} style={({isActive}) => isActive ? { backgroundColor: 'white', color: 'red' } : {}} to="/contacts">Contacts</Nav.Link>
                        <Nav.Link as={NavLink} style={({isActive}) => isActive ? { backgroundColor: 'white', color: 'red' } : {}} to="/characters">Characters</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;