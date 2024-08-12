import React, { useState } from 'react'
import Layout from './Layout'
import image from '/products/a.jpg'


function Cart() {
    const [product ,setProduct]=useState([
        {
          title:"Nokia 335 ",
          image: '/products/a.jpg',
          price:19000,
          discount:10, 
        },
        {
          title:"Nokia 335 ",
          image: '/products/b.jpg',
          price:500,
          discount:20, 
        },
        {
          title:"Nokia 335 ",
          image: '/products/c.jpg',
          price:500,
          discount:20, 
        },
        {
          title:"Nokia 335 ",
          image: '/products/d.jpg',
          price:500,
          discount:20, 
        }
    ])
  return (
    <Layout>

 <div className='my-3 mx-auto px-3 md:w-3/5 border  gap-4 '>
    <div className='my-3 mx-5 text-center  gap-4 items-center  flex '>
    <i className="ri-shopping-cart-line text-3xl"></i>
    <p className='text-3xl font-semibold'>Products</p> 
    </div>

{ product.map((item,index)=>(

    <div className='flex my-5 ' key={index}>
      <img src={item.image} alt="" className='w-20 mx-3 border' />
      <div className='space-y-3' >
        <p className='font-semibold '>{item.title} </p>
        <div className='flex gap-2'>
            <p>₹{(item.price-(item.price*item.discount)/100).toLocaleString()}</p>
            <del> ₹{item.price.toLocaleString()}</del>
            <p className='text-green-700'>{item.discount}% Discount</p>
        </div>
        <button className='btn bg-rose-600 my-2 text-white font-semibold px-6 py-2 rounded'><i class="ri-delete-bin-line"></i> Remove</button>
        
      </div>
    </div>
))}

<div className='flex justify-between p-4'>
    <h1 className='font-semibold text-xl '>Total : ₹2000</h1>
    <button className='py-3 px-6 bg-green-500 hover:bg-rose-600 text-white font-semibold rounded '><i class="ri-shopping-bag-4-line"></i> Buy Now</button>
</div>
 </div>
        
    </Layout>
  )
}

export default Cart