import "./App.css";
import { Card } from "./Components/Card/Card";
import { Header } from "./Components/Header/Header";
import { Navigation } from "./Components/Navigation/Navigation";

const cardArray = [
  {
    id: 1,
    question: "Question1",
    answer: "Answer1",
    tags: ["1", "2"],
  },
  {
    id: 2,
    question: "Question2",
    answer: "Answer2",
    tags: ["3", "4"],
  },
  {
    id: 3,
    question: "Question3",
    answer: "Answer3",
    tags: ["5", "6"],
  },
  {
    id: 4,
    question: "Question4",
    answer: "Answer4",
    tags: ["7", "8"],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app_main">
        {cardArray.map(({ id, question, answer, tags }) => (
          <Card key={id} question={question} answer={answer} tags={tags} />
        ))}
      </main>
      <footer className="app_footer">
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
