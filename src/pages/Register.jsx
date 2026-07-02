import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let error = {};

    if (user.name.trim() === "")
      error.name = "Name is required";

    if (user.email.trim() === "")
      error.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)
    )
      error.email = "Invalid email";

    if (user.password === "")
      error.password = "Password is required";
    else if (user.password.length < 6)
      error.password = "Password must be at least 6 characters";

    if (user.confirmPassword === "")
      error.confirmPassword = "Confirm Password is required";
    else if (user.password !== user.confirmPassword)
      error.confirmPassword = "Passwords do not match";

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === user.email);

    if (exists) {
      setErrors({
        email: "Email already registered",
      });
      return;
    }

    users.push({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <span>{errors.name}</span>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span>

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <span>{errors.confirmPassword}</span>

        <button type="submit">
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </form>

    </div>
  );
}

export default Register;