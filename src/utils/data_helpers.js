//**** WHEN CONNECTION WITH BACKEND **** //

// import { accessToken } from "../../token";
export const API_BASE = "http://localhost:4000";

const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getData = (url) => {
  // return fetch(`${url}?access_token=${accessToken}`)
  return fetch(`${url}`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};
