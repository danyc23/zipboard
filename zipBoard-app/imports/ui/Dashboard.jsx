import { useTracker } from "meteor/react-meteor-data";
import React, { useState, useEffect } from "react";
import { CommentsCollection } from "../api/comments";
import Comment from "./Comment";

export default function Dashboard({ logout }) {
  const [comment, setComment] = useState("");
  const commentList = useTracker(() => CommentsCollection.find({}).fetch());
  useEffect(() => {
    commentList;
  });

  const addComment = (e) => {
    e.preventDefault();
    CommentsCollection.insert({
      comment: comment,
    });
    setComment("");
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
      <form onSubmit={addComment}>
        <h3>Add your comments here:</h3>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Comment</button>
      </form>
      <ul>
        {commentList &&
          commentList
            .reverse()
            .map((comment) => (
              <Comment comment={comment} key={commentList._id} />
            ))}
      </ul>
    </>
  );
}
