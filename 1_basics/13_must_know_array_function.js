/**
 * Array function
 */
let student=[
    '임승제',
    '송지우',
    '이현규',
    '이정원', 
];
console.log(student);

// push
// student.push('전종찬'); // 맨 끝에 추가
console.log(student.push('전종찬')); 
// push (맨 끝)를 하고 나서의 길이 반환
console.log(student);

console.log('----------------------');

// pop -> 마지막 값을 삭제한 후 그 값을 반환
console.log(student.pop());
console.log(student);

console.log('------------------');

// shift -> 첫번째 값을 삭제 후 그 값을 반환
console.log(student.shift());
console.log(student);

console.log('------------------------');

// unshift -> 첫번째에 값을 추가 후 새로 생성된 길이 반환
console.log(student.unshift('임승제'));
console.log(student);

console.log(student.splice(0, 2)) 
// 0번 인덱스 부터 총 2개의 값들을 삭제 후 그 값을 반환
console.log(student);

console.log('=========================');

let students=[
    '임승제',
    '송지우',
    '이현규',
    '이정원', 
    '이병화',
];

console.log(students);

// concat() -> 원래 array는 변경 안함
console.log(students.concat('김종찬'));
console.log(students);

// slice()
console.log(students.slice(0,3));
// 0번 인덱스 부터 총 3개의 값들을 삭제 후 반환 -> 원래 array 변경x
console.log(students);

console.log('--------------------------');

// spread operator
let students2=[
    ...students, 
    // ...를 안넣으면 리스트안에 리스트가 들어감
    // [ [ '임승제' ] ]  이런식

    // students === students2 하면 false가 출력
    // 완전히 다른 값이기 떄문
];
console.log(students2);

// join()
console.log(students.join()); // string 값으로 출력
console.log(students.join('/'));
console.log(students.join(', '));

// sort() -> 오름차순 정렬
students.sort();
console.log(students); 

console.log(students.reverse()); // 반대로 (내림차순) 정렬

let numbers=[
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a,b를 비교했을때
// 1. a를 b보다 나중에 정렬하려면 0보다 큰 숫자를 반환
// 2. a를 b보다 먼저 정렬하려면 0보다 작은 숫자를 반환
// 3. 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b)=>{
    return a>b ? 1 : -1; // true 반환은 오른쪽 (1) false는 왼쪽(-1)

/**a를 1이라고 하고 b를 3이라고 하면 a는 b보다 크지 않기에 -1을 반환
 * 위에 주석 중 0보다 작은 숫자를 반환했기에 a를 b보다 먼저 정렬
 *  */

});
console.log(numbers);

numbers.sort((a,b)=> a>b ? -1:1);
console.log(numbers);

console.log('-----------------------------');

// map() -> array 변경 (원래 값 변경x)
console.log(students.map((x) => `학생: ${x}`));

console.log(students.map((x) => {
    if(x==='임승제'){
        return `천재: ${x}`;
    }else{
        return x; 
    }
}));

console.log(students);

// filter()
numbers=[1,8,7,6,3];
console.log(numbers.filter((x)=>x%2===0));
// => 뒤에 true를 넣으면 모두 반환, false 넣으면 []만 반환

// find() -> 가장 첫번째의 값만 반환함
console.log(numbers.find((x)=> x%2===0));

// findIndex() -> find에서의 값 인덱스가 반환
console.log(numbers.findIndex((x)=> x%2===0));

// reduce()
console.log(numbers.reduce((p,n)=>p+n,0));