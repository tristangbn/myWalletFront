const axios = require("axios");

const myWalletAPI = axios.create({
  // baseURL: "https://mywallet-back-prod.herokuapp.com", // Adresse IP du PC qui host le backend
  baseURL: "http://localhost:3000/", // Adresse IP du PC qui host le backend
  timeout: 10000,
});

export default myWalletAPI;