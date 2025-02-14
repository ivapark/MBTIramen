import { useNavigate } from "react-router-dom";
import "./App.css"; // Ensure styles are applied

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>🍜 Ramyun Destiny 🍜</h1>
      <p>
        One night, you find yourself wandering through an unfamiliar alleyway when you stumble upon
        an old ramen shop glowing under neon lights. The sign above the door reads 
        <strong> "라면 운명 (Ramyun Destiny)"</strong>. The moment you step inside, the air fills 
        with the rich aroma of broth and spices.
      </p>
      <button onClick={() => navigate("/quiz")}>Start</button>
    </div>
  );
}

export default Home; // ✅ This must be included!
