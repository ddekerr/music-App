import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refresh } from 'app/auth/operations';

import { MainLayout } from '../modules/common';

const HomePage = lazy(() => import('./home/Home'));
const LibraryPage = lazy(() => import('./library/Library'));
const AuthPage = lazy(() => import('./auth/Auth'));
const ProfilePage = lazy(() => import('./profile/Profile'));
const AddSongPage = lazy(() => import('./add-song/AddSong'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route
        path="/add-song"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AddSongPage />
          </Suspense>
        }
      />
      <Route
        path="/auth"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AuthPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
