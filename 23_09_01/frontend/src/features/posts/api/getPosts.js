import { axios } from 'library/axios';

export const getPosts = () => {
  return axios.get('posts/');
};
