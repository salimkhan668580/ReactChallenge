import React from 'react'
import Nav from './Nav'
import Footer from './Footer'


function Layout({children}) {
  return (

    <div>
         <div>
          <Nav/>
         </div>
       <div className='my-5'>
        {children}
       </div>

   <div>
    <Footer/>
   </div>
  
    </div>
  )
}

export default Layout