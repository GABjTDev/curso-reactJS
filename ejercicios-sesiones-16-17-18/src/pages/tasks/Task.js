import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Task = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    window.sessionStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <>
      {!window.sessionStorage.getItem("userActive") && (
        <Navigate to="/login" replace={true} />
      )}
      <h1>Page Task</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Task;
