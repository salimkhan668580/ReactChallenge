import React, { useState } from 'react'
import Avtar from '../../assets/loginAvtar.avif'
import { Link ,useLocation} from 'react-router-dom';


function Layout({children}) {
  let location=useLocation();
  let [size,setSize]=useState(280);
  let [mobileSize,setMobileSize]=useState(0);
  
  const [accountMenu, setAccountMenu] = useState(false)

  let menu=[
    {
      lebel:"Dashboard",
      icon:<i className="ri-dashboard-2-line"></i>,
      link:"/admin/dashboard"
    },
    {
      lebel:"Customers",
      icon:<i className="ri-team-line"></i>,
      link:"/admin/customers"
    },
    {
      lebel:"Product",
      icon:<i className="ri-shopping-cart-2-line "></i>,
      link:"/admin/product"
    },
    {
      lebel:"Order",
      icon:<i className="ri-gift-line"></i>,
      link:"/admin/order"
    },
    {
      lebel:"Payment",
      icon:<i className="ri-shopping-cart-2-line"></i>,
      link:"/admin/Payment"
    },
   
  ]



  return (
<>
{/* ===========================for desktop==================== */}
<div className='md:block hidden'>

<aside className='bg-cyan-600  fixed left-0 top-0 h-full  overflow-hidden ' style={{width:size,transition:"0.3s"}}>

{ menu.map((item,index)=>(

<div  key={index} className='flex flex-col mx-2 mt-2 py-2 text-xl text-left hoverStyle'  style={{backgroundColor:(location.pathname===item.link)?"#E11D48":"#0891B2" ,color:(location.pathname===item.link)?"black":"white"}}>

<Link to={item.link}  className='px-4'>  {item.icon} {item.lebel}</Link>
</div>
))
}
<button  className='flex flex-col text-white   mx-2 mt-2 py-2 text-xl text-left hoverStyle' >
<Link to='/logout'  className='px-4'> <i className="ri-logout-circle-r-line"></i> Logout</Link>
</button>

</aside>
</div>

{/* ============================================for mobile================ */}
<div className='md:hidden block '>
  <aside className='bg-cyan-600  fixed   left-0 top-0 h-full z-50 overflow-hidden ' style={{width:mobileSize,transition:"0.3s"}}>
  <button
                            className="text-left mx-4 mt-4"
                            onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)}
                        >
                            <i className="ri-menu-2-fill text-white text-xl"></i>
                        </button>
{ menu.map((item,index)=>(

<div  key={index} className='flex flex-col   mx-2 mt-2 py-2 text-xl text-left hoverStyle'  style={{backgroundColor:(location.pathname===item.link)?"#E11D48":"#0891B2" ,color:(location.pathname===item.link)?"black":"white"}}>

<Link to={item.link}  className='px-4'>  {item.icon} {item.lebel}</Link>
</div>
))
}
<button  className='flex flex-col text-white   mx-2 mt-2 py-2 text-xl text-left hoverStyle' >
<Link to='/logout'  className='px-4'> <i className="ri-logout-circle-r-line"></i> Logout</Link>
</button>

</aside>
</div>
{/* ==============================================for desktop======================= */}
<div className='md:block hidden'>

<section className=" h-screen">
    <nav className=' font-medium  p-5 sticky top-0 left-0  shadow flex items-center justify-between bg-slate-50  h-16' style={{marginLeft:size,transition:"0.3s"}}>
        <div className='flex gap-3 items-center'>
      <i className="ri-menu-2-fill hover:bg-cyan-600  hover:text-white text-xl rounded " onClick={()=>setSize(size === 280 ? 0 : 280)}></i>
       <p >SopingCart</p>

        </div>

        <div className="relative">
            <img src={Avtar} alt="" className='rounded-full h-7 w-7' onClick={()=>setAccountMenu(!accountMenu)}/>

            {accountMenu &&  <div className='absolute top-18 right-0 bg-white w-[300px] p-6 shadow-lg '>

             <p >Salim Khan</p>
             <p>Salimkhan668580s@gmail.com</p>
             <div className="h-px bg-gray-200 my-4">
             <button>
             <i className="ri-logout-circle-r-line mr-2"></i>
             Logout
             </button>
                                        
            </div>
            </div>}
          

        </div>
    </nav>
<div  className="px-2 pt-2 " style={{marginLeft:size,transition:"0.3s"}}>
      {children}
    </div>

</section>
</div>


{/* =============================================for phone======================= */}
<div className='md:hidden block '>
<section className="bg-slate-300 h-screen">
    <nav className=' font-medium  p-5 sticky top-0 left-0  shadow flex items-center justify-between bg-slate-50  h-16' >
        <div className='flex gap-3 items-center'>
      <i className="ri-menu-2-fill hover:bg-cyan-600  hover:text-white text-xl rounded " onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)}></i>
       <p >SopingCart</p>

        </div>      

        <div className="relative">
            <img src={Avtar} alt="" className='rounded-full h-7 w-7' onClick={()=>setAccountMenu(!accountMenu)}/>

            {accountMenu &&  <div className='absolute top-18 right-0 bg-white w-[300px] p-6 shadow-lg '>

             <p >Salim Khan</p>
             <p>Salimkhan668580s@gmail.com</p>
             <div className="h-px bg-gray-200 my-4">
             <button>
             <i className="ri-logout-circle-r-line mr-2"></i>
             Logout
             </button>
                                        
            </div>
            </div>}
          

        </div>
    </nav>
<div  className="px-2 pt-2 " style={{marginLeft:mobileSize,transition:"0.3s"}}>
      {children}
    </div>

</section>
</div>
</>
  )
}

export default Layout