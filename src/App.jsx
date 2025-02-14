import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
