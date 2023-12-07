import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Archievedd from "./Archievedd";
import Search from './Search' 
import For_Author from "./For_Author";


function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <>
        <div className="main_header">
            <div>
             <h1>Vishwakarma Journal of Computer Science and Engineering</h1>
             <h5>Open Acess | Double Blind Review | Since Year 2022</h5>
            </div>
            {/* <Search/> */}
         </div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          VJCSE
        </Link>
        <ul className="nav-items">
        
          {navItems.map((item) => {
            if(item.title==="For Author")
        
                return (
                  <>
                  
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown2(true)}
                    onMouseLeave={() => setDropdown2(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown2 && <Dropdown2 />}
                  </li>
                 
                  </>
                  
                );
                
              else if(item.title==="Policy"){
                return (
                  <> 
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                  </li>
                  
                  </>
                );
            }

            else if(item.title==="Archieve"){
              return (
                <> 
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown3(true)}
                  onMouseLeave={() => setDropdown3(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown3 && <Archievedd />}
                </li>
                
                </>
              );
          }
            
            else{
              return(
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            } 
            })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;