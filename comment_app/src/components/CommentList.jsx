import React from "react";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";

// 랜덤으로 고유값을 생성해주는 패키지
import { v4 as uuidv4 } from "uuid";

const CommentList = () => {
  console.log(uuidv4());

  const commentList = useSelector((state) => state.comment.commentList);
  const keyword = useSelector((state) => state.comment.keyword);

  const filterComments = commentList.filter((comment) =>
    comment.content.includes(keyword)
  );

  return (
    <div>
      <div>댓글수 : {filterComments.length}</div>
      <hr />
      {filterComments.map((comment, index) => (
        <CommentItem key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
