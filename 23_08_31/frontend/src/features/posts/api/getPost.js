import { axios } from 'library/axios';

export const getPost = ({ postId }) => {
  return axios.get(`posts/${postId}/`);
};
