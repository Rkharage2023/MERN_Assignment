import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/userService";
import { LoginContext } from "../contex/loginContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginStatus, setLoginStatus } = useContext(LoginContext);

  const signin = async () => {
    if (email === "") {
      toast.warn("Email must be entered");
    } else if (password === "") {
      toast.warn("Password must be entered");
    } else {
      const result = await loginUser(email, password);

      if (result.status === "success") {
        sessionStorage.setItem("token", result.data.token);

        toast.success("Login successful");
        setLoginStatus(true);
        navigate("/home");
      } else {
        toast.error(result.error);
      }
    }
  };

  return (
    <div className="container w-50 shadow-sm p-3 mb-5 bg-body-tertiary rounded mt-5">
      <div className="mb-3 mt-5">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-success" onClick={signin}>
          Login
        </button>
      </div>

      <div>
        Don't have an account?
        <Link to="/register"> Click here</Link>
      </div>
    </div>
  );
}

export default Login;
