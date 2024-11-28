import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Create = () => {
  return (
    <>
    <div className="create-page">
        <div className="user-btn flex justify-end p-6">
        <UserButton/>
        </div>
        <h1 className='text-center'>Create page</h1>
    </div>
    </>
  )
}

export default Create