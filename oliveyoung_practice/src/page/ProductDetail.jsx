import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderBar from "../components/HeaderBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProductDetail = () => {
  const [productinfo, setProductinfo] = useState({});
  const [cnt, setCnt] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setProductinfo(location.state);
  }, [location.state]);

  return (
    <Container>
      <HeaderBar />

      <Row>
        <Col>
          <img src={productinfo.prd_img} alt="" />
        </Col>
        <Col>
          <p>{productinfo.prd_brand}</p>
          <p>{productinfo.prd_name}</p>
          <p>{productinfo.prd_price}</p>
          <p>
            {productinfo.prd_options && productinfo.prd_options.length > 0 ? (
              <div>
                <Form.Select aria-label="Default select example">
                  {productinfo.prd_options.map((option, index) => (
                    <option key={index}>
                      {option.prd_name} - {option.prd_price}원
                    </option>
                  ))}
                </Form.Select>
                <p>
                  구매수량 :{" "}
                  <Form.Control
                    type="number"
                    value={cnt}
                    onChange={(e) => {
                      setCnt(e.target.value);
                    }}
                    min="1"
                  />
                </p>
              </div>
            ) : (
              <p>
                구매수량 :{" "}
                <Form.Control
                  type="number"
                  value={cnt}
                  onChange={(e) => {
                    setCnt(e.target.value);
                  }}
                  min="1"
                />
              </p>
            )}
          </p>
          <p>
            <Button variant="outline-danger">장바구니</Button>
            <Button variant="danger">바로구매</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
