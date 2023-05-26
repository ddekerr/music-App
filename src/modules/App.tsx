import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./common/components/Layout/Layout";

const HomePage = lazy(() => import("./home/Home"));
const LibraryPage = lazy(() => import("./library/Library"));
const AuthPage = lazy(() => import("./auth/Auth"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="library" element={<LibraryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
