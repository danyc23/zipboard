import React from "react";

export default function Comment(props) {
  let comment = props.comment.comment;
  return <div>{comment}</div>;
}
