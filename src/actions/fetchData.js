//componentで行うactionの一部

import axios from "axios";

export default function fetchData() {
  const API_KEY = "aZr1HbxPmm7UOh9EHmvRfdmqrjbVwinmoseU5q3N";
  const END_POINT = "https://api.nasa.gov/planetary/apod?api_key=";
  const request = axios.get(END_POINT + API_KEY);

  return {
    type: "FETCH_DATA",
    payload: request
  };
}
