import React from 'react'
import AuthForm from '../ui/AuthForm'

const SignUp = () => {
  return (
   <section className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
        <AuthForm type='sign-up'/>
   </section>
  )
}

export default SignUp