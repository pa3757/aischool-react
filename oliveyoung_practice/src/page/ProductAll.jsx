import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderBar from "../components/HeaderBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ProductAll = () => {
  const [productlist, setProductList] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios.get("http://localhost:3004/products");
    console.log(res.data);
    setProductList(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const goDetail = (product_id) => {
    navigate(
      `/product/${product_id}`,
      // product_id 값에 해당하는 productlist의 객체를 찾아서 넘겨줌
      { state: productlist.filter((product) => product.id === product_id)[0] }
    );
  };

  return (
    <Container>
      <HeaderBar />
      <Row>
        {productlist.map((product) => (
          <Col>
            <Card key={product.id}>
              <Card.Img
                onClick={() => {
                  goDetail(product.id);
                }}
                variant="top"
                src={product.prd_img}
                style={{ cursor: "pointer" }}
              />
              <Card.Body>
                <Card.Title>
                  <p>{product.prd_brand}</p>
                  <p
                    onClick={() => {
                      goDetail(product.id);
                    }}
                    className="card_prd_name"
                  >
                    {product.prd_name}
                  </p>
                </Card.Title>
                <Card.Text className="card_text">{product.prd_price}</Card.Text>

                <p>
                  {product.prd_flag.map((flag, index) => {
                    let backgroundColor = "";
                    switch (flag) {
                      case "세일":
                        backgroundColor = "#f65c60";
                        break;
                      case "쿠폰":
                        backgroundColor = "#9bce26";
                        break;
                      case "증정":
                        backgroundColor = "#6fcff7";
                        break;
                      case "오늘드림":
                        backgroundColor = "#f374b7";
                        break;
                      default:
                        backgroundColor = "white";
                    }

                    return (
                      <span
                        className="prd_flag"
                        key={index}
                        style={{
                          backgroundColor,
                          marginRight: "5px",
                        }}
                      >
                        {flag}
                      </span>
                    );
                  })}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
