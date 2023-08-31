import { Navigate, Route, Routes } from 'react-router-dom';
import { Posts } from './Posts';
import { Post } from './Post';
import { Write } from './Write';

export const PostsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Posts />} />
      <Route path=":postId" element={<Post />} />
      <Route path="write/" element={<Write />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
