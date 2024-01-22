// for loops

for (let i=0; i<10; i++){
    console.log(i);
}

// *을 이용하여 6x6의 정사각형을 출력

let square='';

for (let i=0;i<6;i++){
    for (let j=0;j<6;j++){
        square+='*';
    }
    square+='\n';
}

console.log(square);
console.log('-'.repeat(6));

// for... in loops
// object -> key 값을 가져옴
const tmdwp={
    name:'임승제',
    year:1999,
}
for (let key in tmdwp){
    console.log(key);
}

// array -> 인덱스를 가져옴
const school = ['송지우','전종찬','이병화'];

for (let key in school){
    console.log(key);
    console.log(`${key}:${school[key]}`);
}

console.log('------------');

// for...of loops
// 인덱스 값이 아닌 값이 입력된다
for (let value of school){
    console.log(value);
}

console.log('------------');

// while
let number=0;

while(number<10){
    number ++;
}

console.log(number);

// do while
number=0;

do{   // 먼저 코드 실행 후 조건 판단
    number ++;
}while(number<10);

console.log(number);

// break

console.log('---------------');

for (let i=0;i<10;i++){
    if (i===5){
        break;
    }
    console.log(i);
}

console.log('---------------');

number=0;

while(number<10){
    if(number===5){
        break;
    }
    number ++;
    console.log(number);
}

// continue

console.log('---------------');

for (let i=0;i<10;i++){
    if (i===5){
        continue;  // 현재 진행하는거 스킵
    }
    console.log(i);
}

console.log('---------------');

number=0;

while(number<10){
    number ++;
    
    if(number===5){
        continue;
    }
    
    console.log(number);
}