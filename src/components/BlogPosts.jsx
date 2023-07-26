import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";
import searchFilter from "../utils/searchFilter";
import { getAllPosts } from "../services/queries";

export default function BlogPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPostsData = async () => {
      const res = await getAllPosts();
      setAllPosts(res);
      setFilteredPosts(res);
    };
    fetchPostsData()
  }, []);


  return (
    <>
      {/* https://legacy.reactjs.org/docs/context.html */}
      <form>
        <input
          id='searchBox'
          placeholder='Seach...'
          onChange={(e) => {
            const updatedSearch = e.currentTarget.value;
            const filteredPosts = searchFilter(allPosts, updatedSearch);
            setFilteredPosts(filteredPosts);
          }}
        />
      </form>

      <div className='postGrid'>
        {filteredPosts.map((post) => (
          <div className='postItem' key={post.id}>
            <Link to={`posts/${post.slug}`}>
              <img src={post.featured_image_src} alt='Featured' />
              <h4>{post.title.rendered}</h4>
              <p>{formatDate(post.date)}</p>
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
