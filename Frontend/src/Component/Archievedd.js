import React, { useState } from "react";
import { archieveDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Archivedd.css";

function Archievedd() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-archieve clicked" : "services-archieve"}
        onClick={() => setDropdown(!dropdown)}
      >
        {archieveDropdown.map((item) => {
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

export default Archievedd;