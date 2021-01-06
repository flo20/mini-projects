import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
      //console.log(res.data);
    };
    fetchPosts();
  }, []);

//Get current posts
  const indexOfLastPost = currentPage * postsPerPage; //1 x 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);



  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Blog Page</h1>
      <Posts posts={currentPosts} loading={loading}/>
    </div>
  );
};

export default App;
