//원시 데이터 타입 : 객체가 아니면서 메서드도 가지지 않는 데이터
//원시 데이터 타입 : 메모리에 값을 바로 저장 
//원시 데이터 타입 : string, number, bigint, boolean, undefined, null, symbol

const number = 123;
console.log(typeof number);

//bigint: 숫자데이터 타입으로 표현할 수 있는 범위를 넘어서는, 즉 아주 작은 숫자나 아주 큰 숫자를 표현 시 사용
// const number = 123n; >> bigint는 뒤에 n을 붙이면 됨
// console.log(typeof number);

//스트링 따옴표 3가지 >> '' ""  ``(백틱)
const name = '이도해';
console.log(typeof name);
const age = 20;
const job = '개발자';
const msg2 = `저는 ${job}이고, ${age}살 입니다.`; //백틱 사용한 문구 
console.log(msg2);

//boolean >> 참 or 거짓 둘 중 하나만 가질 수 있음
const isTrue = true;
console.log(typeof isTrue)

//null: 값이 아예 존재하지 않는다는 것을 나타냄 

//undefined: 값이 아직 지정되지 않았음을 나타냄
let hello;
console.log(hello);