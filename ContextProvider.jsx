

import React, { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

import fireBaseAuth from './firebaseConfig';
function ContextProvider({children}) {
const db = getFirestore(fireBaseAuth);
  const auth=getAuth(fireBaseAuth);


  const [session,setSession]=useState(false);
  const [firebaseData,setfirebaseData]=useState(false);
  

    useEffect(()=>{
      try {
          onAuthStateChanged(auth, (user) => {
            setSession(user);
           
          });
        } catch (error) {
          console.error("An error occurred while getting user data:", error);
        }
     },[])

     useEffect(() => {
   
   
       let getDataFirebase= async()=>{
         try{
         

           const q = query(collection(db, "addresses"), where("userId", "==", session.uid));
           const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) => {
       
          setfirebaseData(doc.data());
      
       });
         }catch(e) {
              console.log(e.message);
         }
   
   
       }
   
       getDataFirebase();
      
        
    }, [session]); //

    

 
   const authInfo = {
     session,
     firebaseData,
    }
    
 
    return (
        <AuthContext.Provider value={{ authInfo }}>
          {children}
        </AuthContext.Provider>
      );
}

export default ContextProvider



export const useAuth = () => {
  return useContext(AuthContext);
};