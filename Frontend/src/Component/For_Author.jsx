// import React, { useState } from "react";
// import { authorDropdown } from "./NavItems";
// import { Link } from "react-router-dom";
// import "./For_Author.css";

// function For_Author() {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <ul
//         className={dropdown ? "services-submenu clicked" : "services-submenu"}
//         onClick={() => setDropdown(!dropdown)}
//       >
//         {authorDropdown.map((item) => {
//           return (
//             <li key={item.id}>
//               <Link
//                 to={item.path}
//                 className={item.cName}
//                 onClick={() => setDropdown(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default For_Author;
