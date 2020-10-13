function a() {
  for (let i = 0; i < 1000000; i++) {
    new Date().toString();
  }
  console.log("end loop");
  return "yes";
}

function b() {
  console.log("please call me asap!!!!!!");
}

// console.log("start");
// a();
// b();
// console.log("end");








// setTimeout
// console.log("start");
// console.log(setTimeout(a, 0));
// b();
// console.log("end");
















// setTimeout으로 반환값 받기??


// console.log("start");
// console.log(setTimeout(() => {
//   const tmp = a();
//   b();
//   console.log(tmp);
// }, 0));
// b();
// console.log("end");



// 아... 그럼 값을 어떻게 받지...

// 콜백


function a2(cb) {
  setTimeout(() => {
    for (let i = 0; i < 1000000; i++) {
      new Date().toString();
    }
    console.log("end loop");
    cb("yes");
  }, 0);
  // return "yes";
}


// a2(x => {
//   a2(y => {
//     console.log(y);
//   })
//   console.log(x);
// });
// a2(console.log)
// b();





// Promise

// Promise.resolve(111);

// 세가지 상태

// Promise에서 값을 받아오기


// const prom1 = Promise.resolve("yes");

// console.log(prom1);

// prom1.then(x => {
//   console.log(x);
// }).catch(x => {
//   console.log("failed T.T");
// });


// const prom2 = Promise.reject("sorry")

// console.log(prom2);

// prom2.then(x => {
//   console.log("success!");
// }).catch(x => {
//   console.log(x);
// });




// const prom3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     for (let i = 0; i < 1000000; i++) {
//       new Date().toString();
//     }
//     console.log("end loop");
//     resolve("yes");
//   }, 0);
// });

// prom3.then(x => {
//   console.log(`success: ${x}`);
// });

// console.log(`success: `, prom3);



const prom4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("yes");
    reject("sorry");
  }, 3000);
});

prom4.then(x => {
  console.log(`success: ${x}`);
}).catch(err => {
  console.log(`rejected: ${err}`);
});

console.log(prom4);


