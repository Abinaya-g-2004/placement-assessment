import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let error = {};

    if (login.email.trim() === "")
      error.email = "Email is required";

    if (login.password.trim() === "")
      error.password = "Password is required";

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === login.email &&
        u.password === login.password
    );

    if (!user) {
      setErrors({
        password: "Invalid Email or Password",
      });
      return;
    }

    localStorage.setItem(
      "loggedUser",
      JSON.stringify(user)
    );

    navigate("/dashboard");
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={login.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span>

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;