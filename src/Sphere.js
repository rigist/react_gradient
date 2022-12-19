import React, { useState, memo } from "react";

export const Sphere = memo(Sphere_);

function Sphere_({ name, id, caught, togglePokemon }) {
  console.log(">>>> Sphere", name);
  //   const [boolBgTx, setBoolBgTx] = useState(true);

  //   console.log(caught);
  function hadleclick() {
    togglePokemon(id);
    // setBoolBgTx(!boolBgTx);
    // setBoolBgTx((prev) => !prev);
  }

  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div
      className="sphere"
      style={{
        backgroundColor: caught ? "red" : "green",
      }}
    >
      <span
        style={{
          color: "white",
          transform: "rotate(-8deg)",
          position: "absolute",
          top: "15px",
          left: "30px",
        }}
      >
        {name}
      </span>

      <img src={imgSrc} />

      <button
        style={{
          backgroundColor: "yellow",
          transform: "translateY(-20px)",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
        onClick={hadleclick}
      >
        {caught ? "отпустить" : "поймать"}
      </button>
    </div>
  );
}

// setNum(text === "поймать" ? (num = num + 1) : (num = num - 1));
