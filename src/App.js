import React, { useEffect, useState } from "react";
import Pokemon from "./pages/pokemon";

const App = () => {
  const len = 32;
  const ID = [len];
  for (let i = 1; i <= len; i++) {
    ID[i - 1] = i;
  }

  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Pokedex from <a href="https://pokeapi.co/docs/v2">PokeAPI</a>
            </h1>
          </div>
        </div>
      </section>
      <div className="columns is-vcentered is-multiline">
        {ID.map((i) => (
          <div className="column is-3">
            <Pokemon id={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
