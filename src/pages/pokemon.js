import React, { useEffect, useState } from "react";
import en2jaType from "./type.json";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export const getImageUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const imgUrl = data.sprites.front_default;
  return imgUrl;
};

export const Image = ({ url }) => {
  const [img, setImg] = useState(null);
  useEffect(() => {
    getImageUrl(url).then((img) => {
      setImg(img);
    });
  });
  return (
    <figure className="image">
      <img src={img} style={{ width: "50%" }} />
    </figure>
  );
};

export const convertName = async (name) => {
  const s = new String(name);
  name = s.slice(0, 1).toUpperCase() + s.slice(1);
  const response = await fetch(
    "https://gist.githubusercontent.com/PonDad/93922f63c3143489e30c3716d3d176d2/raw/0ea137397f9701828ecd7da7d253168678646488/pokemon.json"
  );
  const data = await response.json();
  data.map((input) => {
    if (input.en === name) {
      name = input.ja;
    }
  });
  return name;
};

export const Name = ({ name }) => {
  const [japaName, setJapaName] = useState(null);
  useEffect(() => {
    convertName(name).then((japaName) => {
      setJapaName(japaName);
    });
  });
  return (
    <div>
      <h1>{japaName}</h1>
    </div>
  );
};

export const convertType = (type) => {
  //console.log(type);
  en2jaType.map((input) => {
    if (input.en == type) {
      type = input.ja;
    }
  });
  return type; //<div>{type}hello</div>;
};

export const Type = ({ types }) => {
  return (
    <div>
      <h1>
        タイプ：
        {types.map((input) => convertType(input.type.name) + " ")}
      </h1>
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

  const URL = data.forms[0].url;
  const t = data.types;
  return (
    <div>
      <Image url={URL} />
      <Name name={data.name} />
      {/*} <Type types={data.types} />/*/}
      {/*} <p>{t.map((input) => Type(input.type.name))}</p>*/}
    </div>
  );
};

const Pokemon = ({ id }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Link to={`/pokemon_detaile/${id}`}>
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <Content data={data} />
              {/*console.log(data)*/}
            </div>
          </div>
        </section>
      </div>
    </Link>
  );
};

export default Pokemon;
