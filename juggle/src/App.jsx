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
    setBreedData(data);
  }, []);

  const renderData = (data, index) => {
    const img = breedData[23].image.url; // TODO throw error URL is undefined, works with any index like so
    // console.log(img);
    return (
      <div className="App">
        <div className="card" key={breedData[index]}>
          <img className="card-img-top" src={img} alt="Cat image"></img>
          <div className="card-body">
            <h5 className="card-title">Cat Breed - {breedData[index].name}</h5>
            <p className="card-text">
              Affection Level - {breedData[index].affection_level}
            </p>
            <p className="card-text">
              Short legs - {breedData[index].short_legs}
            </p>
            <p className="card-text">{breedData[index].description}</p>
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
