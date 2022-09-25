import "./App.css";
import { Cards } from "./Pages/Cards";
import { Create } from "./Pages/Create";
import { Profile } from "./Pages/Profile";
import { Header } from "./Components/Header/Header";
import { Navigation } from "./Components/Navigation/Navigation";
import { useState } from "react";

const cardArray = [
  {
    id: Math.random().toString(36).substring(2),
    question: "Question1",
    answer: "Answer1",
    tags: ["1", "2"],
    bookmark: false,
  },
  {
    id: Math.random().toString(36).substring(2),
    question: "Question2",
    answer: "Answer2",
    tags: ["3", "4"],
    bookmark: true,
  },
  {
    id: Math.random().toString(36).substring(2),
    question: "Question3",
    answer: "Answer3",
    tags: ["5", "6"],
    bookmark: false,
  },
  {
    id: Math.random().toString(36).substring(2),
    question: "Question4",
    answer: "Answer4",
    tags: ["7", "8"],
    bookmark: true,
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [cardList, setCardList] = useState(cardArray);
  console.log(cardList);

  function appendCard(question, answer, tags, bookmark) {
    const newCardList = [
      ...cardList,
      {
        id: Math.random().toString(36).substring(2),
        question: question,
        answertags: answer,
        tags: tags,
        bookmark: false,
      },
    ];
    setCardList(newCardList);
  }

  function deleteCard(cardId) {
    const filteredList = cardList.filter((card) => {
      return card.id !== cardId;
    });
    setCardList(filteredList);
  }

  const toggleBookmark = (cardId) => {
    const bookMarkCardList = cardList.map((card) =>
      cardId === card.id ? { ...card, bookmark: !card.bookmark } : card
    );
    console.log("toogleBookmark");
    setCardList(bookMarkCardList);
  };

  return (
    <div className="App">
      <Header />
      <main className="app_main">
        {page === "home" && (
          <Cards
            cardArray={cardList}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        )}
        {page === "bookmark" && (
          <Cards
            toggleBookmark={toggleBookmark}
            cardArray={cardList.filter((card) => card.bookmark)}
          />
        )}
        {page === "form" && <Create appendCard={appendCard} setPage={setPage} />}
        {page === "profile" && <Profile />}
      </main>
      <footer className="app_footer">
        <Navigation page={page} setPage={setPage} />
      </footer>
    </div>
  );
}

export default App;
