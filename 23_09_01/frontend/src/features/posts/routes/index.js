import { Navigate, Route, Routes } from 'react-router-dom';
import { Posts } from './Posts';
import { Post } from './Post';
import { Edit } from './Edit';
import { Write } from './Write';

export const PostRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Posts />} />
      <Route path="/write" element={<Write />} />
      <Route path=":postId/" element={<Post />} />
      <Route path=":postId/edit" element={<Edit />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
