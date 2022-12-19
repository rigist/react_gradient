import React, { useState, useCallback } from "react";
import { Sphere } from "./Sphere";
import { App2 } from "./App2";

const arrPokem = [
  {
    name: "bulbasaur",
    id: "1",
  },
  {
    name: "ivysaur",
    id: "2",
  },
  {
    name: "venusaur",
    id: "3",
  },
  {
    name: "charmander",
    id: "4",
  },
  {
    name: "charmeleon",
    id: "5",
  },
  {
    name: "charizard",
    id: "6",
  },
  {
    name: "squirtle",
    id: "7",
  },
  {
    name: "wartortle",
    id: "8",
  },
  {
    name: "blastoise",
    id: "9",
  },
  {
    name: "caterpie",
    id: "10",
  },
  {
    name: "metapod",
    id: "11",
  },
  {
    name: "butterfree",
    id: "12",
  },
  {
    name: "weedle",
    id: "13",
  },
  {
    name: "kakuna",
    id: "14",
  },
  {
    name: "beedrill",
    id: "15",
  },
  {
    name: "pidgey",
    id: "16",
  },
  {
    name: "pidgeotto",
    id: "17",
  },
  {
    name: "pidgeot",
    id: "18",
  },
  {
    name: "rattata",
    id: "19",
  },
  {
    name: "raticate",
    id: "20",
  },
].slice(0, 6);

// https://pokeapi.co/api/v2/pokemon/?offset=98&limit=5

// add state, add button, load pokemons with loadPokemon

// https://sinyakov.com/frontend/react/hw/profi.png
// controlled components

//let arr2Pokem = [];

function loadPokemon(lim = 8) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=97&limit=${lim}`)
    .then((r) => r.json())
    .then((r) =>
      r.results.map((item) => {
        //"https://pokeapi.co/api/v2/pokemon/99/"
        return { name: item.name, id: item.url.slice(34, -1) };
      })
    );
}

//console.log(arr2Pokem);

export function App() {
  console.log(">>>> App");
  //console.log(arr2Pokem);
  let lim = 8;
  const [pokems, setPokems] = useState([]);

  const [catchPokem, setCatchPokem] = useState([]);

  const togglePokemon = useCallback(function (id) {
    setCatchPokem((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  function handleClick() {
    loadPokemon(lim).then((pokemons) => setPokems(pokemons));
  }

  // https://sinyakov.com/frontend/react/hw/jb.pdf

  // скачать https://www.jetbrains.com/help/idea/2018.3/HelpTOC.json
  // положить в src
  // импотрировать в нужный компонент

  // не надо использовать css библиотеки, препроцессоры

  // https://www.figma.com/file/L97JMoveX2scWgtX5UeIH8 макет в фигме

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <h1 style={{ color: "white" }}>Поймано покемонов</h1>
      <h2 style={{ color: "white" }}>
        {catchPokem.length}/{lim}
      </h2>

      {/* <button onClick={() => togglePokemon("1")}>1</button> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "black",
          margin: "auto",
          width: "569px",
        }}
      >
        {pokems.length === 0 && (
          <button onClick={handleClick}>loadPokemon</button>
        )}
        {pokems.length !== 0 &&
          pokems.map((item) => {
            return (
              <Sphere
                name={item.name}
                id={item.id}
                caught={catchPokem.includes(item.id)}
                togglePokemon={togglePokemon}
              />
            );
          })}
      </div>
      <App2 />
    </div>
  );
}
