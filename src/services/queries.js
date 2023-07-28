const API_ENDPOINT = process.env.REACT_APP_API;
const numberOfPosts = 48;

export const getAllPosts = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}/posts/?per_page=${numberOfPosts}`);
    const allPostsData = await res.json();
    return allPostsData;
  } catch (error) {
    return []
    throw error
  }
};

export const getSinglePost = async (slug) => {
  try {
  const res = await fetch(`${API_ENDPOINT}/posts?slug=${slug}`);
  const singlePostData = await res.json();
  return singlePostData;
  } catch (error) {
    return []
    throw error
  }
};

export const createPost = async (data) => {
  try {

    const authorizationHeader = `Basic ${btoa(
      "diego.gallardo@wpengine.com:OkKL cevd JWVG aBs8 OgGx ukEe"
    )}`;

    const res = await fetch(`${API_ENDPOINT}/posts`, {
      method: "POST",
      headers: {
        Authorization: authorizationHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),

    });
    console.log(res)
  } catch (error) {
    throw error
  }
}

export const deletePost = async (postID) => {
  try {
    const authorizationHeader = `Basic ${btoa(
      "diego.gallardo@wpengine.com:OkKL cevd JWVG aBs8 OgGx ukEe"
    )}`;

    const res = await fetch(`${API_ENDPOINT}/posts/${postID}`, {
      method: "DELETE",
      headers: {
        Authorization: authorizationHeader,
      }
    });
    console.log(res);
  } catch (error) {
    throw error;
  }
};
