import React, { useEffect, useState } from 'react'
import Layout from './Component/Layout'
import { Link } from 'react-router-dom'

function Cotogries() {
    const [category,setCatogries]=useState([
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },
        {
            img:<i className="ri-arrow-right-circle-fill"></i>,
            ctgry:"toys"
        },

    ])
    useEffect(()=>{
       document.title="Catogries"
    },[])

  return (
    <Layout>
     
     <div className=' '>
        <h1 className='text-center  font-semibold text-2xl'> Catogries</h1>
    <div className=' md:grid   mx-3 md:grid-cols-4 justify-evenly '>


        {
            category.map((item)=>(
                <Link>
                <div className=' my-7 md:mx-7 py-7 w-full rounded hover:bg-rose-600 hover:text-white border shadow-lg bg-white text-center'>

                   <h1 className='text-3xl'>{item.img}</h1>
                   <p className='text-3xl'>{item.ctgry}</p>
                </div>
                </Link>

            ))
        }
     </div>
     </div>
     
    </Layout>
  )
}

export default Cotogries