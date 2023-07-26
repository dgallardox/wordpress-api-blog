import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

const API_ENDPOINT = process.env.REACT_APP_API;

export default function PostDetails() {
  const { slug } = useParams();
  const [singlePost, setSinglePost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`${API_ENDPOINT}/posts?slug=${slug}`);
      const postData = await res.json();
      setSinglePost(postData);
    };
    getPost();
  });

  return (
    <>
      {singlePost.map((post) => (
        <div className='postDetails'>
          <p>
            <Link to='/'>Home</Link> / {slug}
          </p>
          <div>
            <img
              src={post.featured_image_src}
              alt='Featured'
            />
          </div>
          <div id='detailsContent'>
            <h2>{post.title.rendered}</h2>
            <p>{formatDate(post.date)}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
      ))}
    </>
  );
}
