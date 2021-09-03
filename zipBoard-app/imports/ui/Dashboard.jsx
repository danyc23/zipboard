import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState, useEffect } from "react";
import { CommentsCollection } from "../api/comments";
import Comment from "./Comment";
import Options from "./Options";

export default function Dashboard({ logout }) {
  const [comment, setComment] = useState("");
  const commentList = useTracker(() => CommentsCollection.find({}).fetch());
  const username = Meteor.user().username;
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
      {/* <button className="btn" onClick={logout}>
        Logout
      </button> */}
      <div className="feed">
        <Options logout={logout} />
        <section className="feed-content">
          <section className="form">
            <form onSubmit={addComment}>
              <h3 className="form-title">Add your comments here:</h3>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                className="comment-form"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button className="form-btn" type="submit">
                Comment
              </button>
            </form>
          </section>
          <ul>
            {commentList &&
              commentList
                .reverse()
                .map((comment) => (
                  <Comment
                    username={username}
                    comment={comment}
                    key={commentList._id}
                  />
                ))}
          </ul>
        </section>
      </div>
    </>
  );
}
