import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { scrollToTop } from '../util/util';
const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
