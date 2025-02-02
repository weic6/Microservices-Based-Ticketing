import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server!
    return axios.create({
      // use the env variable here
      baseURL: process.env.BASE_URL,
      headers: req.headers,
    });
  } else {
    // We are on the browser!
    return axios.create({
      baseURL: "/",
    });
  }
};
