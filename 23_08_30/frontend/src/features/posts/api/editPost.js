import { axios } from 'library/axios';

export const editPost = ({ postId, title, content }) => {
  return axios.put(`posts/${postId}/`, { title, content });
};
