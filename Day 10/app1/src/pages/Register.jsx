import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { registerUser } from "../services/userService";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const signup = async (event) => {
    if (name == "") toast.warn("Please enter name");
    else if (email == "") toast.warn("Please enter email");
    else if (password == "") toast.warn("Please enter password");
    else if (mobile == "") toast.warn("Please enter mobile");
    else {
      const result = await registerUser(name, email, password, mobile);
      if (result.status == "success") {
        navigate("/");
        toast.success("user Registered successful");
      } else toast.error(result.error);
    }
  };

  return (
    <div className="container w-50 shadow-sm p-3 mb-5 bg-body-tertiary rounded mt-5">
      <div className="mt-3 mb-3">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          placeholder="Enter Name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className=" mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          placeholder="Enter Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="inputMobile" className="form-label">
          Mobile
        </label>
        <input
          type="tel"
          className="form-control"
          id="inputMobile"
          placeholder="Enter Mobile"
          onChange={(event) => setMobile(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-success" onClick={signup}>
          Signup
        </button>
      </div>

      <div>
        Already have an account? To Login <Link to="/">Click here.</Link>
      </div>
    </div>
  );
}

export default Register;
