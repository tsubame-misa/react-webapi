import React, { useEffect, useState } from "react";
import Pokemon from "./pages/pokemon";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Detail from "./pages/detail";

const PokeList = () => {
  const len = 32;
  const ID = [len];
  for (let i = 1; i <= len; i++) {
    ID[i - 1] = i;
  }
  return (
    <div>
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

const App = () => {
  const len = 32;
  const ID = [len];
  for (let i = 1; i <= len; i++) {
    ID[i - 1] = i;
  }

  return (
    <Router /*basename={process.env.PUBLIC_URL}*/>
      <header>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Pokedex from <a href="https://pokeapi.co/docs/v2">PokeAPI</a>
              </h1>

              <br></br>
              <Link to="/pokedex">zukan</Link>
            </div>
          </div>
        </section>
      </header>

      {/*<div>
        <header>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Pokedex from <a href="https://pokeapi.co/docs/v2">PokeAPI</a>
                </h1>
                <Link to="pokemon_detaile">detail</Link>
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
        </header>
          </div>*/}

      <div>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/pokedex" component={PokeList} />
          <Route path="/pokemon_detaile/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
