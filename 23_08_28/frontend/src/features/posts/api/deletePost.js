import { axios } from 'library/axios';

export const deletePost = ({ id }) => {
  return axios.delete(`posts/${id}`);
};
