import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function Navibar() {
  return (
    <Navbar sticky="top" expand="lg" id="nav" className="bg-secondary">
      <Container>
        <Navbar.Brand id="brandName">Sublime Style</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="navText" href="#home">
              Home
            </Nav.Link>
            <Nav.Link id="navText" href="#catalogo">
              Productos
            </Nav.Link>
            <NavDropdown title="Más Opciones" id="basic-nav-dropdown">
              <NavDropdown.Item id="dropdownList" href="#action/3.1">
                Catalogo
              </NavDropdown.Item>
              <NavDropdown.Item id="dropdownList" href="#action/3.2">
                Contacto
              </NavDropdown.Item>
              <NavDropdown.Divider className="bg-secondary" />
              <NavDropdown.Item id="dropdownList" href="#action/3.4">
                Administrador
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
