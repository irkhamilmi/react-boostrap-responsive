import { Navbar, Nav, Container } from "react-bootstrap";

const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
            K!$ut.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-link mx-auto text-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/kelas">Kelas</Nav.Link>
              <Nav.Link href="/testi">Testimoni</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/syarat">Syarat</Nav.Link>
            </Nav>

            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">
                Join With Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
