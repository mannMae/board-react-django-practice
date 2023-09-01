import { axios } from 'library/axios';

export const createPost = ({ title, content }) => {
  return axios.post('posts/', { title, content });
};
