import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./auth/Auth";
import Home from "./home/Home";
import Library from "./library/Library";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
}

export default App;
