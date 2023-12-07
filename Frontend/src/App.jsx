import React from "react";
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Component/Navbar'; 
import Home from './Component/Home';
import About from './pages/About/About';
import ProtectedRoute from './Component/ProtectedRoute';
import Footer from './Footer/Footer';
import Contact from "./pages/Contact/Contact";
import Policy from "./pages/Policy/Policy";
import Policy2 from "./pages/Policy/Policy2";
import Policy3 from "./pages/Policy/Policy3";
import Policy4 from "./pages/Policy/Policy4";
import Policy5 from "./pages/Policy/Policy5";
import Policy6 from "./pages/Policy/Policy6";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Archieve from "./Component/Archieve";
import Author from "./pages/Author/Author";
import PeerReviewGuidelines from "./pages/Author/PeerReviewGuidelines";
import InvitationforReviewers from "./pages/Author/InvitationforReviewers";
import ManuscriptWithDrawal from "./pages/Author/ManuscriptWithDrawal";
import InstructionForAuthor from "./pages/Author/InstructionForAuthor";
import Form from "./pages/Author/Form";
import Accodion from "./FAQ/Accodion";
import Committee from "./Committee/committee";
import { UserAuthContextProvider } from "./context/userAuthContext";

function App(){
  return (
    <>
    <UserAuthContextProvider>
    <Navbar/>
    <Routes>
    
      
          <Route  path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path='/contactus' element={<Contact/>}/>
          <Route  path="/signup" element={<Signup/>}/>
          <Route  path="/signin" element={<SignIn/>}/>
          <Route  path="/Accodion" element={<Accodion/>}/>
          <Route  path="/Committee" element={<Committee/>}/>
          <Route  path='/author' element={<Author/>}/>

          <Route  path="/archieve" element={<Archieve/>}/>

          <Route  path='/policy' element={<Policy/>}/>
          <Route  path='/policy2' element={<Policy2/>}/>
          <Route  path='/policy3' element={<Policy3/>}/>
          <Route  path='/policy4' element={<Policy4/>}/>
          <Route  path='/policy5' element={<Policy5/>}/>
          <Route  path='/policy6' element={<Policy6/>}/>
          <Route  path='/PeerReviewGuidelines' element={<PeerReviewGuidelines/>}/>
          <Route  path='/InvitationforReviewers' element={<InvitationforReviewers/>}/>
          <Route  path='/ManuscriptWithDrawal' element={<ManuscriptWithDrawal/>}/>
          <Route  path='/InstructionForAuthor' element={<InstructionForAuthor/>}/>
          <Route  path="/Form" exact element={<Form/>}/>
          

          {/* <Redirect to="/"/>         */}
          
          {/* <Footer/> */}
        </Routes>
        </UserAuthContextProvider>
      
      </>
  )
}

export default App;

