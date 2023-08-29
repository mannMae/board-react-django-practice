import { PostsRoutes } from 'features/posts';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      children: [
        { path: '/post/*', element: <PostsRoutes /> },
        { path: '*', element: <Navigate to="./post" /> },
      ],
    },
  ];

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
