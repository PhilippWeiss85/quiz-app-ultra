import "./App.css";
import { Card } from "./Components/Card/Card";
import { Header } from "./Components/Header/Header";
import { Navigation } from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app_main">
        <Card />
        <Card />
        <Card />
      </main>
      <footer className="app_footer">
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
