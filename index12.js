//배열 메소드

// 배열 요소를 끝에 추가하거나 삭제하는 메소드(push, pop)
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.push(7, 8);
arr.pop(); // 맨 뒤에 인자를 꺼내서 삭제!
console.log(arr);

// 배열 요소를 앞에 추가하거나 삭제하는 메소드(unshift, shift)
const arr2 = [1, 2, 3, 4, 5];
arr2.unshift(10, 20, 30);
arr2.shift();
console.log(arr2);

//forEach: 주어진 함수를 배열요소에 각각 실행하는 메소드
const arr3 = [1, 2, 3, 4, 5];

function print(number, index) {
    console.log(`${index} 위치의 요소: ${number}`);  
}
arr3.forEach(print);

arr3.forEach((number, index) => {
    console.log(`${index} 위치의 요소: ${number}`);
});

//map: forEach와 흡사하지만 새로운 배열을 반환 할 수있다.
// 처리한 결과를 저장하려면 map 사용!
const arr4 = [1, 2, 3, 4, 5];
const newArr = arr4.map((number, index) => number +1);
console.log(newArr)

//배열 요소를 검색하는 메소드

// includes
const arr5 = ['hello', 'world'];
console.log(arr5.includes('hello'));
console.log(arr5.includes('zo'));

//find: 주어진 판별함수를 만족하는 첫 번째 요소의 값을 반환
const arr6 = [1, 2, 3, 4, 5];
console.log(arr6.find((number) => number > 3)); //첫번째 값만 나오기에 4만 나온다!

//findIndex: 주어진 판별함수를 만족하는 첫번째 요소의 인덱스를 리턴!
const arr7 = [1, 2, 3, 4, 5];
console.log(arr7.findIndex((number) => number > 3));

//배열의 요소를 수정하는 메소드

//fill: 배열을 지정한 값으로 채워준다. 원본 배열 그 자체를 수정한다!
const arr8 = [1, 2, 3, 4, 5];
arr8.fill(10);
console.log(arr8)

const arr9 = [1, 2, 3, 4, 5];
arr9.fill(10,3);
console.log(arr9)

//slice: 배열의 복사본을 조각내서 새로운 배열로 반환
const arr10 = [1, 2, 3, 4, 5];
console.log(arr10.slice(2));

const arr11 = [1, 2, 3, 4, 5];
console.log(arr11.slice(2, 4)); // 2~3번 인덱스 값 반환

//splice: 필수 인자로 시작 인덱스를 갖고 선택적인 인자로 배열에서 제거할 요소화 추가할 요소를 정할 수 있다.
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(2);
console.log(arr12); 

const arr13 = [1, 2, 3, 4, 5];
arr13.splice(2, 1); //2번 인덱스에서 시작해서 1개의 요소만 제거
console.log(arr13);

const arr14 = [1, 2, 3, 4, 5];
arr14.splice(2, 1, 999); //제거하고 새로운 요소 추가 
console.log(arr14);

//joinL: 배열의 모든 요소를 이어 붙여서 하나의 문자열로 반환
const arr15 = ['hello', 'world', 'hi', 'wow' ];
console.log(arr15.join());

//concat(): 인자로 주어진 배열이나 값들을 기존꺼와 합해서 새로운 배열(혹은 값)로 반한!
const arr16 = ['hello', 'world', 'hi', 'wow' ];
const numbers = [123, 456];
console.log(arr16.concat(numbers));

//filter: 주어진 판별함수의 결과 값이 참인 것만 모아서 새로운 배열로 반환
const arr17= [1, 2, 3, 4, 5];
console.log(arr17.filter((number) => number > 3));

//reduce: 배열에 각 요소에 대해서 주어진 리듀서 함수를 실행한 다음에 하나의 값을 반환!
const arr18= [1, 2, 3, 4, 5];
const reducer = (acc, value) => acc + value; //리듀서는 누산기와 현재값을 가진다!
console.log(arr18.reduce(reducer));

const arr19= [1, 2, 3, 4, 5];
const reducer1 = (acc, value) => acc + value; // 10부터 시작해서 더함
console.log(arr19.reduce(reducer, 10));
