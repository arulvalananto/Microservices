import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/posts", { title });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
