import { axios } from 'library/axios';

export const createPost = (post) => {
  return axios.post('posts/', post);
};
