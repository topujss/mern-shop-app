import { RouterProvider } from 'react-router-dom';
import publicRoute from './routes/publicRoute';
import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBrands, getAllTags, getCategories } from './redux/shop/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllTags());
    dispatch(getCategories());
  }, [dispatch]);

  return <RouterProvider router={publicRoute} />;
}
