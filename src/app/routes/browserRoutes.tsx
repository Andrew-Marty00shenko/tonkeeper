import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';

import { AddExistingWallet } from '@/pages/add-existing-wallet';
import { CheckGeneratedPhase } from '@/pages/check-generated-phase';
import { GeneratedPhase } from '@/pages/generated-phase';
import { Main } from '@/pages/main';
import { NewAccount } from '@/pages/new-account';
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
    ],
  },
]);
