function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  document.body.append(script);

  script.onload = () => callback(script);
}

// loadScript는 비동기로 작동
loadScript("./makeFunction.js", (script) => {
  console.log(`${script.src} is loaded!`);

  // 잘 실행이 된다.
  make();
});
