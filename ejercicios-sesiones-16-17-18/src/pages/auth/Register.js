import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
  return (
    <>
      {window.sessionStorage.getItem("userActive") && (
        <Navigate to="/" replace={true} />
      )}
      <h1>Page Register</h1>
    </>
  );
};

export default Register;
