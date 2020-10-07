const log = console.log;

// 함수
// function
function func1(arg) {
  return arg;
}
// log(func1());
// log(func1());
// log(func1());
// log(func1());

log(func1("test"));

function add(a, b) {
  return a + b;
}

log(add(1, 7));



// 함수 표현식 (익명 함수)
const add2 = function (a, b) {
  return a + b;
};

log(add2(3, 1));




// 화살표 함수
const add3 = (a, b) => a + b;
log(add3(3, 1));





console.clear();


// function isPrime (n) {
const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}


// log(isPrime(97));


console.clear();

const hi = (name, text = "hi") => {
  // log(text + ", " + name);
  log(`${text}, ${name}`);
  log(`${text}!`);
};

const hi2 = (name, text = "hi", lol) => {
  log(text + ", " + name, lol);
};

const hi3 = (name, lol, text = "hi") => {
  log(text + ", " + name, lol);
};

hi("cragon");


let test = "hello";

function scopeText() {
  let test = "hi";
  log(test);
}

log(test);
scopeText();
log(test);



console.clear();



// 복습!
// 변수 선언 방법

let var1 = 1; // mutable
const var2 = 1; // immutable (불변)





// 기본 타입(숫자, 문자, 불, null, undefined, 객체)

let num = 0x34;
let str = "string";
let bool = true;
let n = null;
let u;
let obj = {
  name: "이름",
  family: [
    {
      name: "이름",
      age: 12,
    },
    {
      name: "이름",
      age: 12,
    },
    {
      name: "이름",
      age: 12,
    },
    {
      name: "이름",
      age: 12,
    },
  ],
};

// log(obj.family[0].age);

// 연산자 (+, -, *, /, %, **, >, <, ==, ===, !=, !==, >=, <=, ||, &&)

// 연산에서의 자동 형변환
log('1' == 1);  // '1' == '1'
log('1' === 1);
log(null == 0); // false
log([] == null); // false
log([] == 0);  // true
// log(+'1' + 1);

console.clear();
log(true || true);
log(false || true);
log(false || false);

// log(prompt() || "falsy");
// log(prompt() && "truthy");


// if 문 (truthy, falsy)

// null 병합
// falsy: 0이랑 빈 문자열
let a;
log(a ?? 100);


console.clear();


// (여기 아래는 함수형 프로그래밍을 하는데 그리 중요한 내용은 아닙니다.)
// whlie, do while, for, break, continue
// switch~case

const arr = [1, 2, 3, 5, 5,67, 7, 8,8];

for (let i of arr) {
  log(i);
}


// 화살표 함수!!

console.clear();

// const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const add5 = (a, b, c, d, e) => a + b + c + d + e;
log(add5(1, 2, 3, 4, 5));

log(add(add(add(add(1, 2), 3), 4), 5));


// 이런 것도 됩니다

(function () {
  // do something
})();

log("hello");


const arr2 = [5, 4, 3, 2, 1];

for (let i in arr2) {
  log(i, arr2[i]);
}

log("***********")

for (let i of arr2) {
  log(i, arr2[i]);
}
