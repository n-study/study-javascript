// fetch, then
// fetch("http://218.236.47.219:8080")
//   .then((res) => res.json())
//   .then((json) => json.msg)
//   .then(console.log);


// fetch("http://218.236.47.219:8080/1")
//   .then((data) => console.log(data));
//   .then((res) => res.json())
//   .then((json) => json.data)
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v * 2))
//   .then((data) => data.map(v => v + 35087))
//   .then((data) => console.log(data));


// async / await


(async() => {
  const res = await fetch("http://218.236.47.219:8080/1");
  const json = await res.json();
  const data = json.data;
  console.log(data
    .map(v => v * 2)
    .map(v => v * 2)
    .map(v => v * 2)
    .map(v => v * 2)
    .map(v => v * 2)
    .map(v => v * 2)
    .map(v => v * 2)
    .map(v => v * 2)
    .map(v => v * 2)
    .map(v => v * 2)
    .map(v => v * 2)
    );
})();







function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.append(script);

    script.onload = () => resolve(script);
    script.onerror = (err) => reject("can't load script", err);
  });
}

// loadScript("./makeFunction.js")
//   .then((script) => {
//     console.log(`${script.src} is loaded!`);
//     return loadScript("./option.js");
//   }).then((script) => {
//     console.log(`${script.src} is loaded!`);
//     return loadScript("./argument.js");
//   }).then((script) => {
//     console.log(`${script.src} is loaded!`);
//     make(option, ...arguments);
//   }).catch(() => {});


(async() => {
  const makeScript = await loadScript("./makeFunction.js");
  console.log(`${makeScript.src} is loaded!`);

  const optionScript = await loadScript("./option.js");
  console.log(`${optionScript.src} is loaded!`);

  try {
    const arguementScript = await loadScript("./argument.js");
    console.log(`${arguementScript.src} is loaded!`);
  } catch (err) {
    console.error("can't load", err);
  }

  try {
    make(option, ...arguments);
  } catch (err) { 
    console.error(err);
  }
})();


async function a() {
  setTimeout(() => {
    for (let i = 0; i < 1000000; i++) {
      new Date().toString();
    }
    console.log("end loop");
    return "yes";
  }, 0);
}

a();
console.log("done");
