import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";

// Code adapted from React Bootstrap Stencil

function NavigationBar() {
  return (
    <Navbar bg="white" expand="lg" style={{ boxShadow: "1px 2px 9px #F4AAB9" }}>
      <Container>
        <Navbar.Brand href="">UI-UX Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="credits">Credits</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
