import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css"; // Ensure styles are applied
import ShinRamyun from "../assets/ShinRamen.jpg";
import JinRamyun from "../assets/JinRamenMild.jpg";
import Neoguri from "../assets/Neoguri.jpg";
import Kokomen from "../assets/Kokomen.jpg";
import Toomba from "../assets/Toomba.jpg";
import CheeseRamen from "../assets/CheeseRamen.jpg";
import PotatoRamen from "../assets/PotatoRamen.jpg";
import YolRamen from "../assets/YeulRamen.jpg";
import Teumsae from "../assets/TeumsaeRamen.jpg";
import PaldoGomtang from "../assets/PaldoGomtang.jpg";
import Jjapaguri from "../assets/Jjapaguri.jpg";
import Mupama from "../assets/Mupama.jpg";
import Buldak from "../assets/Buldak.jpg";
import Ansung from "../assets/Ansung.jpg";
import Nagasaki from "../assets/Nagasaki.jpg";
import PaikRamen from "../assets/PaikRamen.jpg";


// Quiz questions and options
const questions = [
    {
      question: "The chef gives you a blank menu and tells you to describe your perfect ramen. You say...",
      options: [
        { text: "Something bold and spicy that makes me feel alive!", traits: ["E", "S", "P", "F"] },
        { text: "A balanced, classic bowl that never fails me.", traits: ["I", "S", "J", "T"] },
        { text: "Surprise me with a secret recipe!", traits: ["N", "P", "F"] },
        { text: "I want something unique but well thought out.", traits: ["N", "T", "J"] }
      ]
    },
    {
      question: "As you wait for your ramen, you hear whispers from the kitchen. The chef asks if you’d like to peek behind the curtain.",
      options: [
        { text: "Yes, I love discovering hidden secrets!", traits: ["E", "N", "P"] },
        { text: "No, I trust the process. I’ll wait patiently.", traits: ["I", "S", "J", "F"] },
        { text: "I’ll analyze the sounds first and try to figure out what’s happening.", traits: ["N", "T", "J"] },
        { text: "I’ll casually lean in and pretend I’m not eavesdropping.", traits: ["S", "T", "P"] }
      ]
    },
    {
      question: 'The chef suddenly challenges you: "Eat your ramen without making a sound!" How do you respond?',
      options: [
        { text: "Challenge accepted! I will master the art of silent slurping.", traits: ["I", "S", "J"] },
        { text: "Nah, I’ll eat however I want!", traits: ["E", "S", "P", "F"] },
        { text: "I’ll analyze my technique first and then attempt it.", traits: ["N", "T", "J"] },
        { text: "I purposefully slurp even louder just to see what happens.", traits: ["N", "P"] }
      ]
    },
    {
      question: "A mysterious customer across the room catches your eye. They motion for you to come over. What do you do?",
      options: [
        { text: "Go immediately—this feels like an adventure!", traits: ["E", "N", "P", "F"] },
        { text: "Glance at them but pretend I didn’t see anything.", traits: ["I", "S", "J"] },
        { text: "Send a questioning look before deciding.", traits: ["N", "T", "J"] },
        { text: "Walk over but keep my guard up.", traits: ["S", "T", "P"] }
      ]
    },
    {
      question: "They tell you a ramen secret: if you eat a certain way, you unlock hidden flavors. How do you respond?",
      options: [
        { text: "Try it immediately! I love food experiments.", traits: ["E", "N", "P", "F"] },
        { text: "Ask for proof—what’s the science behind it?", traits: ["N", "T", "J"] },
        { text: "Take mental notes but eat my ramen normally.", traits: ["I", "S", "J"] },
        { text: "Laugh and tell them they’re just messing with me.", traits: ["S", "T", "P"] }
      ]
    },
    {
      question: "A small ramen-eating contest starts in the shop. Do you join?",
      options: [
        { text: "Of course! I love a challenge!", traits: ["E", "S", "P", "T"] },
        { text: "No thanks, I’d rather enjoy my meal in peace.", traits: ["I", "S", "J", "F"] },
        { text: "Only if there’s a strategy involved.", traits: ["N", "T", "J"] },
        { text: "I’ll watch first, then decide.", traits: ["N", "P"] }
      ]
    },
    {
      question: "The chef suddenly presents you with a mystery ramen. Do you take the risk and try it?",
      options: [
        { text: "Yes! I live for new experiences.", traits: ["E", "N", "P", "F"] },
        { text: "No, I’ll stick to my original order.", traits: ["I", "S", "J"] },
        { text: "Ask about the ingredients first before making a decision.", traits: ["N", "T", "J"] },
        { text: "Smell it, poke it, and then decide.", traits: ["S", "T", "P"] }
      ]
    },
    {
      question: 'As you finish eating, the shop starts fading away. The chef tells you that this place only appears to those who truly seek ramen enlightenment. How do you react?',
      options: [
        { text: "Ask how to return again.", traits: ["I", "S", "J"] },
        { text: "Smile and accept the mystery.", traits: ["N", "P", "F"] },
        { text: "Try to figure out the logic behind this phenomenon.", traits: ["N", "T", "J"] },
        { text: "Run out the door to see if it’s really disappearing.", traits: ["S", "T", "P"] }
      ]
    },
    {
      question: "You wake up in your bed. The ramen shop is gone. Was it real?",
      options: [
        { text: "Who cares? It was an amazing experience!", traits: ["E", "N", "P", "F"] },
        { text: "Try to recall every detail and analyze it.", traits: ["N", "T", "J"] },
        { text: "Probably just a dream—but I’d love to go back.", traits: ["I", "S", "J", "F"] },
        { text: "It’s breakfast time. What’s next to eat?", traits: ["S", "P"] }
      ]
    },
    {
      question: "As you step outside, you check your pocket. There’s a tiny ramen packet with your name on it. What do you do?",
      options: [
        { text: "Keep it as a special memory.", traits: ["I", "S", "J", "F"] },
        { text: "Open it immediately to see what’s inside!", traits: ["E", "N", "P", "T"] },
        { text: "Study it carefully before opening.", traits: ["N", "T", "J"] },
        { text: "Save it for a future mystery.", traits: ["S", "T", "P"] }
      ]
    }
];

  

