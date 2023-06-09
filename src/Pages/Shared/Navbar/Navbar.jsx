import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar bg-base-100 px-0  md:py-5 lg:px-20">
      <div className="md:navbar-start pl-2 md:px-6 lg:px-0 w-full flex justify-between items-center">
        <Link to="/" className=" text-xl font-semibold">
          Doctors Portal
        </Link>

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact bg-white dropdown-content -left-14 mt-3  shadow rounded-box w-32 mr-10"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/signup">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden md:flex md:mr-5 lg:mr-0">
        <ul className="flex gap-2 items-center">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base  px-3 py-2 hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base  px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base  px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/appointment"
            >
              Appointment
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base  px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/contact"
            >
              Contact US
            </NavLink>
          </li>
          {user?.uid ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-accent text-white px-3 py-2 rounded-md"
                      : "text-base  px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li
                onClick={handleLogOut}
                className="text-base px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100 cursor-pointer"
              >
                Sign Out
              </li>
            </>
          ) : (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-accent text-white px-3 py-2 rounded-md"
                    : "text-base px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
                }
                to="/Login"
              >
                Login
              </NavLink>
            </li>
          )}

          {/* {user?.email ? (
            <>
              <li>
                <Link
                  className="md:text-base  hover:text-orange duration-100"
                  to="/reviews"
                >
                  My Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
                  to="/addservice"
                >
                  Add service
                </Link>
              </li>
              <button
                onClick={handleLogOut}
                className="border-2 border-orange px-4 py-2 text-orange font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <li>
              <Link
                className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
                to="/signup"
              >
                Sign up
              </Link>
            </li>
          )} */}
        </ul>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {/* {user?.photoURL ? (
          <div className="avatar">
            <div className="w-14 rounded-full ml-4">
              <img src={user?.photoURL} alt={user?.name} />
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div className="w-12  pl-1 rounded-full ml-4">
              <FaRegUserCircle className="text-3xl mt-[9px]" />
            </div>
          </div>
        )} */}
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
};

export default Navbar;

// <div className="navbar bg-base-100">
//   <div className="md:navbar-start w-full flex justify-between items-center">
//     <Link to="/" className="btn btn-ghost normal-case text-xl">
//       daisyUI
//     </Link>

//     <div className="dropdown">
//       <label tabIndex={0} className="btn btn-ghost md:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </label>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//       >
//         <li>
//           <a>Item 1</a>
//         </li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li>
//               <a>Submenu 1</a>
//             </li>
//             <li>
//               <a>Submenu 2</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a>Item 3</a>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div className="navbar-end hidden md:flex ">
//     <ul className="flex gap-6 items-center">
//       <li>
//         <a>Item 1</a>
//       </li>
//       <li>
//         <a>jsds</a>
//       </li>
//       <li>
//         <a>Item 3</a>
//       </li>
//     </ul>
//   </div>
//   {/* <div className="navbar-end">
//           <a className="btn">Button</a>
//         </div> */}
// </div>;
