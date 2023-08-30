import { axios } from 'library/axios';

export const deletePost = (postId) => {
  return axios.delete(`posts/${postId}/`);
};
