import React from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import './Login.scss';
import Footer from "../../components/footer/Footer";
import { FiEye } from "react-icons/fi";

function Login() {
    return (
        <section className="">
            <Container className="px-0" fluid>

                <section className="desktop-login px-3 mb-5">
                    <Row className="justify-content-around align-items-center mt-5 h-100">
                        <Col xxl={3} xl={3} lg={5} md={5}>
                            <div className="titleblock text-center">
                                <h4>SIGN IN</h4>
                                <p>Access your rewards from Armario</p>
                            </div>
                            <Form className="global-form-container mt-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="mb-3 mt-4 passwordInput" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                    <span className="forgot">Forgot ?</span>

                                </Form.Group>
                                <div>
                                    <Button className="sign-in-btn" variant="primary" type="submit">
                                        Sign in
                                    </Button>
                                </div>

                            </Form>
                        </Col>
                        <Col xxl={3} xl={3} lg={5} md={5}>
                            <div className="titleblock text-center">
                                <h4>NEW MEMBER</h4>
                                <p>Join us for exclusive discounts top secret content, and genral good times </p>

                                <Button className="create-account-btn" variant="primary" type="submit">
                                    Create a new account
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="mobile-login px-3 mb-5">
                    <Row className="justify-content-center mt-5">
                        <Col>
                            <div className="mobile-sign-in">
                                <p>Sign in</p>
                            </div>
                            <Form className="global-form-container mt-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="mb-3 mt-4 passwordInput" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                    <FiEye className="eyeIcon" />

                                </Form.Group>
                                <Button className="mt-4 mobile-sign-in-btn" variant="primary" type="submit">
                                    Sign in
                                </Button>
                                <Button className="mt-4 mobile-new-user-btn" variant="primary" type="submit">
                                    New User
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </section>
            </Container>
            <Footer />
        </section>
    );
}

export default Login;