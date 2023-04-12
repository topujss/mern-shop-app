import { RouterProvider } from 'react-router-dom';
import publicRoute from './routes/publicRoute';

import './App.scss';

export default function App() {
  return <RouterProvider router={publicRoute} />;
}
