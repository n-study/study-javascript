
const fetch = require('node-fetch');

const majors = {
  1: "EB",
  2: "DC",
  3: "WP",
  4: "WP",
  5: "HD",
  6: "HD",
};

(async () => {
  const res = await fetch("http://localhost:8080/4");
  const data = await res.json();

  // console.log(
  //   data
  //     .filter(v => v.grade === 1)
  //     .map(v => ({
  //       ...v,
  //       avgScore: Object.values(v.score).reduce((prev, val) => prev + val) / 5,
  //       major: majors[v.class],
  //     }))
  // );

  console.log(
    data
      // .filter(v => v.grade !== 1)
      .map(v => Object.values(v.score).reduce((prev, val) => prev + val) / 5)
      .reduce((prev, curr, _, arr) => prev + curr / arr.length, 0)
  )
})();
