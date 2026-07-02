import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const logout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <div className="dashboard">

      <div className="top">

        <h1>Welcome, {user?.name} 👋</h1>

        <button onClick={logout}>
          Logout
        </button>

      </div>

      <h2>Select Assessment Topics</h2>

      <div className="subjects">

        <div className="card">
          <h3>HTML</h3>
          <p>2 Questions</p>
        </div>

        <div className="card">
          <h3>CSS</h3>
          <p>2 Questions</p>
        </div>

        <div className="card">
          <h3>JavaScript</h3>
          <p>2 Questions</p>
        </div>

        <div className="card">
          <h3>React</h3>
          <p>2 Questions</p>
        </div>

        <div className="card">
          <h3>Aptitude</h3>
          <p>2 Questions</p>
        </div>

      </div>

      <div className="buttons">

        <Link to="/instructions">
          <button className="start">
            Start Assessment
          </button>
        </Link>

        <Link to="/profile">
          <button className="profile">
            Profile
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;