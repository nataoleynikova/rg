import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts.jsx";
import PostIdPage from "./pages/PostIdPage.jsx";
import "./styles/App.css";
import "./styles/PostIdPage.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />}/>
        <Route path="/post/:id" element={<PostIdPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;