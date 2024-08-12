import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fireBaseAuth from '../../firebaseConfig';

function Login() {
    let nevigate=useNavigate();
    const auth = getAuth(fireBaseAuth);
    let [userData,setUserData]=useState({
        email:"",
        password:""
    });

   
    let inputHandler = (e) => {
       setUserData({  ...userData, [e.target.name]: e.target.value });  
    }
  
   let handelSubmit=async(e)=>{
    try{
        e.preventDefault();
        let usersign= await signInWithEmailAndPassword(auth, userData.email, userData.password)
        if(usersign){
            toast.success("Login successfully");
           nevigate("/");
        }

      
    }catch(err){
       toast.error(err.message);
   
    }
 

   }

    useEffect(()=>{
      document.title="Login Page"
    },[])
    let [passwordType,setPassword]=useState("text");
  return ( 
    <div className='md:grid md:px-40 md:h-screen  animate__animated animate__shakeX  py-10  md:grid-cols-2 '>
        <div  >
            <img src="/images/login.jpg" alt=""  className='w-full '/>
        </div>
        <div className=' md:flex md:flex-col justify-center px-5  '>
            <h1 className='font-semibold text-3xl'>Login page</h1>
            <p className='text-lg text-gray-600 py-3'>Enter the Profile details for login</p>
            <form action="" className='space-y-5' onSubmit={handelSubmit}>
          
            <div>
            <label className="font-semibold text-lg mb-1">Email id</label>
                <input type="email" value={userData.email}  onChange={inputHandler} required placeholder='example@gmail.com' name='email' className='py-3 w-full   border px-2 rounded' />
            </div>
            <div className='relative'>
            <label className="font-semibold text-lg mb-1">Password</label>
                <input type={passwordType} required value={userData.password}  onChange={inputHandler} placeholder='password' name='password' className='py-3 w-full  border  px-2 rounded' />
                {
                    passwordType === "password" ?
                    <i className="ri-eye-line absolute top-9 right-3 text-2xl  " onClick={()=>setPassword(passwordType === "password" ? "text" : "password")}></i>
                    :
                    <i className="ri-eye-off-line absolute top-9 right-3 text-2xl"  onClick={()=>setPassword(passwordType === "password" ? "text" : "password")}> </i>
                }
               
               
            </div>
            
            <button  className='bg-green-600 py-3 hover:bg-rose-600 px-6 text-white rounded'>Login</button>
            <h1>You don't Account? <Link to='/signup' className='text-green-600 hover:text-rose-600'>SignUp</Link></h1>
            </form>
        </div>
    </div>
  )
}

export default Login