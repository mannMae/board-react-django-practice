import { axios } from 'library/axios';

export const getPost = (postId) => {
  return axios.get(`post/${postId}/`);
};
