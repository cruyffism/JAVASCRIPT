//함수: 원하는 결과를 도출하기 위한 코드 집합
// 한 번 만든 함수는 재사용 가능

function bok(main){
   console.log(`${main} 볶음밥`); 
}

bok('새우');
bok('제육');

 function sum(x, y) {
     console.log(x + y);
 }
 sum(10, 20);

 // 인자: 함수를 호출할 때 전달하는 값 (함수의 입력값) = Arguments
 // 매개변수: 함수를 정의 할 때 작성하는 필요 인자 (함수의 입력 변수) = Parameter

 // 함수 내부에서 선언되는 변수
 function a() {
     const b = 10; // >> 함수 내부에서 선언 된 지역(local)변수, 그리고 변수 사용 범위가 중괄호 안으로 제한 됨!(조건문, 반복문에서도 마찬가지!)
     console.log(b);
 }
 a();

 // 이렇게해도 같은 결과 나옴 
 const d = 20; // >> 글로벌 변수 
 
 function c() {
   const d = 30;  
   console.log(d); 
 }
 c(); // > 내부 변수 30 출력
 console.log(d); // > 글로벌 변수 20출력 


 // 함수의 인자를 더 적게 전달하는 경우
 function sum(a, b = 0) {
     console.log(a + b);
 }
 sum(10); // > 하나의 값만 전달한 경우 b에는 전달 받은게 없어서 undefined가 호출 됨(nan은 Not a Number)
          // > nan이 안 나오게 하려면 b = 0 이런식으로 배개변수들의 기본값(Defalut Parameter)을 지정해주면 된다. 

// 함수의 인자를 더 많이 전달하는 경우
function sum(a, b = 0) {
     console.log(a + b);
 }
 sum(10, 20, 30); // 더 많이 넣었음에도 정상적으로 30이 출력 됨
                  // 그 이유는 arguments 때문이다. arguments는 정상적으로 세 숫자를 받아들여서 오류가 나지 않는
 
 // Rest Parameter: 지정한 인자를 제외한 나머지 인자들을 모두 배열로 묶어서 나타냄
 function print(a,b, ...rest) {
     console.log(a);
     console.log(b);
     console.log(rest);
 }

 print(10, 20, 30, 40, 50, 60, 70);

 //함수의 반환 값 >> return이라는 명령어를 사용해 특정 인자를 반환 받을 수 있다.
 // 함수가 리턴을 만나면 실행중인 함수를 종료하고 return 뒤에 값을 함수로 호출한 지점으로 반환!
 function sum(a, b = 0) {
     return a + b;
 }

 console.log(sum(10, 20));