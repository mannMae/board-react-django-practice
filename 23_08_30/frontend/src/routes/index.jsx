import { Navigate, useRoutes } from 'react-router-dom';

import { PostRoutes } from 'features/posts';

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      children: [
        { path: '/post/*', element: <PostRoutes /> },
        { path: '*', element: <Navigate to="./post" /> },
      ],
    },
  ];
  const element = useRoutes([...routes]);

  return <>{element}</>;
};
