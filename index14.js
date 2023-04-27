//구조 분해 할당 : 배열 또는 객체의 구조를 분해해서 그 값을 개별적인 변수에 담는 표현식

//배열의 구조 분해

// const arr = [1, 2, 3, 4, 5];

// const [one, two, three] = arr; // 우측 arr을 분해해서 좌측(원~쓰리)에 할당한다.

// console.log(one, two, three);

//객체의 구조 분해
const obj = {
    x: 10,
    y: 20,
};
const { x, y } = obj;
console.log(x, y);

const obj2 = {
    m: 10,
    z: 20,
};
const { m: hello, z: world } = obj2;
console.log(hello, world);

// 더 복잡한 구조 분해
const obj3 = {
    one: {
        two:{
            three: 'Bingo'
        },
    },
};

const {
    one: {
        two: { three },
    },
} = obj3;
console.log(three);

//함수의 인자를 받을 때 구조분해를 활용하는 법
const obj4 = {
    e: 10,
    f: 20,
};

function sum({e, f}) {
    return e + f;
}
console.log(sum(obj4));

// 구조분해를 활용하는 간단한 예제

//변수의 값을 교환 
let a = 123;
let b = 456;
[a, b] = [b, a];

// 구조 분해 할당에다가 미리 기본값 지정
const [q = 10, w = 20 ] = [10]

console.log(q, w); // w는 지정된 기본값을 할당 받아서 20 나옴

//중간값을 생략하고 구조 분해 할당하기
const arr = [1, 2, 3, 4, 5];
const [one, , threee, , five ] = arr;
console.log(one, threee, five);

// 나머지 요소를 나머지 인자 구문을 이용해서 한 번에 가져오기
const arr2 = [1, 2, 3, 4, 5]; 
const [onee, two, ...others] =arr2;
console.log(onee, two, others);