import React, { useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { FiBookmark } from "react-icons/fi";
import NavBar from "../../../components/NavBar";
import "./productlist.scss";
import axios from 'axios'
import { useState } from "react";


function ProductList() {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([]);
  // dummy datas
  let productsListData = [
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
  ];
  let filterData = [
    {
      header: "Sleeve",
      eventKey: "0",
      subCategories: [
        {
          label: "Half Sleev"
        },
        {
          label: "Full sleev"
        },
        {
          label: "Hoded"
        },
        {
          label: "Vest"
        }
      ]
    },
    {
      header: "Color",
      eventKey: "1",
      subCategories: [
        {
          label: "Half Sleev"
        },
        {
          label: "Full sleev"
        },
        {
          label: "Hoded"
        },
        {
          label: "Vest"
        }
      ]
    },
    {
      header: "Size",
      eventKey: "2",
      subCategories: [
        {
          label: "Half Sleev"
        },
        {
          label: "Full sleev"
        },
        {
          label: "Hoded"
        },
        {
          label: "Vest"
        }
      ]
    },
    {
      header: "Offers",
      eventKey: "3",
      subCategories: [
        {
          label: "Half Sleev"
        },
        {
          label: "Full sleev"
        },
        {
          label: "Hoded"
        },
        {
          label: "Vest"
        }
      ]
    }
  ]
  useEffect(() => {
    setFilterProducts(filterData);
    setProducts(productsListData);
    // axios.get("/api/product/get-products").then((res) => {
    //   // setProducts(Accordiondata);
    //   setFilterProducts(Accordiondata);
    // }).catch((err) => {
    //   console.log(err)
    // })
  }, [])
  return (
    <section>

      <Container fluid="sm | xs" className="container-fluid products-main-container">
        <div className="row mx-0 px-1 mt-5">
          <p className="list_side_sorting">Home/Men/Round neck here</p>
          <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 pt-3 filter-container">
            <p className="im-looking-for">Im looking for</p>
            <Accordion defaultActiveKey="0">
              {
                filterProducts.map(item => {
                  return (
                    <Accordion.Item eventKey={item.eventKey}>
                      <Accordion.Header>{item.header} </Accordion.Header>
                      <Accordion.Body>
                        {
                          item.subCategories ? item.subCategories.map(subItem => {
                            return (
                              <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label={subItem.label} />
                              </Form.Group>
                            )
                          }) : ""
                        }
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })
              }
            </Accordion>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12">
            <Row className="mx-0 align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <h3 className="round-neck mt-4">Round neck tees</h3>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-right">
                <Button variant="outline-secondary" className="w-75 desktop-recommended-btn">Most Recommened </Button>
                <Button variant="outline-secondary" className="w-75 filter-mobile-btn">Filter </Button>
              </div>
            </Row>
            <div className="product_list_container">
              <Row className="row mt-3 mx-0">
                {
                  products.map(item => {
                    return (
                      <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className="" id="product">
                        <Card>
                          <div className="mobile-bookmark-outer">
                            <FiBookmark className="bookmark-icon mobile-bookmark" />
                          </div>
                          <Card.Img
                            variant="top"
                            src={item.imageUrl}
                            style={{ width: "100%", maxHeight: "", borderRadius: "6%" }}
                          />
                          <Card.Body>
                            <Card.Title>
                              {item.productName}
                              <FiBookmark className="bookmark-icon desktop-bookmark" />
                            </Card.Title>
                            <Card.Text>Rs.{item.price}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })
                }
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </section>

  );
}

export default ProductList;
