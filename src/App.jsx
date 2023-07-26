import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SinglePost from "./pages/SinglePost.jsx";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/posts/:slug' element={<SinglePost />} />
    </Routes>
  );
}

export default App;
