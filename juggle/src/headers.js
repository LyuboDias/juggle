const myHeaders = new Headers();
const API_KEY = process.env.REACT_APP_API_KEY;
myHeaders.append("x-api-key", API_KEY);
myHeaders.append("Cookie", "build_id=19339");

export const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
