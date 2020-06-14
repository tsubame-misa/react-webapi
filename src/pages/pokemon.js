import React, { useEffect, useState } from "react";

const getImageUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const imgUrl = data.sprites.front_default;
  return imgUrl;
};

const Image = ({ url }) => {
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
      <h1>{data.name}</h1>
      <p>
        type ...&emsp;
        {t.map((input) => input.type.name + "  ")}
      </p>
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

export default Pokemon;
