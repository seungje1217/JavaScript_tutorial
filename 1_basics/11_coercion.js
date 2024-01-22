/**
 * 타입 변환
 * 
 * 1. 명시적
 * 2. 암묵적
 */

let age=26;

// 명시적
let stringAge=age.toString();
console.log(typeof stringAge, stringAge);

let test=age+''; // 숫자 + 문자 = 문자 (string)
console.log(typeof test, test);

console.log('98'+2); // 982 -> string으로 생각함
console.log('98'*2); // 196 -> string에는 *가 없기에 int로 생각


/**
 * 명시적 변환 몇가지 더
 */

console.log(typeof (99).toString());

// 숫자 타입 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1',+'1'); 
// string에 숫자 들어있는 상태에서 +를 붙으면 int

console.log('--------------');

/**
 * Boolean 타입으로의 변환
 */

console.log(!!'x');  // string에 값이 있는 경우 True
console.log(!!''); // string에 값이 없음

console.log(!!0); // string에 값이 없으므로 False
console.log(!!'0'); // string ('')에 값이 있으므로 True

// undefined와 null -> False

console.log(!!{}); // object는 값이 있던 없던 True
console.log(!![]); // array 또한 값이 있던 없던 True

/**
 * 1. 아무 글자도 없는 String
 * 2. 값이 없는 경우
 * 3. 0
 * 
 * 모두 false를 반환
 */