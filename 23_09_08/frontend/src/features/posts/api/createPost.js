import { axios } from 'library/axios';

export const createPost = ({ title, content }) => {
  return axios.post('post/', { title, content, user: 1 });
};
