import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';

import { Main } from '@/pages/main';

export const browserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
]);
