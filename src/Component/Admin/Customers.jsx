import React, { useState } from 'react'
import Layout from './Layout'
import image from '../../assets/loginAvtar.avif'
function Customers() {
  let [Customers,setCustomers]=useState([
    {

      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      date:"12-20-2023",
      address:"Lucknow Uttar Pradesh"
      
    },
    {

      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      date:"12-20-2023",
      address:"Lucknow Uttar Pradesh"
      
    },
    {

      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      date:"12-20-2023",
      address:"Lucknow Uttar Pradesh"
      
    },
    {

      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      date:"12-20-2023",
      address:"Lucknow Uttar Pradesh"
      
    },
    {

      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      date:"12-20-2023",
      address:"Lucknow Uttar Pradesh"
      
    },
    {

      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      date:"12-20-2023",
      address:"Lucknow Uttar Pradesh"
      
    },
    {

      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      date:"12-20-2023",
      address:"Lucknow Uttar Pradesh"
      
    },

  
  ])
  return (
    <Layout>

        <div>
          <h1 className='font-semibold text-xl py-4'>Customer's Details</h1>
          <table className='w-full text-left '>
            <thead className='bg-rose-600 pl-5  text-white'>
             
              <th className='py-4 px-4'> Customer's Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Date</th>
              <th>Address</th>
              
            </thead>

            <tbody >
              {
              Customers.map((item,index)=>(
              <tr className=' bg-slate-200 m-0' style={{background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'}}>
                <div className='flex gap-x-3 pt-4 pl-5'>
                  <span>

                  <img src={image} alt="" className='rounded-full h-9 w-9' />
                  </span>
                  <div className='flex flex-col'>

                   <td  className='font-semibold '>{item.customerName}</td>
                   <td className='text-gray-500'>{item.date}</td>
                  </div>
                  
                </div>
              <td>{item.email}</td>
              <td>{item.moble}</td>
          
              <td>{item.date}</td>
              <td>{item.address}</td>
         
    
              </tr>

              ))
            }
            </tbody>
          </table>
        </div>
    </Layout>
  )
}

export default Customers