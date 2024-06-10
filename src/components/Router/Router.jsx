import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ErrorPage from '../ErrorPage/ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
