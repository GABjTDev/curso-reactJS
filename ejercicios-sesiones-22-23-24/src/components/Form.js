import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../store/reducers/loginSlice";

const Form = () => {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    const inputEmailValue = email.current.value.trim();
    const inputPassValue = password.current.value.trim();
    // eve.holt@reqres.in
    // cityslicka
    if (inputEmailValue !== "" && inputPassValue !== "") {
      dispatch(
        startLogin({
          email: inputEmailValue,
          password: inputPassValue,
        })
      );
    } else {
      alert("inputs vacios");
    }
  };

  return (
    <form onSubmit={handleLogin} className={"p-5"}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          ref={email}
        />
        <div id="email" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          ref={password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
