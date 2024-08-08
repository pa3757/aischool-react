import React, { useRef, useState } from "react";

const Myfinal = () => {
  let diceimg = [
    "./img/dice1.png",
    "./img/dice2.png",
    "./img/dice3.png",
    "./img/dice4.png",
    "./img/dice5.png",
    "./img/dice6.png",
  ];
  const [comScore, setComScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [result, setResult] = useState("");
  const comdice = useRef();
  const userdice = useRef();

  const diceSpin = () => {
    let comindex = Math.floor(Math.random() * 6);
    let userindex = Math.floor(Math.random() * 6);
    comdice.current.src = diceimg[comindex];
    userdice.current.src = diceimg[userindex];

    if (comindex > userindex) {
      const newComScore = comScore + 1;
      setComScore(newComScore);
      if (newComScore === 10) {
        setResult("Com Win");
        setComScore(0);
        setUserScore(0);
      }
    } else if (comindex < userindex) {
      const newUserScore = userScore + 1;
      setUserScore(newUserScore);
      if (newUserScore === 10) {
        setResult("User Win");
        setComScore(0);
        setUserScore(0);
      }
    }
  };

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={diceSpin}>Start</button>

      <div className="dice">
        <img src={diceimg[0]} ref={comdice} alt="Computer Dice" />
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={diceimg[1]} ref={userdice} alt="User Dice" />
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  );
};

export default Myfinal;
