// import React, { useState, useEffect } from "react";
// import { catFetch } from "../api";
// import { requestOptions } from "../headers";
// import axios from "axios";
// import { baseUrl } from "../apiUrl";

// // const renderCat = () => {
// // const [catData, setCatData] = useState([]);

// // useEffect(async () => {
// //   const url = `${baseUrl}breeds?limit=8&offset=8`; // change string for different end point
// //   const response = await fetch(url, requestOptions);
// //   console.log(response);
// //   const result = await response.json();
// //   console.log(result);
// //   // const filtered = data.filter((item) => Boolean(item.image)); // saving only objects that has images
// //   // const secondFilter = filtered.filter((item) => Boolean(item.cfa_url)); // filter again and keep only ones with link with additional information
// //   // console.log(secondFilter);
// //   setCatData(result);
// //   return result;
// // }, []);

// const renderCat = (data, index) => {
//   // const img = catData[index].image.url; // IF statement to handle objects that missing certain properties and not break the code
//   // const infoLink = breedData[index].cfa_url;

//   //  {image && <img src={source}} if not display place holder
//   return (
//     <div className="App" key={catData[index].id}>
//       <div className="col mb-4">
//         <div className="card ">
//           <div className="img-div">
//             {catData[index].image && (
//               <img
//                 className="card-img-top"
//                 src={catData[index].image.url}
//               ></img>
//             )}
//           </div>
//           <div className="card-body">
//             <h5 className="card-title">Cat Breed - {catData[index].name}</h5>
//             <p className="card-text">
//               Affection Level - {catData[index].affection_level}
//             </p>
//             <p className="card-text">
//               Short legs - {catData[index].short_legs}
//             </p>
//             <p className="card-text">{catData[index].description}</p>
//             {catData[index].cfa_url && (
//               <a href={catData[index].cfa_url} target="_blank" rel="noreferrer">
//                 Learn More!
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default renderCat;
