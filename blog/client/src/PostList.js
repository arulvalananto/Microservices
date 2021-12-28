import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => {
        setPosts(Object.values(res.data));
        console.log();
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts?.length ? (
          posts?.map(({ id, title }) => (
            <div key={id} className="card" style={{ background: "#f1f1f1" }}>
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <CommentCreate />
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
