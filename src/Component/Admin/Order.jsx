import React, { useState } from 'react'
import Layout from './Layout'

function Order() {
  let [order,setOrder]=useState([
    {
      orderID:"12345647",
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      product:"boat earphone",
      amount:20000,
      date:"12-20-2023",
      status:"processing"
      
    },
    {
      orderID:"12345647",
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      product:"boat earphone",
      amount:20000,
      date:"12-20-2023",
      status:"processing"
      
    },
    {
      orderID:"12345647",
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      product:"boat earphone",
      amount:20000,
      date:"12-20-2023",
      status:"processing"
      
    },
    {
      orderID:"12345647",
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      product:"boat earphone",
      amount:20000,
      date:"12-20-2023",
      status:"processing"
      
    },
    {
      orderID:"12345647",
      customerName:"Salim khan",
      email:"salimkhan668580s@gmail.com",
      moble:7897985449,
      product:"boat earphone",
      amount:20000,
      date:"12-20-2023",
      status:"processing"
      
    },
  ])
  return (
    <Layout>

        <div>
        <h1 className='font-semibold text-xl py-4'>Order Details</h1>
          <table className='w-full'>
            <thead className='bg-rose-600  text-white'>
              <th className='py-4'>Order id</th>
              <th>Customer's Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </thead>

            <tbody className='text-center'>
              {
              order.map((item,index)=>(
              <tr className=' bg-slate-200' style={{background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'}}>
              <td className='py-3'>{item.orderID}</td>
              <td>{item.customerName}</td>
              <td>{item.email}</td>
              <td>{item.moble}</td>
              <td>{item.product}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td> 
                <select>
                  <option value="Accepted">Processing</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Dispatch">Dispatch</option>
                  <option value="Processing">Processing</option>
                </select>
              </td>
              </tr>

              ))
            }
            </tbody>
          </table>
        </div>
    </Layout>
  )
}

export default Order