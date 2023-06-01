import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/components/Layout/Layout';

const HomePage = lazy(() => import('./home/Home'));
const LibraryPage = lazy(() => import('./library/Library'));
const AuthPage = lazy(() => import('./auth/Auth'));
const ProfilePage = lazy(() => import('./profile/Profile'));
const AddSongPage = lazy(() => import('./add-song/AddSong'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
