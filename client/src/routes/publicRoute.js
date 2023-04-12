import { createBrowserRouter } from 'react-router-dom';
import Shop from '../pages/Shop/Shop';

// create a public route
const publicRoute = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
  },
]);

// export routes
export default publicRoute;
