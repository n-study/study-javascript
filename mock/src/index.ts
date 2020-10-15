import express from 'express';

const app = express();
app.use("/", (_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/1", (_, res) => {
  res.json({data: [...Array(10)].map((_, index) => index)});
});

interface ITasks {
  [key: string]: {
    name: string;
    age: number;
  };
}

const tasks: ITasks = {
  "1537": {
    name: "은창윤",
    age: 23,
  },
  "2213": {
    name: "민호윤",
    age: 32,
  },
  "3124": {
    name: "송기영",
    age: 12,
  },
  "3947": {
    name: "윤승원",
    age: 64,
  },
  "3948": {
    name: "송정은",
    age: 49,
  },
  "5908": {
    name: "한부경",
    age: 22,
  },
  "4782": {
    name: "국인경",
    age: 16,
  },
  "0945": {
    name: "최가람",
    age: 20,
  },
  "1247": {
    name: "이한나",
    age: 46,
  },
  "9258": {
    name: "채선영",
    age: 35,
  },
  "9582": {
    name: "한서영",
    age: 27,
  },
  "5831": {
    name: "최가영",
    age: 29,
  },
};

app.get("/2", (_, res) => {
  res.json({
    title: "9일간의 자바스크립트",
    tasks: Object.keys(tasks),
    prefix: "/2/randomData",
  });
});

for (const [key, value] of Object.entries(tasks)) {
  app.get(`/2/randomData${key}`, (_, res) => {
    res.json(value);
  });
}

app.use((_, res) => {
  res.status(404).json({msg: "no data"});
});

app.listen("8080");
