import React from 'react'

export default function Register() {
  return (
    <div>
        <h1>Register Form</h1>
        <form>
            <input type="text" name='fullname' placeholder='your fullname' />
            <input type="text" name='email' placeholder='your email' />
            <input type="password" name='password' placeholder='your password' />
            <input type="submit" value="Register" className='bg-blue-400 text-white border-rounded' />
        </form>
    </div>
  )
}
