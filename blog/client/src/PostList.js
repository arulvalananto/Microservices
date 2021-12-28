import axios from "axios";
import React, { useEffect, useState } from "react";

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
          posts?.map(({ id, title }) => <li key={id}>{title}</li>)
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
