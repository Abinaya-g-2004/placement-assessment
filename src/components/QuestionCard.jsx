import "./QuestionCard.css";

function QuestionCard({
  question,
  index,
  selectedAnswer,
  onSelect
}) {
  return (
    <div className="question-card">

      <h2>
        Question {index + 1}
      </h2>

      <h3>{question.question}</h3>

      <div className="options">

        {question.options.map((option, i) => (

          <label
            key={i}
            className={
              selectedAnswer === option
                ? "option active"
                : "option"
            }
          >

            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelect(option)}
            />

            {option}

          </label>

        ))}

      </div>

    </div>
  );
}

export default QuestionCard;