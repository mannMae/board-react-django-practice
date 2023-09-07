import { Navigate, Route, Routes } from 'react-router-dom';
import { Posts } from './Posts';
import { Write } from './Write';
import { Post } from './Post';

export const PostRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Posts />} />
      <Route path=":postId" element={<Post />} />
      <Route path=":postId/edit" element={<Write />} />
      <Route path="write/" element={<Write />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
