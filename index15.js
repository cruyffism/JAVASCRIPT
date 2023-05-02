// DOM: html이나 xml 문서의 요소들을 계층적으로 표현해서 생성, 수정하고 조작이 가능하게끔 해주는 하나의 인터페이스
// 선택, 변경, 생성 세가지 분류로 설명 가능 


//선택

// //1. ID값을 사용해서 요소를 선택하려면 아래 메소드 사용
// const title = document.getElementById('title');
// console.log(title);

// //2. class 이름을 갖고 요소를 선택하는 법
// // ID와 다르게 class는 중복해서 여러개 사용이 가능해서 Elements이다!
// const title = document.getElementsByClassName('title_class');
// console.log(title);

//3. Tag 이름으로 요소를 선택하는 방법
// const title = document.getElementsByTagName('h2');
// console.log(title);

//4. querySelector(), querySelectorAll()
// 동일한 메소드로 ID, class, Tag 메소드 모두 사용 가능
// const title = document.querySelector('h2');
// console.log(title);

// const title = document.querySelector('#title');
// console.log(title);

// const title = document.querySelector('.title_class');
// console.log(title);

//querySelectorAll() >> 클래스를 사용하는 모든 요소들을 배열처럼 리턴 
// const title = document.querySelectorAll('.title_class');
// console.log(title);

//5. 선택한 요소의 속성값 or 스타일을 변경하는 방법. 

// const title = document.querySelector('h2');
// title.innerText = '안녕하세요!';
// title.style.color = 'blue';

// 6. 새로운 요소를 생성해서 html에 추가하는 방법
const title = document.createElement('h1');
const body = document.querySelector('body');

title.innerText = '새로운 친구에요!';
title.style.color = 'red';

body.appendChild(title);