import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/userService";
import { LoginContext } from "../contex/loginContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setLoginStatus } = useContext(LoginContext);

  const signin = async () => {
    if (email === "") {
      toast.warn("Email must be entered");
    } else if (password === "") {
      toast.warn("Password must be entered");
    } else {
      const result = await loginUser(email, password);

      if (result.status === "success") {
        sessionStorage.setItem("token", result.data.token);

        setLoginStatus(true);
        toast.success("Login successful");

        navigate("/"); // ✅ FIXED
      } else {
        toast.error(result.error);
      }
    }
  };

  return (
    <div className="container w-50 shadow-sm p-3 mb-5 bg-body-tertiary rounded mt-5">
      <div className="mb-3 text-center">
        <h2>Login</h2>
      </div>

      <div className="mb-3 mt-3">
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
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-success w-100" onClick={signin}>
          Login
        </button>
      </div>

      <div className="text-center">
        Don&apos;t have an account?
        <Link to="/register"> Click here</Link>
      </div>
    </div>
  );
}

export default Login;
