import { PostRoutes } from 'features/posts';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const routes = [
    {
      path: '',
      children: [
        {
          path: '/post/*',
          element: <PostRoutes />,
        },
      ],
    },
  ];
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
