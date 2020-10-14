function loadScript(src, callback, error) {
  const script = document.createElement("script");
  script.src = src;
  document.body.append(script);

  script.onload = () => callback(script);
  script.onerror = (err) => error("can't load script", err);
}

const check = [false, false, false];
// loadScript는 비동기로 작동
loadScript("./makeFunction.js", (makeScript) => {
  console.log(`${makeScript.src} is loaded!`);

  check[0] = true;
  if (check.every(v => v)) run();
}, (error, msg) => {
  console.error(error, msg);
});

loadScript("./option.js", (optionScript) => {
  console.log(`${optionScript.src} is loaded!`);

  check[1] = true;
  if (check.every(v => v)) run();
}, (error, msg) => {
  console.error(error, msg);
});

loadScript("./arguments.js", (argumentScript) => {
  console.log(`${argumentScript.src} is loaded!`);

  check[2] = true;
  if (check.every(v => v)) run();
}, (error, msg) => {
  console.error(error, msg);
});

function run() {
  make(option, ...arguments);
}
