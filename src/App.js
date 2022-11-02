
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
