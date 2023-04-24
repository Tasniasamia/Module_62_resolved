/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,sendEmailVerification,onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase_config';

export const authdata=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const data="Tasnia";
    
const auth = getAuth(app);
//resister
const resister=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)

}
//sign in
const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)

}
//signout
const signout=()=>{
    signOut(auth).then(() => {
        
      }).catch((error) => {
       
      });
}
//email verification
const verification=()=>{
     sendEmailVerification(auth.currentUser)
     .then(() => {
        // Email verification sent!
        // ...
      });
}
//onAuthChanged
useEffect(()=>{
  
   const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    
 
    
       
      
      });
      return ()=>{
        unsubscribe();
      } 
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
    const Authvaluedata={
        data,resister,signin,signout,verification,user
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