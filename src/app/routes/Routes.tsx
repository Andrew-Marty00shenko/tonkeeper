import { RouterProvider } from 'react-router-dom';

import { browserRouter } from './browserRoutes';

export const Routes = () => {
  return <RouterProvider router={browserRouter} />;
};
