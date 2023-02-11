import React from "react";
import "./home.scss";
import { Carousel, Card, Container, Row, Col, Button } from "react-bootstrap";
import { FiBookmark } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import NavBar from "../../components/NavBar";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <section className="carousel-container">
        <Carousel
          id="carouselExampleIndicators"
          className="carousel slide"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
        >
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/images/png/header.png"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-text">
              <p>Upto</p>
              <h1>50% off on everything</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/images/png/header.png"
              alt="Second slide"
            />

            <Carousel.Caption className="carousel-text">
              <p>Upto</p>
              <h1>50% off on everything</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/images/png/header.png"
              alt="Third slide"
            />

            <Carousel.Caption className="carousel-text">
              <p>Upto</p>
              <h1>50% off on everything</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/images/png/header.png"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel-text">
              <p>Upto</p>
              <h1>50% off on everything</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="explore-product" style={{ marginBottom: "0px" }}>
        <Container>
          <h3>Explore Products</h3>
          <hr className="line" />
          <Row className="justify-content-center">
            <div
              className="col-6 col-lg-2 col-xs-6 col-sm-3 explore-product-item"
              routerLink="productlists/Henley shirts/Henley shirts"
            >
              <img src="/assets/images/png/products/4.png" alt="" />
              <p>
                <i>Henley shirts</i>
              </p>
            </div>
            <div
              className="col-6 col-lg-2 col-xs-6 col-sm-3 explore-product-item"
              routerLink="productlists/Plain wear/Plain wear"
            >
              <img src="/assets/images/png/products/3.png" alt="" />
              <p>
                <i>Plain wear</i>
              </p>
            </div>
            <div
              className="col-6 col-lg-2 col-xs-6 col-sm-3 explore-product-item"
              routerLink="productlists/Sweat shirts/Sweat shirts"
            >
              <img src="/assets/images/png/products/5.png" alt="" />
              <p>
                <i>Sweatshirts</i>
              </p>
            </div>
            <div
              className="col-6 col-lg-2 col-xs-6 col-sm-3 explore-product-item"
              routerLink="productlists/Couple wears/Couple wears"
            >
              <img src="/assets/images/png/products/1.png" alt="" />
              <p>
                <i>Couple wears</i>
              </p>
            </div>
            <div
              className="col-6 col-lg-2 col-xs-6 col-sm-3 explore-product-item"
              routerLink="productlists/Hoddies/Hoddies"
            >
              <img src="/assets/images/png/products/6.png" alt="" />
              <p>
                <i>Hoodies</i>
              </p>
            </div>
            <div className="col-6 col-lg-2 col-xs-6 col-sm-3 explore-product-item">
              <img src="/assets/images/png/products/2.png" alt="" />
              <p>
                <i>Covid 19</i>
              </p>
            </div>
          </Row>
        </Container>
      </section>
      <section className="handpicked-categories">
        <Container className="container-custom">
          <h3>Handpicked categories</h3>
          <p style={{ textAlign: "center" }}>
            Explore our complete handmade products
            <br />
            featuring farhuman
          </p>
          <hr className="line" />
          <Row className="handpicked-img" style={{ marginTop: "50px" }}>
            <Col xxl={3} lg={3} md={6} sm={6} xs={6} className=""
              routerLink="productlists/Women/Women"
              style={{ marginBottom: "30px", position: "relative" }}
            >
              <img src="/assets/images/png/categories/women.png" alt="" />
              <h4>Women</h4>
            </Col>
            <Col xxl={3} lg={3} md={6} sm={6} xs={6} className=""
              routerLink="productlists/Men/Men"
              style={{ marginBottom: "30px", position: "relative" }}
            >
              <img src="/assets/images/png/categories/men.png" alt="" />
              <h4>Men</h4>
            </Col>
            <Col xxl={3} lg={3} md={6} sm={6} xs={6} className=""
              routerLink="productlists/Children/Children"
              style={{ marginBottom: "30px", position: "relative" }}
            >
              <img src="/assets/images/png/categories/children.png" alt="" />
              <h4>Children</h4>
            </Col>
            <Col xxl={3} lg={3} md={6} sm={6} xs={6} className=""
              routerLink="productlists/Home/Home"
              style={{ marginBottom: "30px", position: "relative" }}
            >
              <img src="/assets/images/png/categories/stationary.png" alt="" />
              <h4>Home</h4>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sale-container">
        <Container>
          <Row className="justify-content-center">
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className="text-center">
              <h1>Sale up to 25% off</h1>
              <p className="mb-2">Explore our handpicked products of top selling </p>
              <p className="">Products from Zero Armario </p>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="text-center">
              <Button size="md" className="products-btn" variant="">T-shirt</Button>{' '}
            </Col>
            <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="text-center">
              <Button size="md" className="products-btn" variant="">Hoodie</Button>{' '}
            </Col>
            <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="text-center">
              <Button size="md" className="products-btn" variant="">Inner wear</Button>{' '}
            </Col>
            <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="text-center">
              <Button size="md" className="products-btn" variant="">Shorts</Button>{' '}
            </Col>
            <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="text-center">
              <Button size="md" className="products-btn" variant="">Pyjama's Kids</Button>{' '}
            </Col>
            <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="text-center">
              <Button size="md" className="products-btn" variant="">Ankle Socks</Button>{' '}
            </Col>
            <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="text-center">
              <Button size="md" className="products-btn" variant="">Joggers</Button>{' '}
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <section className="shop-by-design" style={{ marginTop: "" }}>
          <div className="container-custom">
            <h3>Shop by Design</h3>
            <p style={{ textAlign: "center" }}>
              Explore our designs from different genre
              <br />
              featuring Zeroarmario
            </p>
            <hr className="line" />
            <Row className="row pt-5">
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="item shop-item "
                style={{ position: "relative" }}
              >
                <img src="/assets/images/item1.png" alt="" />
                <h4 className="left">Dream of 2044</h4>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="item shop-item"
                style={{ position: "relative" }}
              >
                <img src="/assets/images/item2.png" alt="" />
                <h4 className="right">- Love to boo</h4>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="item shop-item"
                style={{ position: "relative" }}
              >
                <img src="/assets/images/item3.png" alt="" />
                <h4 className="left">Minimalism</h4>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="item shop-item"
                style={{ position: "relative" }}
              >
                <img src="/assets/images/item4.png" alt="" />
                <h4 className="right">View all</h4>
              </Col>
            </Row>
          </div>
        </section>
        <section className="pack">
          <div className="container-custom recharge-web">
            <h3>Recharge your Saving</h3>
            <p style={{ textAlign: "center" }}>
              Shop all your favourite clothes with much reasonable price
            </p>
            <hr className="line" />
            <Row className="">
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}
                style={{
                  alignSelf: "flex-end",
                  marginBottom: "10px",
                  position: "relative",
                }}
              >
                <img src="/assets/images/png/pack/2.png" alt="" />
                <button className="btn-1" style={{ maxWidth: "94%" }}>
                  30% Sale
                </button>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}
                style={{ marginBottom: "10px", position: "relative" }}
              >
                <img src="/assets/images/png/pack/1.png" alt="" />
                <div className="pack-title-1">
                  <h4 style={{ textAlign: "center" }}>
                    20% Sale
                    <br />
                    on Student ID
                  </h4>
                </div>
                <button className="btn-2">Shop Now</button>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}
                style={{
                  alignSelf: "flex-end",
                  marginBottom: "10px",
                  position: "relative",
                }}
              >
                <img src="/assets/images/png/pack/3.png" alt="" />
                <div
                  className="pack-title-2"
                  style={{
                    fontSize: "22px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Deal of the season
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="bestproduct">
          <div className="container-custom container-best-product">
            <h3>Best product selling for us</h3>
            <hr className="line" />
            <br />
            <br />
            <Row className="justify-content-center">
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className=""
                id="product"
              >
                <Card>
                  <div className="mobile-bookmark-outer">
                    <FiBookmark className="bookmark-icon mobile-bookmark" />
                  </div>
                  <Card.Img variant="top" src="/assets/images/png/product_listing/1.png" />
                  <Card.Body>
                    <Card.Title>
                      Two toned cotton
                      <FiBookmark className="bookmark-icon desktop-bookmark" />
                    </Card.Title>
                    <Card.Text>
                      Rs.580
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className=""
                id="product"
              >
                <Card>
                  <div className="mobile-bookmark-outer">
                    <FiBookmark className="bookmark-icon mobile-bookmark" />
                  </div>
                  <Card.Img variant="top" src="/assets/images/png/product_listing/1.png" />
                  <Card.Body>
                    <Card.Title>
                      Two toned cotton
                      <FiBookmark className="bookmark-icon desktop-bookmark" />
                    </Card.Title>
                    <Card.Text>
                      Rs.580
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className=""
                id="product"
              >
                <Card>
                  <div className="mobile-bookmark-outer">
                    <FiBookmark className="bookmark-icon mobile-bookmark" />
                  </div>
                  <Card.Img variant="top" src="/assets/images/png/product_listing/1.png" />
                  <Card.Body>
                    <Card.Title>
                      Two toned cotton
                      <FiBookmark className="bookmark-icon desktop-bookmark" />
                    </Card.Title>
                    <Card.Text>
                      Rs.580
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className=""
                id="product"
              >
                <Card>
                  <div className="mobile-bookmark-outer">
                    <FiBookmark className="bookmark-icon mobile-bookmark" />
                  </div>
                  <Card.Img variant="top" src="/assets/images/png/product_listing/1.png" />
                  <Card.Body>
                    <Card.Title>
                      Two toned cotton
                      <FiBookmark className="bookmark-icon desktop-bookmark" />
                    </Card.Title>
                    <Card.Text>
                      Rs.580
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <button className="bestproduct-btn"
            routerLink="productlists/NULL/All Products">
            <a href="/product-list" style={{ fontSize: "12px" }}>
              VIEW ALL PRODUCTS
            </a>{" "} 
            <BsArrowRight style={{ marginLeft: "20px" }} />
            <span
              style={{ marginLeft: "12px" }}
              className="iconify"
              data-icon="bi:arrow-right"
              data-inline="false"
            ></span>
          </button>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
