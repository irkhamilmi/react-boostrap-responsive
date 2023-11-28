import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logos from "./../img/logo2.png";

const Navbars = () => {
  const [changeColor, setChangColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangColor(true);
    } else {
      setChangColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
            <img src={logos} alt="" style={{ width: "60px" }} />
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
              <button className="btn btn-outline-dark rounded-1">
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
