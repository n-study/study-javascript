import express from 'express';
import fs from 'fs';

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
    uri: "/2/randomData",
  });
});

for (const [key, value] of Object.entries(tasks)) {
  app.get(`/2/randomData${key}`, (_, res) => {
    res.json(value);
  });
}

app.get("/3", (_, res) => {
  const data = fs.readFileSync("./lorem.html").toString().split("\n");
  const slice = Math.floor(Math.random() * (data.length - 100));
  const percentage = Math.random();
  res.json({
    data: data.slice(slice, slice+100).map((v) => ({
      title: v,
      done: Math.random() > percentage,
    })),
  });
});

type subject = 'korean' | 'math' | 'english' | 'social' | 'science';

interface IStudent {
  name: string;
  grade: 1 | 2 | 3;
  class: 1 | 2 | 3 | 4 | 5 | 6;
  score: {
    [key in subject]: number;
  }
}

const students: IStudent[] = [
  {
    name: "A",
    grade: 2,
    class: 4,
    score: {
      korean: 54,
      english: 69,
      math: 98,
      social: 95,
      science: 100,
    },
  },
  {
    name: "B",
    grade: 2,
    class: 1,
    score: {
      korean: 58,
      english: 86,
      math: 76,
      social: 96,
      science: 89,
    },
  },
  {
    name: "C",
    grade: 3,
    class: 3,
    score: {
      korean: 96,
      english: 69,
      math: 85,
      social: 76,
      science: 91,
    },
  },
  {
    name: "D",
    grade: 1,
    class: 5,
    score: {
      korean: 85,
      english: 96,
      math: 85,
      social: 92,
      science: 95,
    },
  },
  {
    name: "E",
    grade: 1,
    class: 6,
    score: {
      korean: 100,
      english: 93,
      math: 90,
      social: 100,
      science: 87,
    },
  },
  {
    name: "F",
    grade: 1,
    class: 2,
    score: {
      korean: 92,
      english: 84,
      math: 82,
      social: 94,
      science: 74,
    },
  },
]

app.get("/4", (_, res) => {
  res.json(students);
});

app.use((_, res) => {
  res.status(404).json({msg: "no data"});
});

app.listen("8080");
