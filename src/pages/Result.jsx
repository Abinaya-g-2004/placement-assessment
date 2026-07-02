import { Link } from "react-router-dom";
import questions from "../data/questions.json";
import "./Result.css";

function Result() {
  const result = JSON.parse(localStorage.getItem("result"));

  if (!result) {
    return <h2>No Result Found</h2>;
  }

  const score = result.score;
  const percentage = ((score / questions.length) * 100).toFixed(0);

  const passed = percentage >= 60;

  return (
    <div className="result-container">

      <div className="result-card">

        <h1>
          {passed
            ? "🎉 Congratulations!"
            : "😔 Better Luck Next Time"}
        </h1>

        <h2>Score : {score} / {questions.length}</h2>

        <h2>Percentage : {percentage}%</h2>

        <hr />

        <h2>Wrong Answers</h2>

        {questions.map((q) => {

          if (result.answers[q.id] !== q.answer) {

            return (

              <div className="wrong-card" key={q.id}>

                <h3>{q.question}</h3>

                <p>

                  <strong>Your Answer : </strong>

                  {result.answers[q.id] || "Not Answered"}

                </p>

                <p className="correct">

                  <strong>Correct Answer : </strong>

                  {q.answer}

                </p>

              </div>

            );

          }

          return null;

        })}

        <Link to="/dashboard">

          <button>

            Go Dashboard

          </button>

        </Link>

      </div>

    </div>
  );
}

export default Result;