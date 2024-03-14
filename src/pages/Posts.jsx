import React, { useEffect, useState } from "react";
import PostList from "../components/PostList.jsx";
import PostService from "../API/PostService.js";
import { getPagesCount } from "../utilits/page.js";
import Pagination from "../UI/Pagination.jsx";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts()
  }, [page]);

  async function fetchPosts() {
    const response = await PostService.getPosts(limit, page);
    setPosts(response.data);
    
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="app">
      <PostList posts={posts}/>
      <Pagination 
        page={page} 
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;