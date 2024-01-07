require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./utils/db.utils");
const authRouter = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
