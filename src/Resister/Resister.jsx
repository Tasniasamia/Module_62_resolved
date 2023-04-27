import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authdata } from '../AuthProvider/AuthProvider';

function Resister() {
    const [success,setSuccess]=useState(null);
    const [error,setError]=useState(null);

    const {resister,verification,displayname}=useContext(authdata);
    function Resister(event){
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        const photo=event.target.photo.value;
        console.log(email,password);
        resister(email,password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log(user);
            setSuccess("User has submited successfully");
            setError("");
       verification(user)
            .then(() => {
              // Email verification sent!
              // ...
            });
        displayname(name,photo)
            .then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });

           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess("");
          });

         
          

    }
  return (
    <div className='d-flex justify-content-center'>
    <div>
    <h1 className='text-center'>Resister</h1>
    <form onSubmit={Resister}>
    <div className="mb-3">
      <label htmlFor="exampleInputname1" className="form-label">User Name</label>
      <input type="text" className="form-control"name="name" id="exampleInputName1" aria-describedby="nameHelp"required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"name="email" id="exampleInputEmail1" aria-describedby="emailHelp"required/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <div>
      <label htmlFor="exampleInputphotoEmail1" className="form-label">Photo Url</label></div>

      <input type="text" id="photo" name="photo"  />      </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control"name="password" id="exampleInputPassword1"required/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    <p className='text-danger'>{error}</p>
    <p className='text-success'>{success}</p>
    <p>Do you have a account? please <Link to="/Login">Login</Link>   </p>
  </form></div>
  </div>
  )
}

export default Resister;