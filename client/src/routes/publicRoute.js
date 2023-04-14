import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Shop from '../pages/Shop/Shop';
import Cart from '../pages/Cart/Cart';
import Wish from '../pages/WishList/Wish';
import Admin from '../pages/Admin/Admin';
import Single from '../pages/Single/Single';

// create a public route
const publicRoute = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Shop />,
      },
      {
        path: '/:slug',
        element: <Single />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'wish',
        element: <Wish />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
]);

// export routes
export default publicRoute;
