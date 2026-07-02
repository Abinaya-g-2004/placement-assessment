import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../data/questions.json";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";

import "../components/Timer.css";
import "./Assessment.css";

function Assessment() {

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {

    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: answer,
    });

  };

  const submitExam = () => {

    let score = 0;

    questions.forEach((q) => {

      if (answers[q.id] === q.answer) {

        score++;

      }

    });

    localStorage.setItem(
      "result",
      JSON.stringify({
        score,
        answers,
      })
    );

    navigate("/result");

  };

  return (

    <div className="assessment">

      <Timer
        duration={600}
        onTimeUp={submitExam}
      />

      <QuestionCard

        question={questions[currentQuestion]}

        index={currentQuestion}

        selectedAnswer={answers[questions[currentQuestion].id]}

        onSelect={handleAnswer}

      />

      <div className="buttons">

        <button

          disabled={currentQuestion === 0}

          onClick={() =>
            setCurrentQuestion(currentQuestion - 1)
          }

        >

          Previous

        </button>

        {currentQuestion < questions.length - 1 ? (

          <button

            onClick={() =>
              setCurrentQuestion(currentQuestion + 1)
            }

          >

            Next

          </button>

        ) : (

          <button

            onClick={submitExam}

          >

            Submit

          </button>

        )}

      </div>

    </div>

  );

}

export default Assessment;