/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value
 * 2. 객체는 copy by reference다
 */
let original='안녕하쇼';
let clone=original;

console.log(original);
console.log(clone);

clone+=' 임승제입니다.';
console.log('------------------------');
console.log(original);
console.log(clone);

let originalObj={
    name: '임승제',
    age: 26,
};
let cloneObj=originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('-----------------------------');

originalObj['age']='24';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj===cloneObj); // true

const wldn1={
    name: '송지우',
    age: 22,
}

const wldn2=wldn1;

const wldn3={
    name: '송지우',
    age: 22,
}

console.log(wldn1===wldn2); // true -> copy by reference
console.log(wldn1===wldn3); // false
console.log(wldn2===wldn3); // false

/**
 * Spread Operator
 */
const wldn4={
    ...wldn3,
};
console.log(wldn4);
console.log(wldn4===wldn3); // false -> copy by value (완전히 새로운 공간)

const wldn5={
    year: 2003,
    ...wldn3,
};
console.log(wldn5);

const wldn6={
    name: '송지우 바보',
    ...wldn3,
};
console.log(wldn6); // 이름을 바꾸고 덮어씌웠기 때문 -> 순서가 중요

const wldn7={
    ...wldn3,
    name: '송지우 바보',
};
console.log(wldn7);

const numbers=[1,3,5];
const numbers2=[
    //10,  // 10이 앞에 출력
    ...numbers,
    10, // 10이 뒤에 출력
];
console.log(numbers2);