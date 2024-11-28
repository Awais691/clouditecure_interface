import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const LoginPage = () => {
  return (
    <>
    <div className="login-page flex justify-center min-h-screen items-center">
    <SignIn></SignIn>
    </div>
    </>
  )
}

export default LoginPage