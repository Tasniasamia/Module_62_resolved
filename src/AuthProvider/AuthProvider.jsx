/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,sendEmailVerification,onAuthStateChanged,updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase_config';

export const authdata=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    const data="Tasnia";
    
const auth = getAuth(app);
//resister
const resister=(email,password)=>{
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password)

}
//sign in
const signin=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)

}
//signout
const signout=()=>{
    signOut(auth).then(() => {
        setUser('')
        
      }).catch((error) => {
       
      });
}
// email verification
const verification=(userparam)=>{
  return   sendEmailVerification(userparam)
     
}
//onAuthChanged
useEffect(()=>{
  
   const unsubscribe=onAuthStateChanged(auth,(user) => {
    if (user?.emailVerified===true) {

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setLoading(false);

        // ...
      } else {
        // User is signed out
        // ...
      }
    
 
    
       
      
      });
      return ()=>{
        return unsubscribe()
        };

       
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
 //update displayname
 function displayname(name,photo){
setLoading(true);
 return updateProfile(auth.currentUser, {
        displayName: name,photoURL:photo

      })
}
    const Authvaluedata={
        data,resister,signin,signout,user,verification,displayname,setUser
    }
    return (
        <div>
            <authdata.Provider value={Authvaluedata}>
           {children}
            </authdata.Provider>
            
        </div>
    );
};

export default AuthProvider;