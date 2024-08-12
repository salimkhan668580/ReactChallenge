import React, { useState } from 'react'
import Layout from './Layout'

function Payments() {
  let [Payments,setPayments]=useState([
    {
 
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
 
      amount:20000,
      date:"12-20-2023",
   
      
    },
    {
 
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
 
      amount:20000,
      date:"12-20-2023",
   
      
    },
    {
 
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
 
      amount:20000,
      date:"12-20-2023",
   
      
    },
    {
 
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
 
      amount:20000,
      date:"12-20-2023",
   
      
    },
    {
 
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
 
      amount:20000,
      date:"12-20-2023",
   
      
    },
    {
 
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
 
      amount:20000,
      date:"12-20-2023",
   
      
    },
    {
 
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
 
      amount:20000,
      date:"12-20-2023",
   
      
    },

  ])
  return (
    <Layout>

        <div>
        <h1 className='font-semibold text-xl py-4'>Payments Details</h1>
          <table className='w-full'>
            <thead className='bg-rose-600  text-white'>
             
              <th  className='py-4'>Customer's Name</th>
              <th>Email</th>
              <th>Mobile</th>
          
              <th>Amount</th>
              <th>Date</th>
             
            </thead>

            <tbody className='text-center'>
              {
              Payments.map((item,index)=>(
              <tr className=' bg-slate-200' style={{background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'}}>
             
              <td className='py-3'>{item.customerName}</td>
              <td>{item.email}</td>
              <td>{item.moble}</td>
              
              <td>₹{item.amount.toLocaleString()}</td>
              <td>{item.date}</td>
            
              </tr>

              ))
            }
            </tbody>
          </table>
        </div>
    </Layout>
  )
}

export default Payments