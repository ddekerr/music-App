import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, Menu, Logo } from 'modules/common';

const MainLayout = () => {
  return (
    <>
      <Flex>
        <Logo />
        <Menu />
      </Flex>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;
