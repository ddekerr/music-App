import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

function Layout() {
  return (
    <>
      <Menu />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
