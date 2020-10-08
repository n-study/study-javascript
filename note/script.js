const log = console.log;

// Identity
const I = a => a;

const K = a => b => a;
log(K(1)(2));

const KI = a => b => b;
log(KI(1)(2));

const C = f => a => b => f(b)(a);
log(C(K)(1)(2));
log(KI(1)(2));

const T = K;
const F = KI;
log(K, T);

T.inspect = () => "T / K";
F.inspect = () => "F / KI";

const not = p => p("F")("T");
log(not(F));
log(not(KI));
log(C(T)(1)(2) === KI(1)(2));

const and = p => q => p(q)(p);
log(and(T)(F) === K(F)(T));
log(and(F)(F) === KI(F)(F));
log(and(F)(T) === KI(T)(F));

const zero = f => a => a;
const once = f => a => f(a);
const twice = f => a => f(f(a));

log(once(I)(2));
log(zero(not)(F).inspect());
log(F(not)(T).inspect());
log(K(T)(T).inspect());

const succ = n => f => a => f(n(f)(a));
log(succ(zero));
// log(succ(once)(not)(T));
// log(not((once)(not)(T)));
const jsnum = n => n(x => x + 1)(0);
log(jsnum(succ(once)));
log(jsnum(succ(succ(once))));

