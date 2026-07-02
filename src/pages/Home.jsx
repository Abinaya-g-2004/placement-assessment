import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="left">

          <h1>Placement Assessment Portal</h1>

          <p>
            Practice HTML, CSS, JavaScript, React and Aptitude questions.
            Improve your coding skills and prepare for placement interviews.
          </p>

          <Link to="/register">
            <button className="start-btn">
              Get Started
            </button>
          </Link>

        </div>

        <div className="right">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="student"
          />

        </div>

      </section>

      <section className="features">

        <div className="feature">

          <h2>Dynamic Questions</h2>

          <p>
            Questions are loaded dynamically from JSON.
          </p>

        </div>

        <div className="feature">

          <h2>Timer Based Exam</h2>

          <p>
            Automatic submission after timer ends.
          </p>

        </div>

        <div className="feature">

          <h2>Instant Result</h2>

          <p>
            Score, percentage and wrong answers are displayed.
          </p>

        </div>

      </section>

      <footer>

        © 2026 TechHire Placement Assessment

      </footer>

    </>
  );
}

export default Home;