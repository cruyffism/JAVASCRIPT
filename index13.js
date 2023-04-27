//객체

//for in: for of의 객체버전!(객체의 순환)
// const obj = {
//     x: 1,
//     y: 2,
//     z: 3,
// };

// for (Key in obj) {
//    console.log(key);
// }

//객체를 축약해서 표현하는 방법
const name = '이도해';
const country = 'KR';

const user = {
    name,
    country,
};
console.log(user);

// 메소드 축약 표현 
// 객체의 프로퍼티로 선언이 된 함수 = 메소드

const obj = {
    greeting: function () {
        console.log('Hi!');
    },
}; 
obj.greeting();

//객체의 프로퍼티를 열거하는데 사용되는 메소드

// keys는 정적 메소드 ! (객체 생성 안하고도 불러내서 사용 가능)
const obj2 = {
    x: 10,
    y: 20,
    z: 30,
};
console.log(Object.keys(obj2));

//values: 오브젝트가 갖고있는 값들을 배열로 반환

const obj3 = {
    x: 11,
    y: 22,
    z: 33,
};
console.log(Object.values(obj3));
 
//entries: 각각의 프로퍼티(키와 값의 쌍)를 하나로 묶어서 개별적 요소로 반환
const obj4 = {
    x: 5,
    y: 15,
    z: 25,
};
console.log(Object.entries(obj4));
