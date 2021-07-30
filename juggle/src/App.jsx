import "./App.css";
import React from "react";
import RenderCats from "./components/Pagination";

const App = () => {
  return (
    <div>
      <div className=" header">
        <h3>
          Cat List <br /> by <br /> Lyubomir Dias
        </h3>
      </div>
      <div className="p-4">
        <RenderCats />
      </div>
    </div>
  );
};

export default App;
