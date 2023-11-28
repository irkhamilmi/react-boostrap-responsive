import { Container, Row, Col } from "react-bootstrap";
import heroImg from "./../img/heroes.png";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <header className=" w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="heroes d-flex align-items-center">
              <Col lg="6">
                <h1 className="mb-4">
                  Terima jasa
                  <br /> <span>Membuat Website</span>
                </h1>
                <p className="mb-4">
                  Mari membuat website dengan harga terjangkau baik dari
                  Front-End maupun Back-End atau Full-Stack juga Bwoleh. Ayoo
                  tunggu apa lagi !!! Segera tuntaskan kebutuhan anda😊🫰😊.
                </p>
                <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                  Lihat Harga
                </button>
                <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">
                  Lihat Promo
                </button>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5">
                <img src={heroImg} alt="" />
              </Col>
            </Row>
          </Container>
        </header>
        <div className="kelas w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1></h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HomePage;
