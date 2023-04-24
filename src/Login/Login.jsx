import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authdata } from '../AuthProvider/AuthProvider';


function Login() {
    const receivedata=useContext(authdata);
    const [success,setSuccess]=useState(null);
    const [error,setError]=useState(null);
    function signin(event){
        event.preventDefault();

        const email=event.target.email.value;
        const password=event.target.password.value;
        receivedata.signin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setSuccess("User has submited successfully");
            setError('');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess('');
          });

    }
  return (
    <div className='d-flex justify-content-center'>
    <div>
    <h1 className='text-center'>Login</h1>
    <form onSubmit={signin}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"name="email" id="exampleInputEmail1" aria-describedby="emailHelp"required/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control"name="password" id="exampleInputPassword1"required/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
    <p className='text-danger'>{error}</p>
    <p className='text-success'>{success}</p>
    <p>Do havn't a account? please <Link to="/Resister">Resister</Link>   </p>
  </form></div>
  </div>
  );
}

export default Login;