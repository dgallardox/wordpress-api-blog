import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";
import { getSinglePost } from "../services/queries";

export default function SinglePost() {
  const { slug } = useParams();
  const [singlePost, setSinglePost] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      const res = await getSinglePost(slug);
      setSinglePost(res);
    };
    fetchPostData();
  });

  return (
    <>
      {singlePost.map((post) => (
        <div className='postDetails'>
          <p>
            <Link to='/'>Home</Link> / {slug}
          </p>
          <div>
            <img src={post.featured_image_src} alt='Featured' />
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
