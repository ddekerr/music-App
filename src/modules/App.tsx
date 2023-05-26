import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./auth/Auth";
import Home from "./home/Home";
import Library from "./library/Library";
import Layout from "./common/components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="library" element={<Library />} />
      </Route>
    </Routes>
  );
}

export default App;
