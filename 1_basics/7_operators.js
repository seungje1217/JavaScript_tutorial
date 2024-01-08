// 연산자

/**
 * 산술 연산자
 * 
 * 덧셈
 * 뺄셈
 * 곱셈
 * 나눗셈
 * 나머지
 */

console.log(10+10);

console.log('------------------');


/**
 * 증가와 감소
 */

let number=1;
number ++;
console.log(number);
console.log('------------------');

/**
 * 연산자의 위치
 */

let result=1;
console.log(result);

result=number ++;
console.log(result, number);

result=number --;
console.log(result, number);

result= ++number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용
 */

let sample='99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample=true;
console.log(+sample);
console.log(typeof +sample);

sample=false;
console.log(+sample);
console.log(typeof +sample);


sample='임승제';
console.log(+sample);
console.log(typeof +sample);


/**
 * 할당 연산자
 */

number=100;
number+=10;

console.log(number);

/**
 * 비교연산자
 */

console.log(5==5);
console.log(5=='5'); // 아까 +붙인거랑 같은 원리
console.log(0=='');

console.log(5===5); // ===은 타입까지 비교함
console.log(5==='5');

/**
 * 삼항 조건 연산자
 */

console.log(10>0 ? '10이 0보다 크다' : '10이 0보다 작다');
// true 반환은 : 왼쪽 // false반환은 : 오른쪽

/**
 * 논리연산자
 */

console.log(true&&true);
console.log(true||false);

/** 
 * 단축평가
 * 
 * && 사용 시 좌측이 true면 우측 값 반환
 * && 사용 시 좌측이 false면 좌측 값 반환
 * 
 * || 사용 시 좌측이 true면 좌측 값 반환
 * || 사용 시 좌측이 false면 우측 값 반환
 */
console.log('----------------------')
console.log(true || '송지우');
console.log(false || '송지우');
console.log(true && '송지우');

console.log(true && true && '송지우');
console.log(true && false && '송지우');


/**
 * null 연산자
 */

let name;
console.log(name);

name=name ?? '임승제';  
// ?? 는 왼쪽 변수가 null이거나 undefined일때 오른쪽 값 반환
console.log(name);

name=name ?? '송지우';
console.log(name);  // null이거나 undefined가 아니기에 위 출력