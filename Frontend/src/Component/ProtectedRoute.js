import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/userAuthContext';

const ProtectedRoute = ({children}) => {
    let {user}=useUserAuth();
    if(!user){
        return <Navigate to="/signin"/>
        return children;

    }
  return (
    <div></div>
  )
}

export default ProtectedRoute;