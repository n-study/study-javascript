const fetch = require('node-fetch');

// fetch("https://3c3eb339082c.ngrok.io/1")
//   .then((res) => res.json())
//   .then((data) => data.data)
//   .then((data) => data.map(v => v * 2))
//   .then(console.log);

/* fetch("https://3c3eb339082c.ngrok.io/2")
  .then((res) => res.json())
  .then((data) => data.tasks)
  .then((data) => {
    // const arr = [];
    for (const item of data) {
      fetch(`https://3c3eb339082c.ngrok.io/2/randomData${item}`)
        .then((res) => res.json())
        .then(console.log);
        // .then((data) => arr.push(data));
    }
    // console.log(arr);
  }); */

// fetch("https://3c3eb339082c.ngrok.io/2/randomData1247")
//   .then((res) => res.json())
//   .then(console.log);

/*
(async () => {
  const res = await fetch("https://3c3eb339082c.ngrok.io/2");
  const data = await res.json();
  const tasks = data.tasks;
  
  const arr = [];
  for (const item of tasks) {
    arr.push(fetch(`https://3c3eb339082c.ngrok.io/2/randomData${item}`)
              .then((res) => res.json()));
      // .then((data) => arr.push(data));
  }
  const result = await Promise.all(arr);
  console.log(
    result
      .filter(v => v.age < 30)
      // .map(v => v.name)
      .map(v => v.age)
      .reduce((acc, v, _, array) => acc + v / array.length, 0)
  );
  console.log(
    result
      .map(v => v.age)
      .reduce((acc, v, _, array) => acc + v / array.length, 0)
  );
})();
*/

(async () => {
  const res = await fetch("https://3c3eb339082c.ngrok.io/3");
  const data = await res.json();

  const arr = data.data;
  
  console.log(
    "===== TODO LIST =====\n\n\n"
    + arr
      .filter(v => !v.done)
      .map(v => v.title)
      // .filter(v => /x/.test(v))
      .map(v => v.length > 50 ? v.slice(0, 47) + "..." : v)
      .map((v, i) => `${i + 1}. ${v}`)
      .join("\n")
  );
})();
