import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import Spinner from "./Spinner";
const User = lazy(() => import("./User.js"));

const Container = () => {
  const { Login } = useSelector((state) => state);

  if (Login.status === "pending") return <Spinner />;

  if (Login.status === "" || Login.status === "fail")
    return (
      <>
        <Form />
        {Login.status === "fail" && (
          <div className="alert alert-danger" role="alert">
            {Login.error}
          </div>
        )}
      </>
    );

  if (Login.status === "completed")
    return (
      <>
        <Suspense fallback={<h2>Cargando...</h2>}>
          <User />
        </Suspense>
      </>
    );
};

export default Container;
