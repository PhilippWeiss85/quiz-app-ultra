import "./App.css";
import { Cards } from "./Pages/Cards";
import { Create } from "./Pages/Create";
import { Profile } from "./Pages/Profile";
import { Header } from "./Components/Header/Header";
import { Navigation } from "./Components/Navigation/Navigation";
import { useState } from "react";

const cardArray = [
  {
    id: 1,
    question: "Question1",
    answer: "Answer1",
    tags: ["1", "2"],
    bookmark: false,
  },
  {
    id: 2,
    question: "Question2",
    answer: "Answer2",
    tags: ["3", "4"],
    bookmark: true,
  },
  {
    id: 3,
    question: "Question3",
    answer: "Answer3",
    tags: ["5", "6"],
    bookmark: false,
  },
  {
    id: 4,
    question: "Question4",
    answer: "Answer4",
    tags: ["7", "8"],
    bookmark: true,
  },
];

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header />
      <main className="app_main">
        {page === "home" && <Cards cardArray={cardArray} />}
        {page === "bookmark" && (
          <Cards cardArray={cardArray.filter((card) => card.bookmark)} />
        )}
        {page === "form" && <Create />}
        {page === "profile" && <Profile />}
      </main>
      <footer className="app_footer">
        <Navigation page={page} setPage={setPage} />
      </footer>
    </div>
  );
}

export default App;
