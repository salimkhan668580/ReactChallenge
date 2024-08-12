import React from 'react'
import Layout from './Layout'

function Contact() {
  return (
    <Layout>

        <div className='w-screen animate__animated animate__shakeX  flex justify-center '>
        
            <div className='md:w-1/2 p-2 space-y-4 '>
                <img src="images/contact.jpg" alt="" className='w-full '/>
                <form action="">

             
                    <div>
                    <label className=" text-lg mb-1">Name</label>
                        <input type="text" name='fullname' className='w-full rounded border py-3 px-2 '  required placeholder='enter your fullName' />
                    </div>
                    <div>
                    <label className="text-lg mb-1">Email</label>
                        <input type="text" name='email' className='w-full rounded border py-3 px-2 '  required placeholder='example@gmail.com' />
                    </div>
                    <div>
                    <label className=" text-lg mb-1">Message</label>
                    <textarea name="message" rows={3} cols={10} className='w-full rounded border py-3 px-2'></textarea>
                    </div>
                    <button className='py-2 px-4 bg-rose-600 rounded mt-4 text-white '>Submit Query</button>
                </form>
            </div>


        </div>
    </Layout>
  )
}

export default Contact