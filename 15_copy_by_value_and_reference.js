/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value 이다.
 * 2. 객체는 copy by reference 이다.
 */

const a = 1;
const b = a;
console.log(a, b);
console.log(a === b);

const c = { a: 1 };
const d = c;
console.log(c, d);
console.log(c === d);

const e = [1, 2, 3];