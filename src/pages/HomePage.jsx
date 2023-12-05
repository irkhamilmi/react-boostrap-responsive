import { Container, Row, Col } from "react-bootstrap";
import heroImg from "./../img/heroes.png";
import { konten } from "./../data/data.js";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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
                  <br /> <span>Pembuatan Website </span>
                  <br />
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
                <h1 className="text-center fw-bold">Kelas Terbaru</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  repellendus.
                </p>
              </Col>
            </Row>
            <Row>
              {konten.map((kon) => {
                return (
                  <Col key={kon.id} className="shadow rounded-5">
                    <img src={kon.image} className="mb-5 rounded-top" alt="" />
                    <h5 className="mb-4 px-3">{kon.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-4">
                      <p className="m-0 text-primary fw-bold">{kon.price}</p>
                      <button className="btn btn-danger rounded-1">
                        {kon.buy}
                      </button>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div className="testi py-5">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold my-5">Testimonial</h1>
              </Col>
            </Row>
            <Row>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HomePage;
