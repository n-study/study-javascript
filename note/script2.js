const log = console.log;

const C = {};
const L = {};

const curry = f => (a, ...bs) => (
  bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs)
);

L.iterator = curry(function*(f, x) {
  while (true) {
    yield x;
    x = f(x);
  }
});

L.map = curry(function*(f, xs) {
  for (const x of xs) {
    yield f(x);
  }
});

L.flat = function*(xs) {
  for (const a of xs) {
    if (a && a[Symbol.iterator]) yield* L.flat(a);
    else yield a;
  }
};

const take = curry(function(length, xs) {
  let res = [];
  for (const x of xs) {
    res.push(x);
    if (res.length === length) break;
  }
  return res;
});

const takeWhile = curry(function(f, xs) {
  let res = [];
  for (const x of xs) {
    if (f(x))
      res.push(f(x));
  }
  return res;
});

const span = curry(function(f, xs) {
  const res = [];
  for (const x of xs) {
    // log(f);
    if (f(x)) res.push(x);
    else break;
  }
  return [res, xs.slice(res.length)];
});

const groupBy = curry(function(f, xs) {
  if (xs.length) {
    const [ys, zs] = span(f(xs[0]), xs.slice(1));
    return [[xs[0], ...ys], ...groupBy(f, zs)];
  }
  return [];
});

const group = groupBy(a => b => a === b);

const getN = curry(function(n, xs) {
  let i = 0;
  let res;
  for (const x of xs) {
    res = x;
    if (i++ === n) break;
  }
  return res;
});

C.reduce = function(f, acc, xs) {
  if (arguments.length == 2) {
    xs = acc[Symbol.iterator]();
    acc = xs.next().value;
  }
  for (const x of xs) {
    // log(x);
    acc = f(acc, x);
  }
  return acc;
};

const go = (x, ...fs) => C.reduce((a, f) => f(a), x, fs);

const pipe = (...fs) => x => go(x, ...fs);

const arr = [
  [1, [2, 3, 4, 5, 4], 3],
  [4, 5, 6],
  [7, 8, 9]
];

go(
  arr,
  L.flat,
  getN(3),
  // log
);

go(
  [1],
  L.iterator(pipe(
    group,
    L.map(x => [x[0], x.length]),
    L.flat,
    take(Infinity),
  )),
  // getN(1000000),
  getN(20),
  take(Infinity),
  log,
)

// log(JSON.stringify(group([1, 1, 2, 3, 2, 2, 2, 3, 3])));
