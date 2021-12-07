const axios = require("axios");

const myWalletAPI = axios.create({
  baseURL: "http://172.17.1.143:3000", // Adresse IP du PC qui host le backend
  timeout: 1000,
});

export default myWalletAPI;
