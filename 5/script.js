const log = console.log;

const map = (f, xs) => {
  const res = [];
  for (const x of xs) {
    res.push(f(x));
  }
  return res;
};

const filter = (f, xs) => {
  const res = [];
  for (const x of xs) {
    if (f(x)) {
      res.push(x);
    }
  }
  return res;
};

const reduce = (f, acc, list) => {
  for (const item of list) {
    acc = f(acc, item);
  }
  return acc;
};

const take = function (n, xs) {
  const arr = []
  for (const x of xs) {
    if (arr.length === n) break;
    arr.push(x);
  }
  return arr;
};













// 추상화란?

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const len = 5;

// 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기
function f1(xs, len) {
  let b = 0;
  let i = 0;
  for (const x of xs) {
    if (x % 2) {
      b += x ** 2;
      if (++i === len) break;
    }
  }
  return b;
}
// 165

// 리스트에서 3의 배수를 length만큼 뽑아서 세제곱한 후 평균을 구하기
function f2(xs, len) {
  let b = 0;
  let i = 0;
  for (const x of xs) {
    if (x % 3 === 0) {
      b += x ** 3;
      if (++i === len) break;
    }
  }
  return b / i;
}


function g1(xs, len) {
  return (
    reduce((acc, x) => acc + x, 0,
      map(x => x ** 2,
        take(len,
          filter(x => x % 2, xs)))));
}

function g2(xs, len) {
  const tmp = (
    map(x => x ** 3,
      take(len,
        filter(x => x % 3 === 0, xs))));
  
  const sum = reduce((acc, x) => acc + x, 0, tmp);
  return sum / tmp.length;
}

log(f1(arr, len));
log(f2(arr, len));

log(g1(arr, len));
log(g2(arr, len));


// 배열 길이 구하기 (reduce 사용)


// sum (+)



// product (*)













console.clear();

// 배열 메소드

const arr2 = [{
  id: 328475,
  name: "이보성",
  birth: "20040429",
  addr: "부산광역시 기장군 ~~~",
  pic: "https://~~~~~~~~~~~",
  validate: {
    start: "2020.3.",
    end: "2023.2.",
  },
}, {
  id: 34233,
  name: "이보",
  birth: "20029",
  addr: "부산광역시 ~~~",
  pic: "ht~~~~~~~",
  validate: {
    start: "20.3.",
    end: "202.",
  },
}, {
  id: 45134,
  name: "보성",
  birth: "20429",
  addr: "산광역시",
  pic: "https",
  validate: {
    start: "2020.8.",
    end: "2023.1.",
  },
}]

// find
log(arr2.find(e => e.name === "보성"));

// every
log(arr2.every(e => e.addr.startsWith("부산")))

// some
log(arr2.some(e => e.addr.startsWith("부산")))


// flat
const innerArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
log(innerArr.flat());

// slice
log(arr.slice(0, 5));  // 5개

console.clear();
// splice: delete, insert
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
log(arr5.splice(2, 3, 'a', 'b', 'c', 'd'));
log(arr5);
// 불변성

log([...arr.slice(0, 2), 'a', 'b', 'c', 'd', ...arr.slice(5)]);
log(arr);


console.clear();

// 방금 만들어 본 것들을 배열 메소드를 사용해서 만들기!
function h1(xs, len) {
  return (
    xs
      .filter(x => x % 2)
      .slice(0, len)
      .map(x => x ** 2)
      .reduce((acc, x) => acc + x, 0));
}

function h2(xs, len) {
  const tmp = (
    xs
      .filter(x => x % 3 === 0)
      .slice(0, len)
      .map(x => x ** 3));

  const sum = tmp.reduce((acc, x) => acc + x, 0);
  return sum / tmp.length;
}

// log(h1(arr, len));

log(f2(arr, len));
log(g2(arr, len));
log(h2(arr, len));


/* const tmp = (
  arr
    .filter(x => x % 3 === 0) // 3의 배수
    .slice(0, 5) // take
    .map(x => x ** 3)
);

const sum = tmp.reduce((acc, x) => acc + x, 0);

// log(tmp);
log(sum / tmp.length); */

