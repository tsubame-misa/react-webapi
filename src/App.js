import React, { useEffect, useState } from "react";
import Pokemon from "./pages/pokemon";

const App = () => {
  const len = 10;
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
              Pokemon TCG Images from{" "}
              <a href="https://dog.ceo/dog-api/">Dog API</a>
            </h1>
          </div>
        </div>
      </section>
      {ID.map((i) => (
        <Pokemon id={i} />
      ))}
    </div>
  );
};

export default App;