// Mapping MBTI results to ramen types
const ramenTypes = {
  ISTJ: { 
    name: "Shin Ramyun", 
    image: ShinRamyun, 
    bestPair: "Jin Ramyun Mild (ISFJ), Buldak (ESTJ), Neoguri (INFJ)", 
    worstPair: "Jjapaguri (ENFP), Mupama Ramen (ENTP)", 
    traits: ["✅ Disciplined", "✅ Consistent", "✅ Responsible", "❌ Stubborn", "❌ Overly traditional", "❌ Rigid"] 
  },
  ISFJ: { 
    name: "Jin Ramyun Mild", 
    image: JinRamyun, 
    bestPair: "Shin Ramyun (ISTJ), Cheese Ramen (ISFP), Ansung Tang Myun (ESFJ)", 
    worstPair: "Paik Ramen (ENTJ), Mupama Ramen (ENTP)", 
    traits: ["✅ Loyal", "✅ Nurturing", "✅ Dependable", "❌ Overly self-sacrificing", "❌ Resistant to change", "❌ Avoids conflict"] 
  },
  INFJ: { 
    name: "Neoguri Spicy Seafood", 
    image: Neoguri, 
    bestPair: "Shin Ramyun (ISTJ), Kokomen (INTJ), Jjapaguri (ENFP)", 
    worstPair: "Teumsae Ramen (ESTP), Paik Ramen (ENTJ)", 
    traits: ["✅ Visionary", "✅ Insightful", "✅ Thoughtful", "❌ Overly idealistic", "❌ Perfectionist", "❌ Emotionally intense"] 
  },
  INTJ: { 
    name: "Kokomen", 
    image: Kokomen, 
    bestPair: "Neoguri (INFJ), Yol Ramen (INTP), Mupama Ramen (ENTP)", 
    worstPair: "Cheese Ramen (ISFP), Paldo Gomtang (ESFP)", 
    traits: ["✅ Strategic", "✅ Independent", "✅ Highly intelligent", "❌ Arrogant", "❌ Emotionally distant", "❌ Overly critical"] 
  },
  ISTP: { 
    name: "Toomba Shin Ramen", 
    image: Toomba, 
    bestPair: "Yol Ramen (INTP), Teumsae Ramen (ESTP), Potato Ramen (INFP)", 
    worstPair: "Ansung Tang Myun (ESFJ), Paik Ramen (ENTJ)", 
    traits: ["✅ Adaptable", "✅ Analytical", "✅ Resourceful", "❌ Detached", "❌ Commitment-averse", "❌ Impulsive"] 
  },
  ISFP: { 
    name: "Cheese Ramen", 
    image: CheeseRamen, 
    bestPair: "Potato Ramen (INFP), Jin Ramyun Mild (ISFJ), Jjapaguri (ENFP)", 
    worstPair: "Kokomen (INTJ), Mupama Ramen (ENTP)", 
    traits: ["✅ Creative", "✅ Empathetic", "✅ Easygoing", "❌ Overly sensitive", "❌ Indecisive", "❌ Avoids confrontation"] 
  },
  INFP: { 
    name: "Potato Ramen", 
    image: PotatoRamen, 
    bestPair: "Cheese Ramen (ISFP), Yulmu Ramen (ISTP), Neoguri (INFJ)", 
    worstPair: "Buldak (ESTJ), Teumsae Ramen (ESTP)", 
    traits: ["✅ Imaginative", "✅ Kind-hearted", "✅ Idealistic", "❌ Overly dreamy", "❌ Easily overwhelmed", "❌ Avoids conflict"] 
  },
  INTP: { 
    name: "Yol Ramen", 
    image: YolRamen, 
    bestPair: "Yulmu Ramen (ISTP), Kokomen (INTJ), Mupama Ramen (ENTP)", 
    worstPair: "Paldo Gomtang (ESFP), Buldak (ESTJ)", 
    traits: ["✅ Analytical", "✅ Curious", "✅ Inventive", "❌ Disorganized", "❌ Prone to overthinking", "❌ Struggles with communication"] 
  },
  ESTP: { 
    name: "Teumsae Ramen", 
    image: Teumsae, 
    bestPair: "Mupama Ramen (ENTP), Yol Ramen (INTP), Yulmu Ramen (ISTP)", 
    worstPair: "Neoguri (INFJ), Potato Ramen (INFP)", 
    traits: ["✅ Energetic", "✅ Spontaneous", "✅ Fearless", "❌ Impulsive", "❌ Reckless", "❌ Struggles with patience"] 
  },
  ESFP: { 
    name: "Paldo Gomtang Ramyun", 
    image: PaldoGomtang, 
    bestPair: "Ansung Tang Myun (ESFJ), Jjapaguri (ENFP), Cheese Ramen (ISFP)", 
    worstPair: "Kokomen (INTJ), Shin Ramyun (ISTJ)", 
    traits: ["✅ Fun-loving", "✅ Social", "✅ Optimistic", "❌ Distracted", "❌ Struggles with long-term plans", "❌ Avoids seriousness"] 
  },
  ENFP: { 
    name: "Jjapaguri", 
    image: Jjapaguri, 
    bestPair: "Cheese Ramen (ISFP), Neoguri (INFJ), Mupama Ramen (ENTP)", 
    worstPair: "Shin Ramyun (ISTJ), Buldak (ESTJ)", 
    traits: ["✅ Enthusiastic", "✅ Innovative", "✅ Adaptable", "❌ Scattered", "❌ Overcommits", "❌ Struggles with follow-through"] 
  },
  ENTP: { 
    name: "Mupama Ramen", 
    image: Mupama, 
    bestPair: "Jjapaguri (ENFP), Kokomen (INTJ), Yol Ramen (INTP)", 
    worstPair: "Jin Ramyun Mild (ISFJ), Shin Ramyun (ISTJ)", 
    traits: ["✅ Quick-witted", "✅ Charismatic", "✅ Loves debates", "❌ Argumentative", "❌ Impulsive", "❌ Easily bored"] 
  },
  ESTJ: { 
    name: "Buldak (Hot Chicken Ramen)", 
    image: Buldak, 
    bestPair: "Shin Ramyun (ISTJ), Ansung Tang Myun (ESFJ), Neoguri (INFJ)", 
    worstPair: "Potato Ramen (INFP), Jjapaguri (ENFP)", 
    traits: ["✅ Hardworking", "✅ Organized", "✅ Decisive", "❌ Rigid", "❌ Bossy", "❌ Struggles with emotional expression"] 
  },
  ESFJ: { 
    name: "Ansung Tang Myun", 
    image: Ansung, 
    bestPair: "Jin Ramyun Mild (ISFJ), Paldo Gomtang (ESFP), Buldak (ESTJ)", 
    worstPair: "Yulmu Ramen (ISTP), Kokomen (INTJ)", 
    traits: ["✅ Caring", "✅ Dependable", "✅ Excellent at organizing", "❌ Overly people-pleasing", "❌ Dislikes conflict", "❌ Struggles with personal boundaries"] 
  },
  ENFJ: { 
    name: "Nagasaki Champon Ramen", 
    image: Nagasaki, 
    bestPair: "Jjapaguri (ENFP), Neoguri (INFJ), Paik Ramen (ENTJ)", 
    worstPair: "Teumsae Ramen (ESTP), Yulmu Ramen (ISTP)", 
    traits: ["✅ Charismatic", "✅ Inspiring", "✅ Deeply empathetic", "❌ Overcommitted", "❌ Emotionally intense", "❌ Can be manipulative"] 
  },
  ENTJ: { 
    name: "Paik Ramen", 
    image: PaikRamen, 
    bestPair: "Neoguri (INFJ), Kokomen (INTJ), Ansung Tang Myun (ESFJ)", 
    worstPair: "Cheese Ramen (ISFP), Potato Ramen (INFP)", 
    traits: ["✅ Ambitious", "✅ Efficient", "✅ Natural leader", "❌ Controlling", "❌ Impatient", "❌ Struggles with emotional sensitivity"] 
  }
};



