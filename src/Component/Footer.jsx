import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/images/logo.png'

function Footer() {
  const menu = [
    {
        label: "Home",
        href: '/'
    },
    {
        label: "Products",
        href: '/products'
    },
    {
        label: "Category",
        href: '/category'
    },
    {
        label: "Contact us",
        href: '/contact-us'
    }
]
  return (
    <div className='grid bg-orange-500 p-3  py-10 text-center sm:text-left md:grid-cols-4'>
      <div className='text-white'>
        <h1 className='text-2xl font-semibold'>Website Links</h1>
        <ul  className=' space-y-2 '>
        {
                            menu.map((item, index)=>(
                                <li key={index} >
                                    <Link 
                                        to={item.href}
                                  
                                    >{item.label}</Link>
                                </li>
                            ))
         }
         <li><Link to='/login'>Login</Link></li>
         <li><Link to='/Signup'>Signup</Link></li>
         </ul>
      </div>

      <div className='text-white'>
        <h1 className='text-2xl font-semibold'>Follow us</h1>
        <ul  className=' space-y-2 '>
          <li><Link>Facebook</Link></li>
          <li><Link>Youtube</Link></li>
          <li><Link>Twitter</Link></li>
          <li><Link>Linkedin</Link></li>
          <li><Link>GitHub</Link></li>
        </ul>
      </div>

      {/* ==========================Brand details============ */}
      <div className='text-white'>
      <h1 className='text-2xl font-semibold'>Brand Details</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iure ut perferendis, spraesentium quam nam autem ratione ea natus quia.</p>
      <img src={logo} alt=""  className='w-[100px] py-3'/>
      </div>

      {/* ==============================Contact page=================== */}
      <div className='space-y-2'>
      <h1 className='text-2xl  text-white font-semibold'>Contact us</h1>
        <input type="text" name='name'required   className="w-full py-2 rounded-sm px-3" placeholder='Enter your name'/>
        <input type="email" name='email' className="w-full py-2  px-3 rounded-sm"  placeholder='Enter your Email 'required />
        <textarea name="message"  className="w-full px-3 py-2 rounded-sm " rows={3} cols={20} placeholder='message'></textarea>
        <button className='btn bg-blue-500 rounded-md px-6 py-2 text-white'>Submit</button>
      </div>
    </div>
  )
}

export default Footer