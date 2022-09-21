import { Card } from "../Components/Card/Card";

export function Cards({ cardArray }) {
  console.log(cardArray);
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

      {cardArray.map(({ id, question, answer, tags }) => (
        <Card key={id} question={question} answer={answer} tags={tags} />
      ))}
    </div>
  );
}
