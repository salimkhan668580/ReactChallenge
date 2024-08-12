import React, { useEffect, useState } from 'react'
import Layout from './Layout'

function ProductList() {

  useEffect(()=>{
    document.title="Product "
  },[])
  const [products, setProducts] = useState([
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/a.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 50,
        image: '/products/b.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/c.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/d.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/e.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/f.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/g.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/i.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/j.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/k.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/l.jpg'
    },
    {
        title: 'Men`s shirt blue denim',
        description: 'I am related to men`s product',
        price: 2000,
        discount: 15,
        image: '/products/a.jpg'
    }
])
  return (
    <Layout>
      <div>
      <h1 className='font-semibold text-2xl text-center py-4'>Products</h1>
     <div className='grid md:grid-cols-4 gap-8'>


      { products.map((item,index)=>(

      <div className='bg-white p-4 rounded-md shadow-lg' key={index}>
          <img src={item.image} alt="" className="rounded-t-md w-full h-[270px] object-cover"/>
            <div className='mx-2 my-2 gap-4'>
          <p>{item.title}</p>
          <p> {item.description.slice(0,50)}...</p>
          <div className='flex gap-4'>

          <p>₹{(item.price-(item.price*item.discount)/100).toLocaleString()}</p>
         <p><del>₹{item.price.toLocaleString()}</del></p> 
          <p className='text-green-800 font-semibold'><label>{item.discount}%</label></p>
          </div>
            </div>
            <div className='my-2' >
              <button className="w-full bg-blue-400 py-2 text-white px-6">Add to cart</button>
            </div>
            <div className='my-2' >
              <button className="w-full bg-rose-600 py-2 text-white px-6">Order Now</button>
            </div>
      </div>
      ))

      }
       </div>
      </div>


    </Layout>
  )
}

export default ProductList