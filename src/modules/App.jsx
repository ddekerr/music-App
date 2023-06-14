import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refresh } from 'app/auth/operations';

import { MainLayout, PrivateRoute, RestrictedRoute } from '../modules/common';

const HomePage = lazy(() => import('./home/Home'));
const LibraryPage = lazy(() => import('./library/Library'));
const AuthPage = lazy(() => import('./auth/Auth'));
const ProfilePage = lazy(() => import('./profile/Profile'));
const AddSongPage = lazy(() => import('./add-song/AddSong'));
const SongPage = lazy(() => import('./song/Song'));
const AdminPage = lazy(() => import('./admin/Admin'));

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
        <Route path="library/:id" element={<SongPage />} />
        <Route
          path="profile"
          element={
            <PrivateRoute component={<ProfilePage />} redirectTo="/auth" />
          }
        />
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
          <RestrictedRoute
            component={
              <Suspense fallback={<div>Loading...</div>}>
                <AuthPage />
              </Suspense>
            }
          ></RestrictedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
