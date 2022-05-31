import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Task</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Nav;
