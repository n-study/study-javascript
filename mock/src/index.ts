import express from 'express';

const app = express();
app.use("/", (_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/1", (_, res) => {
  res.json({data: [...Array(10)].map((_, index) => index)});
});

app.use((_, res) => {
  res.status(404).json({msg: "no data"});
});

app.listen("8080");
