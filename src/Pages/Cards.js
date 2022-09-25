import { Card } from "../Components/Card/Card";

export function Cards({ cardArray, deleteCard, toggleBookmark }) {
  return (
    <div>
      {/* {cardArray.map((card) => (
        <Card
          key={card.id}
          question={card.question}
          answer={card.answer}
          tags={card.tags}
          bookmark={card.bookmark}
        />
      ))} */}

      {cardArray.map(({ id, question, answer, tags, bookmark }) => (
        <Card
          toggleBookmark={toggleBookmark}
          deleteCard={deleteCard}
          key={id}
          id={id}
          question={question}
          answer={answer}
          tags={tags}
          bookmark={bookmark}
        />
      ))}
    </div>
  );
}
