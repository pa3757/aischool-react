import React, { useRef, useState, useEffect } from "react";

const Myfinal2 = () => {
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
      setComScore(comScore + 1);
    } else if (comindex < userindex) {
      setUserScore(userScore + 1);
    }
  };

  useEffect(() => {
    if (comScore === 10) {
      setResult("Com Win");
      setComScore(0);
      setUserScore(0);
    } else if (userScore === 10) {
      setResult("User Win");
      setComScore(0);
      setUserScore(0);
    }
  }, [comScore, userScore]);

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

export default Myfinal2;
