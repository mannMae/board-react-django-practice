import { Navigate, Route, Routes } from 'react-router-dom';
import { Posts } from './Posts';
import { useEffect } from 'react';
import { Post } from './Post';
import { Write } from './Write';

export const PostRoutes = () => {
  useEffect(() => {}, []);
  return (
    <Routes>
      <Route path="" element={<Posts />} />
      <Route path=":postId" element={<Post />} />
      <Route path=":postId/edit" element={<Write />} />
      <Route path="/write" element={<Write />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
