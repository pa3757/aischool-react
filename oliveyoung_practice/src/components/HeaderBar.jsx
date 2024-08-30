import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeaderBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Breadcrumb className="nav_divider">
          <Breadcrumb.Item>
            <Link to={"/"}>회원가입</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={"/login"}>로그인</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={"/"}>장바구니</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Collapse
              id="navbarScroll"
              className="justify-content-around"
            >
              <Nav
                className="my-2 my-lg-0 justify-content-center"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <img
                  src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png"
                  alt=""
                  className="nav_logo_img"
                  onClick={() => {
                    navigate("/");
                  }}
                  style={{ cursor: "pointer" }}
                />
              </Nav>
              <div className="search_box">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 search_input"
                    aria-label="Search"
                  />
                </Form>
              </div>
              <Nav>
                <Nav.Link>오늘드림</Nav.Link>
                <Nav.Link>관심 매장소식</Nav.Link>
                <Nav.Link>최근 본 상품</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Nav className="menu_list justify-content-center">
          <Nav.Item>
            <Nav.Link>오특</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>랭킹</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>헬스+</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>LUXE EDIT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>기획전</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>세일</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>기프트카드</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>멤버십/쿠폰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>이벤트</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default HeaderBar;
