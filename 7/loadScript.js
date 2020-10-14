function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  document.body.append(script);

  script.onload = () => callback(script);
}

// loadScript는 비동기로 작동
loadScript("./makeFunction.js");

// 존재하지 않는 함수여서 에러가 뜸
make();
