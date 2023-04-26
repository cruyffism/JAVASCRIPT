//반복문: for of
//for of: 반복이 가능한 객체(배열, 문자열)에서 사용 가능한 반복문, 주어진 객체를 차례대로 순회하면서 주어진 코드를 실행!
// for of: 사용할 변수, of, 반복이 가능한 객체 순으로 지정

// 차례로 i값이 1, 2, 3이 된다! 
const arr = [1, 2, 3];

for (const i of arr ) {
    console.log(i);
}

//반복문: while문 >> 괄호안에 지정된 조건이 만족할 동안 내부 코드를 반복한다.

let i = 0;

while (i < 10) {
     console.log(i++);
}

// do while문 >> while과 비슷하지만 먼저 진입 후 조건문을 반복문의 시작위치가 아니라 끝에서 판별한다.
// 즉 무조건 처음 한 번은 실행을 한다! 

let k = 0;

do {
     console.log(k++);
} while (k < 10);  