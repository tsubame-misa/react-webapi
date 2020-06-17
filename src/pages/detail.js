import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import { Image, Name, Type } from "./pokemon";

const getSpecies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data.genera[0].genus);
  const species = data.genera[0].genus;
  //console.log(data);
  return species;
};

const Genera = ({ data }) => {
  const url = data.species.url;
  const [species, setSpecies] = useState();
  useEffect(() => {
    getSpecies(url).then((species) => {
      setSpecies(species);
    });
  });

  return <div>分類 : {species}</div>;
};

const getExplanation = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const text1 = data.flavor_text_entries[29].flavor_text;
  const text2 = data.flavor_text_entries[53].flavor_text;
  const textData = [];
  //console.log(data.flavor_text_entries.length);
  const len = data.flavor_text_entries.length;
  for (let i = 0; i < len; i++) {
    if (data.flavor_text_entries[i].language.name === "ja") {
      textData.push(data.flavor_text_entries[i].flavor_text);
      //console.log(data.flavor_text_entries[i].flavor_text);ja-Hrkt
    }
  }
  return textData;
};

const Explanation = ({ data }) => {
  const url = data.species.url;
  const [exp, setExp] = useState();
  useEffect(() => {
    getExplanation(url).then((exp) => {
      setExp(exp);
    });
  });
  return (
    <div>
      <h2 className="subtitle">説明</h2>
      {exp}
    </div>
  );
};

const Content = ({ data }) => {
  if (data == null) {
    return (
      <div className="content">
        <p>loading...</p>
      </div>
    );
  }
  //console.log(data);
  const URL = data.forms[0].url;
  const t = data.types;
  return (
    <div className="columns">
      <div className="column is-one-thirds">
        <Image url={URL} />
      </div>
      <div className="column is-half">
        <div style={{ backgroundColor: "#f68b39" }}>
          <h1 className="title">
            <Name name={data.name} />
          </h1>
          <Genera data={data} />
          <Type types={data.types} />
          <p>高さ : {(data.height * 0.1).toFixed(1)}m</p>
          <p>重さ : {(data.weight * 0.1).toFixed(1)}Kg</p>
          <br></br>
          <Explanation data={data} />
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  const input = useParams();
  const id = input.id;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <Content data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
