import { Route, Routes } from 'react-router-dom';
import { Posts } from './Posts';
import { Post } from './Post';
import { Write } from './Write';

export const PostRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Posts />} />
      <Route path=":postId" element={<Post />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  );
};
