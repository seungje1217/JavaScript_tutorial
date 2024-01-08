/**
 * 1. number
 * 2. string
 * 3. boolean
 * 4. undefined
 * 5. null
 * 6. symbol
 * 
 * 7. object (객체)
 */

// number 타입
const age=32;
const pi=3.14;
console.log(typeof age);
console.log(typeof pi);

// string 타입
const codeFactory='코드팩토리';
console.log(typeof codeFactory);

const ive ="'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 *  */ 
const jiwoo='송\n지\n우';
console.log(jiwoo);


const jiwoo2='송지우';
console.log(jiwoo2+' 바보');
console.log(`${jiwoo2} 바보`);


console.log('--------');
/**
 * boolean
 */
const isTrue=true;
console.log(typeof isTrue);

console.log('--------');

// null은 typeof 시 object로 나온다

/**
 * symbol 타입
 * 유일무이한 값을 생성 시 사용
 * 호출하여 사용
 */

const test1='1';
const test2='2';

console.log(test1==test2);

const symbol1=Symbol('1');
const symbol2=Symbol('1');

console.log(symbol1==symbol2);

/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져있다
 * key:value
 */

const dictionary={
    red:'빨간색',
    orange:'주황색',
    yellow:'노란색',
};
 
console.log(dictionary);
console.log(dictionary['red']);


/**
 * Array 타입
 * 
 * 값을 리스트로 나열하는 타입
 */

const iveMemembersArray=[
    '안유진',
    '장원영',
    '가을',
];

console.log(iveMemembersArray);
console.log(iveMemembersArray[0]);

iveMemembersArray[0]='임승제';
console.log(iveMemembersArray[0]);