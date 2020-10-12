const log = console.log;

// generator
function* inf() {
  for (let i = 0;; i++) {
    yield i;
  }
}
const infGen = inf();
// log(infGen.next().value);
// log(infGen.next().value);
// log(infGen.next().value);
// log(infGen.next().value);
// log(infGen.next().value);
// log(infGen.next().value);
// log(infGen.next().value);
// log(infGen.next().value);
// log(infGen.next().value);
// log(infGen.next().value);


// map

const map = function* (f, xs) {
  for (const x of xs) {
    // log("map", x);
    yield f(x);
  }
};

const mapRecur = function* (f, xs) {
  if (xs.length === 0) return;
  yield f(xs[0]);
  yield* mapRecur(f, xs.slice(1));
};

// filter
const filter = function* (f, xs) {
  for (const x of xs) {
    if (f(x)) {
      yield x;
    }
  }
};
const filterRecur = function* (f, xs) {
  if (xs.length === 0) return;
  if (f(xs[0])) yield xs[0];
  yield* filterRecur(f, xs.slice(1));
};

const reduce = (f, acc, list) => {
  for (const item of list) {
    acc = f(acc, item);
  }
  return acc;
};



// take
const take = function* (n, xs) {
  let i = 0;
  for (const x of xs) {
    if (i++ === n) break;
    yield x;
  }
};


// takeWhile
const takeWhile = function* (f, xs) {
  for (const x of xs) {
    if (!f(x)) break;
    yield x;
  }
};

// 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const len = 1;

/* log(
  reduce((a, b) => a + b, 0,
    map(x => x ** 2,
      take(len,
        filter(x => x % 2, inf()))))) */


// go
const go = (x, ...fs) => reduce((a, f) => f(a), x, fs);

go(
  inf(),
  xs => filter(x => x % 2, xs),
  xs => take(len, xs),
  xs => map(x => x ** 2, xs),
  xs => reduce((a, b) => a + b, 0, xs),
  log,
);

const length = (xs, n = 0) => {
  if (xs.length === 0) return n;
  return length(xs.slice(1), n + 1);
};



const test = function* () {
  yield* [1, 2, 3, 4, 5, 6, 7, 8];
};
