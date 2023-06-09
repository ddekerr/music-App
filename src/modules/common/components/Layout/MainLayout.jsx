import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, Logo, Header } from 'modules/common';

const MainLayout = () => {
  return (
    <>
      <Header>
        <Logo />
        <Menu />
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;
