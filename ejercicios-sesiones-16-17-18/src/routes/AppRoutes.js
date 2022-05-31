import React from "react";
import Nav from "../components/Nav";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Task from "../pages/tasks/Task";
import PageError from "../pages/error/PageError";
import Register from "../pages/auth/Register";

const AppRoutes = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Task />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
