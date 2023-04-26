//반복문: for문
// for 시작값, 반복의 조건식, 증감값

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 위 식을 다른 방식으로 표현 가능 
let i = 0

for (; i < 5;) {
    console.log(i++);
}


//반복문에 break를 사용하면 조건과 무관하게 사용자가 원할 때 빠져나오게 할 수 있다.
// 0부터6까지만 출력하는 코드
for (let i = 0; i<10; i++ ) {
    if(i === 7) {
        break;
    }

    console.log(i);
}

//continue: 현재 반복문을 종료하고 다음 반복문으로 넘어가는 것
// 7만 건너띄고 다 출력하게끔한다.
for (let i = 0; i<10; i++ ) {
    if(i === 7) {
        continue;
    }

    console.log(i);
}