import React from "react";

export default function Options({ logout }) {
  return (
    <div className="options">
      <div className="options-text-group">
        <a href="#" target="_blank" className="options-text">
          Friends
        </a>
        <a href="#" target="_blank" className="options-text">
          Posts
        </a>
        <a href="#" target="_blank" className="options-text">
          Settings
        </a>
        <button className="logout-btn options-text" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
