import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn, useAuth } from '@clerk/clerk-react';
import LoginPage from '@/pages/auth/LoginPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import Create from '@/pages/create/Create';

const Routing = () => {
  const { isSignedIn } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect signed-in users from login/signup to home */}
        <Route path="/" element={isSignedIn ? <Navigate to="/create" replace /> : <LoginPage />}/>
        <Route path="/signup" element={isSignedIn ? <Navigate to="/create" replace /> : <SignUpPage />}/>

        {/* Protected home route */}
        <Route path="/create" element={<SignedIn><Create/></SignedIn>}/>

        {/* Redirect all other paths */}
        <Route path="*" element={<SignedOut><RedirectToSignIn /></SignedOut>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
