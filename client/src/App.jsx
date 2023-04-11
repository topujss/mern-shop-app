import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop/Shop';
// import publicRoute from './routes/publicRoute';

function App() {
  return (
    <>
      {/* <RouterProvider router={publicRoute} /> */}
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
