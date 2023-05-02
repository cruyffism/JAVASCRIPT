// 이벤트: 동작이나 상태의 사건이 발생하는 것을 의미
// 자바스크립트에서 이벤트에 대한 반응을 지정하기 위해선 해당 이벤트를 감지할수있는 이벤트 리스너를사용해서 이벤트 핸들러를 지정해야함
// 이 과정을 이벤트 리스너를 등록한다고 부르자
const button = document.querySelector('button');
const removeButton = document.querySelector('.remove');

function handler(event) {
    console.log('♥');
}

function removeHandler(event){
    button.removeEventListener('click', handler); //> 이벤트 삭제하는 거 
}

button.addEventListener('click', handler);
removeButton.addEventListener('click', removeHandler);
