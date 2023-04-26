//switch문: 일치하는 조건을 만나면 break를 실행하고 더 이상 나머지 조건을 수행 안 하고 빠져나온다.
// if와 다른 점 : 동일한 조건이 주어지고 그 조건에 값에 따라 다른 명령을 실행하게끔 한다.
// default: else처럼 가장 마지막에 위치해야하고 위에 나열 된 케이스 중에 참이 없을 경우 마지막에 실행 된다.
const number = 10;
switch (number) {
    case 1:
        console.log(number);
        break;
    case 2:
        console.log(number);
        break;
    default:
        console.log('아무것도 해당되지 않아요!');
}

//if문과 siwth문 비교 >> 모듈러 연산을 사용해서 홀짝을 구분하는 코드 만들기

const num = 20;

if (num % 2 == 0) {
    console.log('짝수!');
} else {
    console.log('홀수!');
}

switch (num % 2) {
    case 0:
        console.log('짝수');
        break;
    case 1:
        console.log('홀수');
        break;

}