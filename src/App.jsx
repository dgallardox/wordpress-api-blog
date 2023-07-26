import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import CreatePost from "./pages/CreatePost.jsx";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/posts/:slug' element={<PostDetails />} />
      <Route exact path='/create-post' element={<CreatePost />} />
    </Routes>
  );
}

export default App;
