import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API;
const USERNAME = process.env.REACT_APP_USERNAME;
const PASSWORD = process.env.REACT_APP_PASSWORD;

const numberOfPosts = 24;

export const getAllPosts = async () => {
  try {
    const response = await axios(
      `${API_ENDPOINT}/posts/?per_page=${numberOfPosts}`
    );
    const products = response.data;
    return products;
  } catch (error) {
    throw error;
  }
};

export const getSinglePost = async (slug) => {
  try {
    const response = await axios(`${API_ENDPOINT}/posts?slug=${slug}`);
    const product = response.data;
    return product;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (data) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/posts`, data, {
      auth: {
        username: USERNAME,
        password: PASSWORD,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postID) => {
  try {
    const response = await axios.delete(`${API_ENDPOINT}/posts/${postID}`, {
      auth: {
        username: USERNAME,
        password: PASSWORD,
      },
    });
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
};
