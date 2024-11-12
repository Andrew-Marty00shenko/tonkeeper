import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';

import { Main } from '@/pages/main';
import { WatchAccount } from '@/pages/watch-account';

export const browserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/watch-account',
        element: <WatchAccount />,
      },
    ],
  },
]);
