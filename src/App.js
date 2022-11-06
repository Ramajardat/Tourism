import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Toursinfo from "./components/Toursinfo";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Tours-info/:id" element={<Toursinfo />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
