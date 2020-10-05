const log = console.log;

// 이항연산자
log("Hello " + "world");
log(2 + 3);
log(2 - 3);
log(2 * 3);
log(2 / 3);
log(2 % 3);
log(2 ** 3);

const x = 123;

log(+x);
log(-x);

// 자동형변환
log('1' + '2'); // 12
log('1' + 2); // '1' + '2' => '12'
log(1 + '2'); // '1' + '2' => '12'

log((2 + 2) + '1'); // 4 + '1' => '4' + '1' => '41'

log(+"2353466")
log(+"aaaaaaaaaa")

log(+'1' + +'2'); // 3

log("Ba" + +"a" + "A");
log("B" + ("a"+ +"a" + "a").toLowerCase());

let a = 3;
log(a); // 3
a++;
log(a); // 4
log(++a); // 5
log(a--); // 5
log(a++); // 4

// >> << & | + ^
// log((2 << 31) - 1);
