import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/reducers/userSlice";
import Spinner from "./Spinner";

const User = () => {
  const dispatch = useDispatch();
  const { User } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      {User.status === "pending" && <Spinner />}
      {User.status === "completed" && (
        <div className="d-flex justify-content-around flex-wrap">
          {User.users.map((user) => {
            return (
              <div
                key={user.id}
                className="card"
                style={{ width: "15rem", marginBottom: "10px" }}
              >
                <img src={user.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    {user.first_name} {user.last_name}
                  </h5>
                  <p className="card-text">{user.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {User.status === "fail" && (
        <div className="alert alert-danger" role="alert">
          {User.error}
        </div>
      )}
    </div>
  );
};

export default User;
