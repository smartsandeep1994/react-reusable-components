import React,{useState,useEffect} from "react";
import {Redirect} from 'react-router-dom';

const Register = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginClicked = (e) => {
    e.preventDefault();
    console.log("LoginClicked");
    localStorage.setItem('login',true);
    setIsLoggedIn(true);
  }

  useEffect(()=>{
    let login = localStorage.getItem('login');
    // console.log(login);
    if(login === 'true'){
      console.log('isLoggedIn');
      //  isLoggedIn = true;
      setIsLoggedIn(true);
    }
  },[isLoggedIn])

  if(isLoggedIn === true){
    return (
        <Redirect to={"/premium-content"} />
    )
  }
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required="true"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required="true"
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={LoginClicked}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;