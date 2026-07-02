import { Link } from "react-router-dom";
import "./Instructions.css";

function Instructions() {
  return (
    <div className="instruction-page">

      <div className="instruction-card">

        <h1>Assessment Instructions</h1>

        <ul>

          <li>Total Questions : 10</li>

          <li>Duration : 10 Minutes</li>

          <li>Each question carries 1 mark.</li>

          <li>No negative marking.</li>

          <li>You can move using Previous and Next buttons.</li>

          <li>Timer will auto-submit your exam.</li>

          <li>Do not refresh the page.</li>

          <li>Click Submit after answering all questions.</li>

        </ul>

        <Link to="/assessment">

          <button>

            Start Exam

          </button>

        </Link>

      </div>
    </div>
  );
}

export default Instructions;