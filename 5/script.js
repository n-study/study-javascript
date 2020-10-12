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
      b += x ** 2;
      if (++i === len) break;
    }
  }
  return b / i;
}

// 배열 길이 구하기 (reduce 사용)


// sum (+)



// product (*)














// 배열 메소드









// 방금 만들어 본 것들을 배열 메소드를 사용해서 만들기!

