import React from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>Chi tiet bai viet</h1>
      <p>Id cua bai viet: {id}</p>
    </div>
  );
}

export default PostDetails;
