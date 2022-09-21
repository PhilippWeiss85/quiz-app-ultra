import "./Card.css";
import { useState } from "react";

export function Card({ question, answer, tags, bookmark }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(bookmark);
  console.log(activeBookmark, setActiveBookmark);

  return (
    <section className="quiz-card">
      <div onClick={() => setActiveBookmark((prevActiveBookmark) => !prevActiveBookmark)}>
        {activeBookmark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            alt="You bookmarked this question"
            className="quiz-card__bookmark"
            height="2.5rem"
            viewBox="0 0 24 24"
            width="2.5rem"
          >
            <rect fill="none" />
            <path d="M19,21l-7-3l-7,3V5c0-1.1,0.9-2,2-2l7,0c-0.63,0.84-1,1.87-1,3c0,2.76,2.24,5,5,5c0.34,0,0.68-0.03,1-0.1V21z M17.83,9 L15,6.17l1.41-1.41l1.41,1.41l3.54-3.54l1.41,1.41L17.83,9z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="quiz-card__bookmark"
            alt="Bookmark this Question"
            height="2.5rem"
            viewBox="0 0 24 24"
            width="2.5rem"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
          </svg>
        )}
      </div>
      <h2>{question}</h2>
      <button
        className="quiz-card__button"
        onClick={() => setShowAnswer((previousShowAnswer) => !previousShowAnswer)}
      >
        {showAnswer ? "Hide answer" : "Show answer"}
      </button>
      {showAnswer ? <p className="quiz-card__answer">{answer}</p> : ""}
      <ul className="quiz-card__list">
        {tags.map((tag, index) => (
          <li className="quiz-card__tag" key={index}>
            #{tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
