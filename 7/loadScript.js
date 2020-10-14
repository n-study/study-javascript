function loadScript(src, callback, error) {
  const script = document.createElement("script");
  script.src = src;
  document.body.append(script);

  script.onload = () => callback(script);
  script.onerror = (err) => error("can't load script", err);
}

// loadScript는 비동기로 작동
loadScript("./makeFunction.js", (makeScript) => {
  console.log(`${makeScript.src} is loaded!`);

  loadScript("./option.js", (optionScript) => {
    console.log(`${optionScript.src} is loaded!`);

    loadScript("./arguments.js", (argumentScript) => {
      console.log(`${argumentScript.src} is loaded!`);

      make(option, ...arguments);
    }, (error, msg) => {
      console.error(error, msg);
    });
  }, (error, msg) => {
    console.error(error, msg);
  });
}, (error, msg) => {
  console.error(error, msg);
});
