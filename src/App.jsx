import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
// import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Routes path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
