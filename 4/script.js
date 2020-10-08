const log = console.log;

// 화살표 함수 복습
















// 왜 자바스크립트인가?

// 함수형 프로그래밍을 할 수 있는 조건




// 1급 함수


// 순수 함수




// 재귀 함수



// 커링




// 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기
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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const len = 5;

log(f1(arr, len)); // 165
log(
  arr
    .filter(x => x % 2)
    .slice(0, len)
    .map(x => x ** 2)
    .reduce((acc, val) => acc + val)
);


// map: 매핑!








// reduce: 접는 거








// filter: 참인 것만 돌려 줌
