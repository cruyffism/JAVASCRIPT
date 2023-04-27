//함수의 표현식: 함수를 표현식으로 정의하는 것 

// function sum(a, b) {
//     console.log(a + b);
// }

//위 함수를 함수의 표현식으로 코딩한다면
const sum = function (a, b) {
    console.log(a + b);
};

sum(10, 20);



//화살표 함수 >> 함수의 표현식보다 더 심플한 방법으로 표현

// 명령어가 한 줄일때 중괄호를 생략하면 return이라는 명령문을 생략 할 수 있다.
// 즉 중괄호가 없다면 리턴이 보이지 않더라도 자동으로 리턴이 들어간 것
const sum1 = (a, b) => a + b;
console.log(sum1(10,20));

//반면에 중괄호가 있다면 반드시 리턴을 작성해주어야 한다.
const sum2 = (a, b) => {
    return a + b;
};
console.log(sum2(20,30));

// 기존 함수를 화살표 함수로 바꾸기! 

// function hello() {
//     console.log('Hello!');
//     console.log('World!');
// }

const Hello = () => {
    console.log('Hello!');
    console.log('World!');
};
Hello();

// function sum(a, b) {
//     return a + b;
// }

const sum4 = (a, b) => {
    return a + b;
};
console.log(sum4(10, 20));

// function greeting(user) {
//     console.log(`Hello, ${user}!`);
// }

const greeting = (user) => {
    console.log(`Hello, ${user}!`);
}
greeting('이도해');
