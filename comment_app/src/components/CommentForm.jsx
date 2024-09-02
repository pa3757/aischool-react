import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CommentActions } from "../redux/reducers/CommnetSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { v4 as uuidv4 } from "uuid";

const CommentForm = () => {
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      CommentActions.addComment({
        id: uuidv4(),
        content: content,
        writer: writer,
      })
    );
    setContent("");
    setWriter("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col lg="8">
          <Form.Control
            type="text"
            placeholder="댓글 내용 작성"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Col>
        <Col lg="4">
          <Form.Control
            type="text"
            placeholder="작성자 이름"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="my-2">
        <Col lg="12">
          <Button type="submit" className="w-100" variant="dark">
            등록
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CommentForm;
