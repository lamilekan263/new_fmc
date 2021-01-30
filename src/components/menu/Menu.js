import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from "../../Redux/actions/authActions";

const Menu = ({ isMenuOpen, menu, auth }) => {
   const { isAuthenticated, user } = auth;
  // handle logging out
  const handleLogOut = (e) => {
    logoutUser();
  };
  const authenticatedUser = (
    <>
      <Link
        className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
        to={user.role === "Member" ? "/user" : "/admin"}
      >
        <img
          className="rounded-circle"
          src={user.profileImage}
          alt={user.name}
          style={{ width: "25px" }}
        />
      </Link>
      <button
        href=""
        onClick={() => handleLogOut()}
        className="items-center px-8  animate-bounce py-3 mt-4 ml-5 font-semibold text-white transition duration-500 ease-in-out transform bg-green-700 border rounded-lg lg:inline-flex lg:mt-px hover:border-blue hover:bg-white hover:text-green-700 focus:ring focus:outline-none"
      >
        Sign Out
        <svg
          className="hidden w-4 h-4 ml-1 lg:block "
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </>
  );
  const guest = (
    <Link to="/user/login">
      <button className="items-center px-8  animate-bounce py-3 m-2 mr-5 font-semibold text-white transition duration-500 ease-in-out transform bg-green-700 border rounded-lg lg:inline-flex lg:mt-px hover:border-blue hover:bg-white hover:text-green-700 focus:ring focus:outline-none">
        Sign In
        <svg
          className="hidden w-4 h-4 ml-1 lg:block "
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </Link>
  );

  return (
    <div
      className={
        isMenuOpen
          ? "my-5 flex flex-col justify-end  transition-transform delay-1000 ease-in container"
          : "hidden"
      }
      onClick={menu}
    >
      <Link
        to="/"
        className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
      >
        Home
      </Link>
      <Link
        to="/resources/opac"
        className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
      >
        Opac
      </Link>
      <a
        href="https://www.who.int/hinari/en/"
        className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
      >
        Hinary
      </a>
      <Link
        to="/resources/free"
        className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
      >
        Free Medical Resources
      </Link>
      <Link
        to="/services"
        className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
      >
        Services
      </Link>
      <Link
        to="#"
        className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
      >
        Contact
      </Link>
      {isAuthenticated ? authenticatedUser : guest}
     
    </div>
  );
}
const mapStateToProps = state => {
  return{
    auth : state.auth
  }
}

export default connect(mapStateToProps, { logoutUser })(Menu);
