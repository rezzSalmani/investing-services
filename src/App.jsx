import Footer from './components/Footer';
import Home from './pages/Home';
import Header from './components/Header';
import React, { useEffect } from 'react';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Layout from './components/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/blogs/:id',
        element: <BlogDetail />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
