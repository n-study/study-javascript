function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.append(script);

    script.onload = () => resolve(script);
    script.onerror = (err) => reject("can't load script", err);
  });
}
