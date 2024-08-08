import React, { useState, useRef } from "react";

const Myref02 = () => {
  const pokeimg = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/2.gif",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/3.gif",
  ];
  //   const [index, setIndex] = useState(0);
  const poke = useRef();
  let index = 0;

  const beforeBtn = () => {
    index--;
    if (index < 0) {
      index = 2;
    }
    poke.current.src = pokeimg[index];
  };

  const nextBtn = () => {
    index++;
    if (index > 2) {
      index = 0;
    }
    poke.current.src = pokeimg[index];
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={pokeimg[index]}
        alt=""
        style={{ width: "200px", height: "200px" }}
        ref={poke}
      />
      <br />
      <button onClick={beforeBtn}>before</button>
      <button onClick={nextBtn}>next</button>
    </div>
  );
};

export default Myref02;
