import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <p>
      <strong>
        {comment.content} | 작성자 : {comment.writer}
      </strong>
    </p>
  );
};

export default CommentItem;
