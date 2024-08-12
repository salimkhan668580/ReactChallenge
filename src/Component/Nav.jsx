import React, { useEffect, useState } from 'react'
import logo from '/images/logo.png'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import fireBaseAuth from '../../firebaseConfig';
import { getAuth,signOut ,onAuthStateChanged } from "firebase/auth";
import toast from 'react-hot-toast';
import Avtar from '../assets/loginAvtar.avif'
import {useAuth} from '../../ContextProvider';
function Nav() {
    const {authInfo} = useAuth();
   
    const [accountMenu, setAccountMenu] = useState(false)
    let neviagete=useNavigate();
    const [userData,setuserData]=useState(false);
    const auth = getAuth(fireBaseAuth);
   
  
    let location=useLocation();
    let [mobile,setMobile]=useState(false);
    

    const handleLogout = async () => {
        try {
          await signOut(auth);
          toast.success("Log Out");
           neviagete('/Login');
        } catch (error) {
            toast.error(error);
        
        }
      };
    


   useEffect(()=>{
    try {
        onAuthStateChanged(auth, (user) => {
            setuserData(user);
          console.log(userData)
        });
      } catch (error) {
        console.error("An error occurred while getting user data:", error);
      }
   },[])

 

    let menu=[
     
        {
            label:"Home",
            href:"/"
        },
        {
            label:"Products",
            href:"/products"
        },
        {
            label:"Category",
            href:"/category"
        },
        {
            label:"Contact us",
            href:"/contact-us"
        },
    ]
  
  return (
    <div  className=' shadow-lg'>
        <nav className='md:hidden block'>
            <div className='w-full  justify-between flex p-5'>
            <img src={logo} alt="" className='w-[50px]'/>
            <i className="ri-menu-line text-2xl" onClick={()=>setMobile(!mobile)}></i>
            </div>
            <div>
            <ul className='gap-10 ' style={{display:mobile?"block":"none",transition:"all 3s"}}>
                {
                    menu.map((item)=>(
                        <li className='hover:bg-rose-600 py-3 rounded-md px-6 hover:text-white'><Link to={item.href}>{item.label}</Link></li>
                    ))
                }
                <li className='rounded-md hover:bg-rose-600 py-3 px-6 hover:text-white'><Link to="/login" >Login</Link></li>
                <li className=' rounded-md bg-blue-500 font-semibold hover:bg-rose-600 py-3 px-6 text-white'><Link to="/Signup">Signup</Link></li>
            </ul>
            </div>
        </nav>

        <nav className='md:flex hidden w-10/12 mx-auto    items-center justify-between'>
       <img src={logo} alt="" className='w-[100px]'/>
        
      
            <ul className='flex gap-10'>
                {
                    menu.map((item,index)=>(
                        <Link to={item.href} key={index}> <li className='hover:bg-rose-600  py-3 rounded-md px-6 hover:text-white ' style={
                            {backgroundColor:(location.pathname===item.href)?"#E11D48":"#fffff", 
                            color: (location.pathname===item.href)&&"white",}}>{item.label}</li></Link>
                    ))
                }
                {
                    userData ? <>
                    {/* <li onClick={handleLogout} className='rounded-md  font-semibold hover:bg-rose-600 hover:text-white py-3 px-6'> <i className="ri-logout-circle-line"></i> Logout</li> */}

       

            <div className="relative mt-3 z-50 cursor-pointer">
            <img src={authInfo.session.photoURL} alt="" className='rounded-full h-7 w-7' onClick={()=>setAccountMenu(!accountMenu)}/>

            {accountMenu &&  <div className='absolute  top-18 right-0 bg-white w-[300px] p-6 shadow-lg '>
           <Link >
           <p className='py-2 px-2  hover:text-white hover:font-semibold  hover:bg-rose-500' > <i class="ri-user-line"></i> {userData.displayName}</p>
           </Link> 
           <Link to="/profile">
           <p className='py-2 px-2  hover:text-white hover:font-semibold  hover:bg-rose-500' > <i class="ri-user-line"></i> My Profile</p>
           </Link> 

           <Link to="/cart">
          <p className='py-2 px-2  hover:text-white hover:font-semibold  hover:bg-rose-500' > <i class="ri-shopping-cart-2-line"></i> Cart</p>  
          </Link> 
             {/* <p className='py-2 px-2  hover:text-white hover:font-semibold  hover:bg-rose-500' > {userData.displayName.toUpperCase()}</p>
             <p className='py-2 px-2  hover:text-white hover:font-semibold  hover:bg-rose-500'>{userData.email}</p> */}
             <div className="h-px bg-gray-200 my-4">
            
            
             <p onClick={handleLogout} className='py-2  w-full px-2  hover:text-white hover:font-semibold  hover:bg-rose-500'> <i className="ri-logout-circle-line"></i> Logout</p>
          
                                        
            </div>
            </div>}
          

        </div> 
                    </>  
                    :
                    <>
              <Link to="/login" >  <li className='rounded-md hover:bg-rose-600  py-3 px-6 hover:text-white'>Login</li></Link>
              <Link to="/signup" >   <li className=' rounded-md bg-blue-500 font-semibold hover:bg-rose-600 py-3 px-6 text-white'>Signup</li></Link>
                    </>
                }
            </ul>
 


    </nav>
    </div>
  )
}

export default Nav