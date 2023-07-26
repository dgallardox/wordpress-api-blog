import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

const API_ENDPOINT = process.env.REACT_APP_API;
const numberOfPosts = 48;

export default function BlogPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(
        `${API_ENDPOINT}/posts/?per_page=${numberOfPosts}`
      );
      const postsData = await res.json();
      setAllPosts(postsData);
      setFilteredPosts(postsData);
    };
    getPosts();
  }, []);

  function handleSearch() {
    const filteredResults = allPosts.filter((post) =>
      post.title.rendered.includes(search)
    );
    setFilteredPosts(filteredResults);
  }

  return (
    <>
        <form>
          <input
            id='searchBox'
            value={search}
            placeholder='Seach...'
            onChange={(e) => {
              setSearch(e.currentTarget.value);
              handleSearch();
            }}
          />
        </form>

      <div className='postGrid'>
        {filteredPosts.map((post) => (
          <div className='postItem'>
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
