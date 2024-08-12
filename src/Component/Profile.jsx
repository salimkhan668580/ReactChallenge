import React, { useEffect, useState } from 'react'
import fireBaseAuth from '../../firebaseConfig'
import { getAuth,signOut ,onAuthStateChanged,updateProfile } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import logo from '../assets/loginAvtar.avif'
const auth=getAuth(fireBaseAuth);
import uploadFile from './util/storage'

import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { collection, addDoc } from "firebase/firestore"; 
import Layout from './Layout';
import Swal from 'sweetalert2'

import {useAuth} from '../../ContextProvider'


const storage = getStorage()
const db = getFirestore(fireBaseAuth);

function Profile() {
  const {authInfo}=useAuth();


  const [loading,setLoading]=useState(false);
  const [logoUrl,setLogoUrl]=useState(null);
    const [userData,setUserData]=useState(null);

    const [formData,setFormData]=useState({
        userId:authInfo.session.uid,
        fullName:authInfo.firebaseData.fullName,
        email:authInfo.firebaseData.email,
        phone:authInfo.firebaseData.phone,
        address:authInfo.firebaseData.address,
        pincode:authInfo.firebaseData.pincode

    })

    useEffect(()=>{
   
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
           setUserData(user);
           
           
            }else{
                 setSession(false)
                 navigate('/login')
             
            }
          });
       },[])

    let inputHandler=(e)=>{
        

        setFormData({...formData,[e.target.name]: e.target.value});
    }

    let formHandler=async(e)=>{
        e.preventDefault();
        setLoading(true)
try {
  
    const docRef = await addDoc(collection(db, "addresses"),formData );
    setLoading(false)
    Swal.fire({
        title: 'success',
        text: 'Save Successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      })
   
  } catch (e) {
    setLoading(false)
    Swal.fire({
        title: 'error',
        text: e.message,
        icon: 'error',
        confirmButtonText: 'OK'
      })
  }
          
          
    }
    const inputImage= async(e)=>{

        const input = e.target
        const file = input.files[0]
        const filenameArray = file.name.split(".")
        const ext = filenameArray[filenameArray.length-1]
        const filename = Date.now()+'.'+ext
        const path = `pictures/${filename}`
        const url = await uploadFile(file, path)
        await updateProfile(auth.currentUser,{
            photoURL: url
        })
      
    
    //  console.log(authInfo.session.photoURL);
    

      

   
     
    }

  return (

 <Layout>


 <div className="container text-center  shadow-lg  py-10 my-5 w-3/6 mx-auto border ">
<div className='relative  '> 

    <img src={authInfo.session.photoURL || logo}  alt="" className='w-20  h-20 mx-auto rounded-full   cursor-pointer'  />
    <input type="file" accept="image/*" className='absolute left-[310px] top-10 w-20 h-20 cursor-pointer opacity-0' id="" onChange={inputImage}/>
</div>
 <form action="" onSubmit={formHandler}>

 
   



    <div className=' my-4'>
        <span className='border  border-y-1 border-r-0 border-l-1 px-2 mt-4 bg-slate-100 -ml-2 py-1'><i className="ri-user-line text-2xl text-center "></i></span>
        <input type="text"  placeholder='Enter the name '  className='border  px-2 py-1 my-2 w-4/5' value={formData.fullName} name="fullName" onChange={inputHandler}/>
    </div>
    <div className=' '>
        <span className='border  border-y-1 border-r-0 border-l-1 px-2 mt-4 bg-slate-100 -ml-2 py-1'><i className="ri-mail-line text-2xl text-center "></i></span>
        <input type="email" name='email'  placeholder='example@gmail.com ' className='border  px-2 py-1 my-2 w-4/5' value={formData.email} onChange={inputHandler}/>
    </div>
    
    <div className='grid grid-cols-2 px-9'>
    <div className=' '>
        <span className='border  border-y-1 border-r-0 border-l-1 px-2 mt-4 bg-slate-100 -ml-2 py-1'><i className="ri-phone-line text-2xl text-center "></i></span>
        <input type="number" name='phone'  placeholder='Enter the number ' className='border  px-2 py-1 my-2 w-4/5' value={formData.phone} onChange={inputHandler}/>
    </div>
    <div className=' '>
        <span className='border  border-y-1 border-r-0 border-l-1 px-2 mt-4 bg-slate-100 -ml-2 py-1'><i className="ri-map-pin-line text-2xl text-center "></i></span>
        <input type="number"  placeholder='pin code' className='border  px-2 py-1 my-2 w-4/5' value={formData.pincode} name='pincode' onChange={inputHandler}/>
    </div>
    </div>

    <div className=' '>
      
        {/* <span className='border  border-y-1 border-r-0 border-l-1 px-2  bg-slate-100 -ml-2 py-1'><i className="ri-user-line text-2xl text-center "></i></span> */}
        <textarea  placeholder='Address' rows={1} cols={10} className='border  px-2 py-1 my-2 w-4/5' value={formData.address} name='address' onChange={inputHandler}/>
    </div>
    {
        loading?
        <div className='text-center'>
        
        <h1>loading...</h1>
        </div>:
        <button className='btn bg-rose-600 py-2 px-6 rounded text-white font-semibold '>Save</button>
    }
    
    
 </form>
 </div>


 
 </Layout>
  )
}

export default Profile