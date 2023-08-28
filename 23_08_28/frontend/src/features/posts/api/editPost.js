import { axios } from 'library/axios';

export const editPost = ({ id, title, content }) => {
  return axios.put(`posts/${id}`, { title, content });
};
