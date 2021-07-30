import { requestOptions } from "./headers";
import axios from "axios";
import { baseUrl } from "./apiUrl";

const url = `${baseUrl}breeds?attach_breed=0`; // change string for different end point

export const catFetch = async () => {
  let response;
  let data;
  const url = `${baseUrl}breeds?attach_breed=0`; // change string for different end point---- limit=10

  try {
    response = await axios.get(url, requestOptions);
    // console.log(response.data);
    data = response.data;
    // console.log(data);
  } catch (e) {
    // catch error
    throw new Error(e.message);
  }
  // console.log(data);
  return data;
};

// export const catFetch = async () => {
//   const response = await fetch(
//     "https://api.thecatapi.com/v1/breeds?attach_breed=0",
//     requestOptions
//   );
//   export const data = await response.json();
//   console.log(data);
//   // const filtered = data.filter((item) => Boolean(item.image)); // saving only objects that has images
//   // const secondFilter = filtered.filter((item) => Boolean(item.cfa_url)); // filter again and keep only ones with link with additional information
//   // // setBreedData(secondFilter);
//   // console.log(secondFilter);
//   return data;
// };

// useEffect(async () => {
//   // const myHeaders = new Headers();
//   // myHeaders.append("x-api-key", "d5fb2b18-dfaa-41fb-bcf2-e5963040e228"); // use ENV var to hide api key
//   // myHeaders.append("Cookie", "build_id=19339"); // headers in diff files

//   // const requestOptions = {
//   //   method: "GET",
//   //   headers: myHeaders,
//   //   redirect: "follow",
//   // };

//   const response = await fetch(
//     "https://api.thecatapi.com/v1/breeds?attach_breed=0",
//     requestOptions
//   );
//   const data = await response.json();
//   console.log(data);
//   const filtered = data.filter((item) => Boolean(item.image)); // saving only objects that has images
//   const secondFilter = filtered.filter((item) => Boolean(item.cfa_url)); // filter again and keep only ones with link with additional information
//   // console.log(secondFilter);
//   setBreedData(secondFilter);
// }, []);
