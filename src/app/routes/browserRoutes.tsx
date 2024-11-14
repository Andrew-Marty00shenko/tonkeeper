import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';

import { Main as PrivateMain } from '@/pages/private';
import {
  AddExistingWallet,
  CheckGeneratedPhase,
  GeneratedPhase,
  Main as PublicMain,
  NewAccount,
  WatchAccount,
} from '@/pages/public';

const isAuth = localStorage.getItem('isAuth') === 'true';

export const browserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: !isAuth
      ? [
          {
            path: '/',
            element: <PublicMain />,
          },
          {
            path: '/watch-account',
            element: <WatchAccount />,
          },
          {
            path: '/add-existing-wallet',
            element: <AddExistingWallet />,
          },
          {
            path: '/new-account',
            element: <NewAccount />,
          },
          {
            path: '/generated-phase',
            element: <GeneratedPhase />,
          },
          {
            path: '/check-generated-phase',
            element: <CheckGeneratedPhase />,
          },
        ]
      : [
          {
            path: '/',
            element: <PrivateMain />,
          },
          {
            path: '/history',
            element: <PrivateMain />,
          },
          {
            path: '/browser',
            element: <PrivateMain />,
          },
          {
            path: '/settings',
            element: <PrivateMain />,
          },
        ],
  },
]);
