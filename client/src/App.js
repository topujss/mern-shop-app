import { RouterProvider } from 'react-router-dom';
import publicRoute from './routes/publicRoute';
import './App.scss';
import { useEffect } from 'react';
import { getAllBrands } from './redux/shop/actions';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  return <RouterProvider router={publicRoute} />;
}
