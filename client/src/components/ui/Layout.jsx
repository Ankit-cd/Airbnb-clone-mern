import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
        <div className="mx-auto flex w-full max-w-screen-xl flex-col">
          <Outlet />
        </div>
      <Footer />
    </>
  );
};

export default Layout;
