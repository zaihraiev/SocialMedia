const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const fileUpload = require("express-fileupload");

const { readdirSync } = require("fs");
const app = express();
app.use(
  fileUpload({
    useTempFiles: true,
  }),
);
app.use(express.json());

let allowed = ["http://localhost:3000"];
function options(req, res) {
  let tmp;
  let origin = req.header("Origin");

  if (allowed.indexOf(origin) > -1) {
    tmp = {
      origin: true,
      optionsSuccessStatus: 200,
    };
  } else {
    tmp = {
      origin: false,
    };
  }

  res(null, tmp);
}

app.use(cors(options));

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("error connecting to database", err);
  });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server is listening...");
});

console.log((+new Date() * Math.random()).toString().substring((0, 1)));
