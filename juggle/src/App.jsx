import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [breedData, setBreedData] = useState([]);

  useEffect(async () => {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "d5fb2b18-dfaa-41fb-bcf2-e5963040e228");
    myHeaders.append("Cookie", "build_id=19339");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      "https://api.thecatapi.com/v1/breeds?attach_breed=0",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    const filtered = data.filter((item) => Boolean(item.image)); // saving only objects that has images
    const secondFilter = filtered.filter((item) => Boolean(item.cfa_url)); // filter again and keep only ones with link with additional information
    // console.log(secondFilter);
    setBreedData(secondFilter);
  }, []);

  const renderData = (data, index) => {
    const img = breedData[index].image.url;
    const infoLink = breedData[index].cfa_url;
    return (
      <div className="App" key={breedData[index].id}>
        <div className="card">
          <img className="card-img-top" src={img} alt="Cat here :)"></img>
          <div className="card-body">
            <h5 className="card-title">Cat Breed - {breedData[index].name}</h5>
            <p className="card-text">
              Affection Level - {breedData[index].affection_level}
            </p>
            <p className="card-text">
              Short legs - {breedData[index].short_legs}
            </p>
            <p className="card-text">{breedData[index].description}</p>
            <a href={infoLink} target="_blank" rel="noreferrer">
              Learn More!
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className=" header">
        <h3>
          Cat List <br /> by <br /> Lyubomir Dias
        </h3>
      </div>
      {breedData.map(renderData)}
    </div>
  );
};

export default App;
