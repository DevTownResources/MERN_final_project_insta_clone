require("dotenv").config({ path: "/home/ec2-user/insta_clone_env.env" });
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDB } = require("./utils/db.utils");
const authRouter = require("./routes/auth.js");
const postsRouter = require("./routes/posts.js");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(
  cors({
    origin: "https://comment-functionality.dfwjegf0aiqqy.amplifyapp.com",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
