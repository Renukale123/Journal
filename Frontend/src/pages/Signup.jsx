import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import {Alert} from "react-bootstrap";

const Signup =() => {

  // const[user,setUser]=useState({
  //   email:"", password:"" , cpassword:""
  // });

  // const handleInputs=(e) =>{
  //   console.log();
  // }
  // const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const[error,setError]=useState("");
  const {signup}=useUserAuth();
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    try{
      await signup(email,password );
      navigate("/signin")
    }catch(err){
      setError(err.message);

    }
  };

  return (
    <div>
      <div className="Contact_Us">
            <div id="form-details" >
                <form action="" onSubmit={handleSubmit}>
                <h1>Welcome to VJCSE Lets begin the adventure</h1>
                {error && <Alert variant="danger">{error}</Alert>}
    
                        <hr/>

                    {/* <input type="name" placeholder="Enter Your Name" name="name" id="name" onChange={(e)=>setName(e.target.value)} required/> */}
                    <input type="email" placeholder="Enter Email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} required/>

                  
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" onChange={(e)=>setPassword(e.target.value)}  required/>

                    
                    {/* <input type="password" placeholder="Repeat Password" name="psw" id="psw"  required/> */}
                    <button type="submit" className="registerbtn">Register</button>
                                    
                                    
                    <p>Already have an account?<Link to="/signin">Sign In </Link></p>
                   
                   
                </form>  
            </div>
      </div> 
    </div>
  );
}

export default Signup;
