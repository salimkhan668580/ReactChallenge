import React, { useEffect, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import fireBaseAuth from '../../firebaseConfig';
import { createUserWithEmailAndPassword, getAuth ,updateProfile } from "firebase/auth";


function Signup() {
    let nevigate=useNavigate();
    const [loader,setLoader]=useState(false);
    const auth = getAuth(fireBaseAuth);
    let [userData,setUserData]=useState({
        fullname:"",
        email:"",
        password:""
    });

    let hadelSubmit=async(e)=>{
     try{

         e.preventDefault();
         setLoader(true)
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
  
          const user = userCredential.user;
    

         updateProfile(user, {
            displayName: userData.fullname
          })
        })
    
        toast.success("Form Submitted")
        nevigate("/")

     }
        catch(err) {
    toast.error(err.message)
    }
    finally{
        setLoader(false);

    }
       
    }

    let inputHandler = (e) => {

        setUserData({ ...userData, [e.target.name]: e.target.value });
        
    }
    useEffect(()=>{
      document.title="Login Page"
    },[])
    let [passwordType,setPassword]=useState("text");
    console.log(userData);
  return ( 
    <div className=' animate__animated animate__shakeX md:grid md:px-40 md:h-screen  py-10  md:grid-cols-2 '>
        <div >
            <img src="/images/login.jpg" alt=""  className='w-full '/>
        </div>
        <div className=' md:flex md:flex-col justify-center px-5  '>
         
            <h1 className='font-semibold text-3xl'>Signup page</h1>
            <p className='text-lg text-gray-600 py-3'>Enter the Correct details the to create profile</p>
            <form  className='space-y-5' onSubmit={hadelSubmit}>
            <div>
            <label className="font-semibold text-lg mb-1">Full Name</label>
                <input type="text" required placeholder='Enter the full name' 
                name='fullname'
                 className='py-3  border w-full  px-2 rounded'
                  onChange={inputHandler} value={userData.fullname}/>
            </div>
            <div>
            <label className="font-semibold text-lg mb-1">Email id</label><br />
                <input type="email" name='email'
                 required placeholder='example@gmail.com'
                 className='py-3  border w-full  px-2 rounded'
                  value={userData.email} onChange={inputHandler} />
            </div>
            <div className='relative'>
            <label className="font-semibold text-lg mb-1">Password</label>
                <input type={passwordType} required placeholder='password' name='password' className='py-3 w-full  border  px-2 rounded' value={userData.password} onChange={inputHandler} />
                {
                    passwordType === "password" ?
                    <i className="ri-eye-line absolute top-9 right-3 text-2xl  " onClick={()=>setPassword(passwordType === "password" ? "text" : "password")}></i>
                    :
                    <i className="ri-eye-off-line absolute top-9 right-3 text-2xl"  onClick={()=>setPassword(passwordType === "password" ? "text" : "password")}> </i>
                }
               
               
            </div>
            {
                loader ?
                <h1 className='font-semibold'>Loading....</h1>
                :
            <button className='bg-green-600 py-3 hover:bg-rose-600 px-6 text-white rounded'>Signup</button>
          
            }
          
               

            
            <h1>You have already Account? <Link to='/login' className='text-green-600 hover:text-rose-600'>Login</Link></h1>
            </form>
        </div>
    </div>
  )
}

export default Signup