const fetch = require('node-fetch');

(async () => {
  const res = await fetch("http://localhost:8080/4");
  const data = await res.json();
  // console.log(json);
  const a = data
      .filter(v => v.grade === 3)
      .map(v => ({
        ...v,
        sumScore: Object.values(v.score).reduce((prev, val) => prev + val),
      }))
      .map(v => ({
        ...v,
        avgScore: v.sumScore / 5,
      }));

  console.log(a.reduce((prev, val) => prev + val.avgScore, 0) / a.length);
})();