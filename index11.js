//문자열 메소드

//toUpperCase메소드: 문자열을 모두 대문자로 변환
//tolowerCase메소드: 문자열을 모두 소문자로 변환
const str = 'Hello World!';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//trim: 문자열의 앞/뒤 공백을 제거하는 메소드
//trimStart: 문자열의 앞쪽 공백 제거
//trimEnd: 문자열의 뒤쪽 공백 제거

const str1 = '              haha  ';
console.log(str1.trim());

//기존의 문자열을 가공해서 새로운 문자열(원본객체는 훼손 안 하고)을 생성하는 메소드

//repeat: 지정 문자열을 반복
const str2 = 'Hello';
console.log(str2.repeat(3));

//padStart: 지정한 길이만큼 앞쪽에 문자열을  추가
//padEnd: 지정한 길이만큼 뒤쪽에 문자열을  추가
console.log(str2.padStart(10, '_'));

//indexOf: 문자열에서 특정 부분을 검색하는 메소드(검색 키워드의 시작 부분 반환)
const str3 = '안녕하세요. 이룸코딩입니다!';
console.log(str3.indexOf('이룸'));

//icludes: 주어진 키워드 값을 문자열에서 검색해서 찾으면 true 못 찾으면 false
const str4 = '안녕하세요. 이룸코딩입니다!';
console.log(str4.includes('이룸'));
console.log(str4.includes('한국'));

//startsWith, endsWith: 문자열이 주어진 문자열로 시작하거나 끝나는지 여부를 검색해주는 메소드
const str5 = '안녕하세요. 이룸코딩입니다!';
console.log(str5.startsWith('안녕'));
console.log(str5.endsWith('안녕'));

//replace: 주어진 문자열로 교체 
//replaceAll: 주어진 문자열 전부를 교체 
const str6 = '안녕하세요. 이룸코딩입니다!';
console.log(str6.replace('이룸코딩', '개발자 이도해'));

//subString: 주어진 시작~종료 이전에 인덱스까지 새로운 부분 문자열로 반환
const str7 = '안녕하세요. 이룸코딩입니다!';
console.log(str7.substring(0,5));

//split: 문자열을 주어진 구분자를 기준으로 잘라서 그 결과를 배열로 반환하는 메소드
const str8 = '월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일';
console.log(str8.split(','));

//slice: 주어진 인자에 따라 문자열의 일부를 추출해서 새로운 문자열을 반환한다.
// 그리고 시작위치를 의미하는 필수 인자 한 개랑 종료위치를 의미하는 선택적 인자 한 개를 가질 수 있다.
const str9 = 'Hello Wolrd!';
console.log(str9.slice(3, 5));
console.log(str9.slice(3));
console.log(str9.slice(-3));

