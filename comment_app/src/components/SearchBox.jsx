import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CommentActions } from "../redux/reducers/CommnetSlice";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchBtn = (e) => {
    e.preventDefault();
    dispatch(CommentActions.searchComment(keyword));
  };

  return (
    <Form onSubmit={searchBtn}>
      <Row className="g-2">
        <Col>
          <Form.Control
            type="text"
            placeholder="검색할 키워드를 입력해주세요."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit" variant="dark">
            검색
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
