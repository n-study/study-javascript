function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.append(script);

    script.onload = () => resolve(script);
    script.onerror = (err) => reject("can't load script", err);
  });
}

loadScript("./makeFunction.js")
  .then((script) => {
    console.log(`${script.src} is loaded!`);
    return loadScript("./option.js");
  })
  .then((script) => {
    console.log(`${script.src} is loaded!`);
    return loadScript("./argument.js");
  })
  .then((script) => {
    console.log(`${script.src} is loaded!`);
    make(option, ...arguments);
  });
