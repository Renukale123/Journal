import React from 'react'



import Hero from '../Component/Hero';
import Cards from './Cards';
import Middle from './Middle';
import Upper from './Upper';
import { useUserAuth } from '../context/userAuthContext';


 const Home = () => {
  const {user}=useUserAuth();
  console.log(user);  
  return (
    
    <>
    <Hero/>
    <Upper/>
    <Cards/>
    <Middle/>
    </>
  );
   
}

export default Home;
