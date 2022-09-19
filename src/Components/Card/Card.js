import "./Card.css";

export function Card() {
  return (
    <section className="quiz-card">
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
