import { Nav, Container, Navbar, NavDropdown,  } from "react-bootstrap";
export default function NavBar() {
  return (
    <>
      <Container
        fluid
        data-bs-theme="dark"
        style={{ backgroundColor: "black" }}
        sticky="top"
        className="text-white align-items-center d-flex justify-content-center "
      >
        <p className=" m-3"> Welcome! How may we assist you today?</p>
        <a href="/contact" className="btn btn-light">
          Click Here
        </a>
      </Container>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#2e312c" }}
        sticky="top"
        className=""
      >
        <Container>
          <Navbar.Brand href="/landing" className="text-white">
            <i className="fas fa-gem me-3"></i>TheEstate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/premium" className="text-white">
                Premium
              </Nav.Link>
              <Nav.Link href="/about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="/contact" className="text-white">
                Contact us
              </Nav.Link>
              <Nav.Link href="/filter" className="text-white">
                Filter By Name
              </Nav.Link>
              <NavDropdown title="Sign Up" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
                <NavDropdown.Item href="/evaluation">
                  Property Evauluation
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
