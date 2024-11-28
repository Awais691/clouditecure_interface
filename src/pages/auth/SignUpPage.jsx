import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUpPage = () => {
  return (
    <>
    <div className="sign-up-page flex justify-center min-h-screen items-center">
    <SignUp></SignUp>
    </div>

    </>
  )
}

export default SignUpPage