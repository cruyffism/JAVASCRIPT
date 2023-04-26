//조건문

//if문
// 거짓일 때 동작도 지정하고 싶다면 else문 사용
//else if는 if와 else 사이에 작성! 하나의 조건문에서 여러 번 사용 가능

const a = 10;
const b = 20;
const c = 20;

//if도 거짓이고 else if도 거짓이면 else문이 실행된다.
if(a > b) {
    console.log('a가 더 큽니다!');
} else if (b !== c) {
    console.log('b랑 c가 같습니다!');
} else if (b === c) {
    console.log('테스트!!!'); 
} else { 
    console.log('여기는 언제 출력될까요?');
}

// if(a > b) {
//     console.log('a가 더 작아요!');
// } else {
//     console.log('거짓!');
// }


// if(a<b) {
//     console.log('a가 더 작아요!');

// }


 