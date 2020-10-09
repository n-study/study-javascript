const log = console.log;

// 화살표 함수 복습
const add = (a, b) => a + b;
const add5 = a => a + 5;
const div2 = a => a / 2;



// 왜 자바스크립트인가?

// 함수형 프로그래밍을 할 수 있는 조건

// 재귀 함수

// 1급 함수
// 커링

const addIn = function(a) {
  const f = function() {
    return a + 5;
  };
  return f;
};




// 순수 함수

let outerVar = 3;

const func = () => {
  return outerVar;
};

log(func());
outerVar = 10;
log(func());

const pureFunc = a => a;

log(pureFunc(45));
log(pureFunc(45));
log(pureFunc(45));
log(pureFunc(45));
log(pureFunc(45));
log(pureFunc(45));
log(pureFunc(45));
log(pureFunc(45));






console.clear();


// 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const len = 5;

//////////////
function f1(as, l) {
  let b = 0;
  let i = 0;
  for (const a of as) {
    if (a % 2) {
      b += a ** 2;
      if (++i === l) break;
    }
  }
  return b;
}
// log(f1(arr, len)); // 165
//////////////


//////////////
log(
  arr
    .filter(x => x % 2)
    .map(x => x ** 2)
    .slice(0, len)
    .reduce((acc, val) => acc + val)
);
/////////////

// function: f
// array: xs
// x

// map: 매핑!

const map = (f, xs) => {
  const res = [];
  for (const x of xs) {
    log("map", x);
    res.push(f(x));
  }
  return res;
};


log(map(x => x ** 2, [1, 2, 3, 4, 5]));


// filter: 참인 것만 돌려 줌

const filter = (f, xs) => {
  const res = [];
  for (const x of xs) {
    if (f(x)) {
      log("filter", x);
      res.push(x);
    }
  }
  return res;
};


log(filter(x => x % 2, [1, 2, 3, 4, 5]));


// length: 길이를 구하는 함수

const length = (xs) => {
  const as = [...xs];
  if (as.pop()) {
    return length(as) + 1;
  }
  return 0;
};


// reduce: 접는 거
// const reduce = (f, a, bs) => {
//   for (const b of bs) {
//     a = f(a, b);
//   }
//   return a;
// };

// log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5]));


console.clear();

const reduce = (f, acc, list) => {
  for (const item of list) {
    acc = f(acc, item);
  }
  return acc;
};

log(
  reduce(
    (acc, val) => acc + val,
    0,
    [1, 2, 3, 4, 5],
  )
);

const take = function (n, xs) {
  const arr = []
  for (const x of xs) {
    if (arr.length === n) break;
    arr.push(x);
  }
  return arr;
};

log(
  reduce((a, b) => a + b, 0,
    map(x => x ** 2,
      take(1,
        filter(x => x % 2, arr)))))



