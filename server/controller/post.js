const nodeFetch = require("node-fetch");
const Bytescale = require("@bytescale/sdk");

const uploadManager = new Bytescale.UploadManager({
  fetchApi: nodeFetch,
  apiKey: process.env.BYTE_SCALE_API_KEY,
});

const createPost = async (req, res) => {
  console.log(req.body, req.file);
  try {
    const { fileUrl, filePath } = await uploadManager.upload({
      data: req.file.buffer,
      originalFileName: req.file.originalname,
      type: req.file.mimetype,
    });

    console.log(fileUrl, filePath);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPost,
};