function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [mbtiScores, setMbtiScores] = useState({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });
  const [showResult, setShowResult] = useState(false);
  const [finalMBTI, setFinalMBTI] = useState("");

  const navigate = useNavigate();

  // Function to handle answer selection
  const handleAnswer = (traits) => {
    const updatedScores = { ...mbtiScores };
    traits.forEach((trait) => {
      updatedScores[trait]++;
    });

    setMbtiScores(updatedScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateMBTI(updatedScores);
      setShowResult(true);
    }
  };

  // Function to calculate MBTI type
  const calculateMBTI = (scores) => {
    const mbti =
      (scores["E"] >= scores["I"] ? "E" : "I") +
      (scores["S"] >= scores["N"] ? "S" : "N") +
      (scores["T"] >= scores["F"] ? "T" : "F") +
      (scores["J"] >= scores["P"] ? "J" : "P");

    setFinalMBTI(mbti);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>You are: {finalMBTI} - {ramenTypes[finalMBTI]?.name}! 🍜</h2>

          {/* Image container */}
          <div className="ramen-image-container">
            <img 
              src={ramenTypes[finalMBTI]?.image} 
              alt={ramenTypes[finalMBTI]?.name} 
              className="ramen-image" 
            />
          </div>

          {/* Pairing info */}
          <div className="ramen-info">
            <p><strong>Best paired with:</strong> {ramenTypes[finalMBTI]?.bestPair}</p>
            <p><strong>Least compatible with:</strong> {ramenTypes[finalMBTI]?.worstPair}</p>
          </div>

          {/* Traits */}
          <div className="traits-container">
            <div className="traits-good">
              <p>{ramenTypes[finalMBTI]?.traits[0]}</p>
              <p>{ramenTypes[finalMBTI]?.traits[1]}</p>
              <p>{ramenTypes[finalMBTI]?.traits[2]}</p>
            </div>
            <div className="traits-bad">
              <p>{ramenTypes[finalMBTI]?.traits[3]}</p>
              <p>{ramenTypes[finalMBTI]?.traits[4]}</p>
              <p>{ramenTypes[finalMBTI]?.traits[5]}</p>
            </div>
          </div>

          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      ) : (
        <div className="question-box">
          <h3>{questions[currentQuestionIndex].question}</h3>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option.traits)}>
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;

