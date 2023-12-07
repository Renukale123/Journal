// import React from "react";
// import { Link } from "react-router-dom";
import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import {Button,Alert} from "react-bootstrap";
import GoogleButton from "react-google-button"

function SignIn() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const[error,setError]=useState("");
  const {login,googleSignIn}=useUserAuth();
  
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    try{
      await login(email,password );
        navigate("/")
    }catch(err){
      setError(err.message);

    }
  };

  const handleGoogleSignIn=async(e) =>{
    e.preventDefault();
    try{
      await googleSignIn();
      navigate("/");
    }catch(err){
      setError(err.message);
    }

  }
  return (
    <div>
      <div className="Contact_Us">
            <div id="form-details" >
                <form action="" onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                    <h1>Welcome to VJCSE Lets begin the adventure</h1>
                    <input type="email" placeholder="E-mail" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <input type="password" placeholder="Password" name="psw" id="psw" onChange={(e)=>setPassword(e.target.value)} required/>
                    {/* <button className="normal">LogIn</button> */}
                    <div className="d-grid gap-2">
                      <Button variant="primary" type="Submit">
                        Log In
                      </Button>
                    </div>
                    <div ><GoogleButton className="g-btn" type="light"  onClick={handleGoogleSignIn}/></div>
                    <br></br>
                    
                        <p>Don't have account? <Link to="/signup">Sign Up</Link></p>
                    
                    
                </form>  
            </div>
      </div> 
    </div>
  );
}

export default SignIn;