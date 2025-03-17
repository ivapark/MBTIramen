import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Ramyun Destiny</h1>
      <div className="story-box">
        <p>
          One night, you find yourself wandering through an unfamiliar alleyway when you stumble upon
          an old ramen shop glowing under neon lights. The sign above the door reads 
          <strong> "라면 운명 (Ramyun Destiny)"</strong>. The moment you step inside, the air fills 
          with the rich aroma of broth and spices.
        </p>
        <button className="start-button" onClick={() => navigate("/quiz")}>Start</button>
      </div>
    </div>
  );
}

export default Home;
