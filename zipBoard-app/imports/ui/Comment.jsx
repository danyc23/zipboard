import React from "react";

export default function Comment(props) {
  let comment = props.comment.comment;
  let username = props.username;
  return (
    <section className="comment-section">
      <div className="comment-img__section">
        <div className="comment-img" />
      </div>
      <div className="comment-info">
        <p className="comment-info__username">{username}</p>
        <p className="comment-info__comment">{comment}</p>
      </div>
    </section>
  );
}
