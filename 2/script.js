const log = console.log;

// if문

let a = 3;
let b = 10;

// else if
// else

// Ctrl + /, Cmd + /
//// Shift + Alt + A

/* if (a > b) {
  console.log("a > b");
} else if (a == b) {
  console.log("a == b");
} else {
  console.log("a < b");
} */

// codition ? true : false

/* log(a > b ? "a > b" : "a <= b");
log(a > b ? "a > b" :
    a == b ? "a == b" :
    "a < b"); */


// truthy falsy (true한 값, false한 값)
/* const num = 0;

if (num) {
  log("truthy");
} else {
  log("falsy");
} */

// switch-case
/* const major = "EB";

switch (major) {
  case "EB":
    log("이비즈니스과");
  case "DC":
    log("디지털콘텐츠과");
    break;
  case "WP":
    log("웹프로그래밍과");
    break;
  case "HD":
    log("해킹방어과");
    break;
} */


// 객체
// 객체를 생성하는 방법 (생성자, 리터럴)
const obj = {
  "breakfast": "우양지당면탕 | 쌀밥 | 김치제육볶음 | 어묵볶음 | 취나물볶음 | 깍두기 | 모듬과일 | 2종시리얼 | 우유또는망고주스 | 보리과자 | 선식",
  "yummy lunch": "치킨마요덮밥 | 건새우시래기된장국 | 소떡소떡 | 메추리알감자조림 | 깍두기 | 만다린자몽주스",
  "yummy dinner": "돈가스&매운소스 | 보조밥 | 투움바파스타 | 양상추샐러드 | 오이초무침 | 포기김치 | 플리또",
};
// const obj2 = new Object();
// log(obj);
// log(obj.breakfast);
// log(obj.lunch);
// log(obj.dinner);

// obj.breakfast = "치킨마요덮밥 | 건새우시래기된장국 | 소떡소떡 | 메추리알감자조림 | 깍두기 | 만다린자몽주스";
// obj = {
//   breakfast: "우양지당면탕 | 쌀밥 | 김치제육볶음 | 어묵볶음 | 취나물볶음 | 깍두기 | 모듬과일 | 2종시리얼 | 우유또는망고주스 | 보리과자 | 선식",
//   lunch: "치킨마요덮밥 | 건새우시래기된장국 | 소떡소떡 | 메추리알감자조림 | 깍두기 | 만다린자몽주스",
//   dinner: "돈가스&매운소스 | 보조밥 | 투움바파스타 | 양상추샐러드 | 오이초무침 | 포기김치 | 플리또",
// };

// 접근 방법 두 가지 (. [""])
obj.covid19 = "covid19";
log(obj);
delete obj.covid19;
log(obj);

log(obj["yummy dinner"]);
delete obj["yummy dinner"];
log(obj);

log("breakfast" in obj);
log("covid19" in obj);

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
log(sum);

for (let key in obj) {
  log(key, obj[key]);
}


// 객체 만들어 보기
const obj2 = {
  innerObj: {
    innerInnerObj: {
      name: "cc",
    },
  },
};
log(obj2);

const idCard = {
  id: 328475,
  name: "이보성",
  birth: "20040429",
  addr: "부산광역시 기장군 ~~~",
  pic: "https://~~~~~~~~~~~",
  validate: {
    start: "2020.3.",
    end: "2023.2.",
  },
};

console.clear();

// 배열
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, '3', '4', 5, idCard];
// const a = {
//   a: 1,
//   b: 2,
//   c: '3',
//   d: '4',
//   e: 5,
//   f: idCard,
// };
log(arr1);
log(arr2);

log(arr1.length);
log(arr1[0]);
log(arr1[1]);
log(arr1[2]);
log(arr1[3]);
log(arr1[4]);

console.clear();
log(arr1);
arr1.push(10);
log(arr1);
log(arr1.pop());
log(arr1);

console.clear();

for (let i of arr1) {
  log(i);
}

const innerArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
log(innerArr);



// 배열과 객체의 활용 -> 가짜 DB

console.clear();
const db = [
  idCard,
  idCard,
  idCard,
  idCard,
  idCard,
  idCard,
  idCard,
  idCard,
  idCard,
];
log(db);

console.clear();

log(idCard);
idCard.name = "홍길동";
log(idCard);

const copy = { ...idCard };
copy.name = "이보성";
log(idCard);
log(copy);


