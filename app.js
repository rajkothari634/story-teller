const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
app.use(express.json());
app.use(express.static("./public"));
//middleware
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "hello from server side", app: "Story teller" });
});

app.use("/api/v1/user", userRouter);

module.exports = app;
