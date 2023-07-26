import React from "react";
import Header from "../components/Navbar/Navbar";
import SinglePost from "../components/SinglePost";
import Layout from "../components/Layout";

export default function PostDetails() {
  return (
    <>
      <Layout>
        <SinglePost />
      </Layout>
    </>
  );
}
