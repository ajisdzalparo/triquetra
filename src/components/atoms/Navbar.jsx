import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router";

const Navbar = ({ variant = "default" || "transparent", className }) => {
  return (
    <div className="flex flex-col w-full container">
      {variant === "transparent" ? (
        <div
          className={`flex px-4 md:px-5 justify-between items-center py-3 md:py-4 border border-[#FFFFFF40] rounded-lg ${className}`}
        >
          <Link to="/">
            <img src="/images/white-logo.png" alt="tiquetra" width={100} />
          </Link>
          <Link className="text-white text-xs md:text-base" to="/blog">
            Blog
          </Link>
        </div>
      ) : (
        <div
          className={`flex px-4 md:px-5 justify-between items-center py-3 md:py-4  bg-primary-blue rounded-lg ${className}`}
        >
          <Link to="/">
            <img src="/images/white-logo.png" alt="tiquetra" width={100} />
          </Link>
          <Link className="text-white text-xs md:text-base" to="/blog">
            Blog
          </Link>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  variant: propTypes.string,
};

export default Navbar;
