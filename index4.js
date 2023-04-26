 // 연산자

 //산술 연산자: +, -, *, /, 모듈러(나머지 연산자), **(거듭제곱)
 console.log(10%3); //모듈러
 console.log(2**3); //거듭제곱

 //증감 연산자: ++(1 증가), --(1 감소)
 let number = 10;
 number ++;
 console.log(number);

 //비교 연산자: >, <, >=, <=, !==, ==(추상비교), ===(엄격비교)
const x = 10;
const y = 20;
console.log(x<y);
console.log(x===y);
console.log(x!==y);

//논리 연산자: &&(and), ||(or), !(not)
const v = 2 < 3;
const w = 30 > 50;
console.log(v&&w);
console.log(v||w);
console.log(!v);

//삼항 연산자: 조건의 결과가 참인지 것인지에 따라 다른 결과값을  실행
//삼항 연산자 작성법 : 조건 ? 참일 때 실행 될 부분 : 거짓 일 때 실행 될 부분
console.log(2<3 ? '참' : '거짓');

//널리쉬 연산자: 널병합 연산자라고 부르기도 함, ??을 사용
//Nullish: 여러개의 피연산자 중 값이 확정되어 있는 변수를 찾음
const a = undefined;
const b = null;
const c = '이도해'; 
console.log(a ?? b ?? c); // a b c 중에 값이 확정 된 c 즉 이도해가 출력된다.

//비트 연산자 >> 거의 안 사용함 
//종류: &, |, ~, ^, <<, >> 

//대입 연산자
//복합 대입 연산자: +=, -=, *=, /=, %=, **=
let num = 10; 
num += 2; // num = num+2랑 같은의미
console.log(num);

//전개 연산자(구문): 반복이 가능한 어떤 객체(배열 혹은 문자열)에 적용할 수 있는 문법의 한 종류
const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];
const newnumbers = [...numbers, ...numbers2];

console.log(...numbers); // 인덱스없이 출력됨
console.log(numbers); //기존 방식은 배열로 출력됨
console.log(newnumbers); // 많이 쓰이는 연산자



















