import React, { useState } from "react";
import { authorDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown2.css";

function Dropdown2() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-author clicked" : "services-author"}
        onClick={() => setDropdown(!dropdown)}
      >
        {authorDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown2;