const API_ENDPOINT = process.env.REACT_APP_API;
const numberOfPosts = 48;

export const getAllPosts = async () => {
  const res = await fetch(`${API_ENDPOINT}/posts/?per_page=${numberOfPosts}`);
  const allPostsData = await res.json();
  return allPostsData;
};

export const getSinglePost = async (slug) => {
  const res = await fetch(`${API_ENDPOINT}/posts?slug=${slug}`);
  const singlePostData = await res.json();
  return singlePostData;
};
