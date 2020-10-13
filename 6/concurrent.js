function a() {
  for (let i = 0; i < 1000000; i++) {
    new Date().toString();
  }
}

function b() {
  console.log("please call me asap!!!!!!");
}

a();
b();

