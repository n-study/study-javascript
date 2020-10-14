function loadScript(src, callback, error) {
  const script = document.createElement("script");
  script.src = src;
  document.body.append(script);

  script.onload = () => callback(script);
  script.onerror = (err) => error("can't load script", err);
}

// loadScript는 비동기로 작동
loadScript("./makeFunction.js", (script) => {
  console.log(`${script.src} is loaded!`);

  loadScript("./option.js", (script) => {
    console.log(`${script.src} is loaded!`);

    make(option);
  }, (error, msg) => {
    console.error(error, msg);
  });
}, (error, msg) => {
  console.error(error, msg);
});
