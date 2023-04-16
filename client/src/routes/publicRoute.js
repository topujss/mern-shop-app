import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Shop from '../pages/Shop/Shop';
import Cart from '../pages/Cart/Cart';
import Wish from '../pages/WishList/Wish';
import Admin from '../pages/Admin/Admin';
import Single from '../pages/Single/Single';
import Brand from '../components/Brand/Brand';
import Tag from '../components/Tag/Tag';
import Category from '../components/Category/Category';
import Products from '../components/Products/Products';

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
        children: [
          {
            path: 'brand',
            element: <Brand />,
          },
          {
            path: 'tag',
            element: <Tag />,
          },
          {
            path: 'category',
            element: <Category />,
          },
          {
            path: 'products',
            element: <Products />,
          },
        ],
      },
    ],
  },
]);

// export routes
export default publicRoute;
