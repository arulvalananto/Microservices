import axios from "axios";
import React, { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [comment, setComment] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      axios.post(`http://localhost:4001/posts/${postId}/comments`);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-4">
      <form onSubmit={handleCreate} className="form">
        <div className="form-group">
          <label htmlFor="" className="form-label">
            {" "}
            New Comment
          </label>
          <input
            type="text"
            className="form-control"
            value={comment}
            placeholder="Enter comment"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentCreate;
