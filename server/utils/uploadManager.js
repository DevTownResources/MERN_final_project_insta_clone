const nodeFetch = require("node-fetch");
const Bytescale = require("@bytescale/sdk");

const uploadManager = new Bytescale.UploadManager({
  fetchApi: nodeFetch,
  apiKey: process.env.BYTE_SCALE_API_KEY,
});

module.exports = uploadManager;
