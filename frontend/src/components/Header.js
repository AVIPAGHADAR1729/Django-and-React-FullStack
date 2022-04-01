import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown } from 'react-bootstrap'
function Header() {
    return (
        <div>
            <Navbar bg="info" variant="dark" expand="lg" style={{ padding: '10px' }}>
                <LinkContainer to="/">
                    <Navbar.Brand>AviMusic</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <LinkContainer to="/allvideos">
                                <Nav.Link className="text-dark">Video</Nav.Link>
                            </LinkContainer>
                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
