import React from 'react'
import poster from '../../assets/admin.svg'
function Auth() {
  return (
    <div className='flex h-screen justify-center items-center'>
       <img src={poster} alt=""  className='w-55 h-[300px]'/>
        <div className='mx-4 text-center'>
            <h1 className='mb-4'>Welcome to the admin Page</h1>
            <input type="text" placeholder='Enter the Token' required className='border shadow py-3 px-4 w-full'/>
            <button className='bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 my-2  rounded'>Submit</button>
        </div>
   </div>
  )
}

export default Auth