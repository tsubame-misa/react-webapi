import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import { Image, Name, Type } from "./pokemon";

const Content = ({ data }) => {
  if (data == null) {
    return (
      <div className="content">
        <p>loading...</p>
      </div>
    );
  }
  console.log(data);
  const URL = data.forms[0].url;
  const t = data.types;
  return (
    <div>
      <Name name={data.name} />
      <Image url={URL} />
      <Type types={data.types} />
      <p>高さ : {data.height}</p>
      <p>重さ : {data.weight}</p>
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
