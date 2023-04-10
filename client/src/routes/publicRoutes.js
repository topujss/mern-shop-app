import { createBrowserRouter } from 'react-router-dom';
import Shop from '../pages/Shop/Shop';

// create public route
const publicRoute = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
  },
]);

// export public route
export default publicRoute;
