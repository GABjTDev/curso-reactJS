import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const logged = () => {
    sessionStorage.setItem("userActive", "Gabriel");
    navigate("/", { replace: true });
  };

  return (
    <>
      {window.sessionStorage.getItem("userActive") && (
        <Navigate to="/" replace={true} />
      )}
      <h1>Page Login</h1>
      <button onClick={logged}>Loguear</button>
      <Link to={"/register"}>Registrar</Link>
    </>
  );
};

export default Login;
