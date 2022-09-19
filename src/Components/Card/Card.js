import "./Card.css";
import bookmarkIcon from "./bookmarksolid.svg";

export function Card() {
  return (
    <section className="quiz-card">
      <img
        className="quiz-card__bookmark"
        src={bookmarkIcon}
        alt="Bookmark this Question"
      />
      <h2>What property flips the axes in flexbox?</h2>
      <button data-js="showanswer-button" className="button__show-answer">
        Show answer
      </button>
      <article data-js="answertext" className="article--hidden">
        <p className="quiz-card__answer">
          To flip the axes in a flexbox you need to you use the property 'flex-direction'.
        </p>
      </article>
      <ul className="quiz-card__list">
        <li className="quiz-card__tag">#html</li>
        <li className="quiz-card__tag">#flexbox</li>
        <li className="quiz-card__tag">#css</li>
      </ul>
    </section>
  );
}
