const axios = require("axios");

const myWalletAPI = axios.create({
  baseURL: "https://mywallet-back-prod.herokuapp.com/", // Adresse du backend
  timeout: 10000,
});

export default myWalletAPI;