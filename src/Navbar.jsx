import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = ({baseCurrency, setBaseCurrency}) => {
    const getDropdown = () => {
        return (
            <NavDropdown title={`Currency - ${baseCurrency.toUpperCase()}`} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => setBaseCurrency('rub')}>RUB</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setBaseCurrency('usd')}>USD</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setBaseCurrency('eur')}>EUR</NavDropdown.Item>
            </NavDropdown>
        )
    }
    return (
        <Navbar className="shadow-sm primary" expand="md">
            <Container id="navbar">
                <Navbar.Brand href="/">Currency converter</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Convert</Nav.Link>
                        <Nav.Link href="/currency">Realtime currency</Nav.Link>
                    </Nav>
                    {setBaseCurrency ? getDropdown() : ""}
            </Container>
        </Navbar>
    )
}

export default NavBar;