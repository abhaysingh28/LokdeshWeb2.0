import axios from "axios";

const Axios = axios.create({
  baseURL: "https://52.66.186.55/",
  headers: {
    "Content-Type": "application/json",
  },    
});

export default Axios;
