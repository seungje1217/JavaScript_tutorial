/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                  설정할때 호출되는 함수로 구성된 프로퍼티
 *                  예를들면 getter와 setter
 */
const tmdwp={
    name: '임승제',
    year: 1999,
};

console.log(Object.getOwnPropertyDescriptor(tmdwp, 'name'));
// { value: '임승제', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(tmdwp, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 *               수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면
 *                 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트
 *                   변경이 금지된다. 단, writable이 true인 경우
 *                   값 변경과 writable을 변경하는건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(tmdwp, 'name'));

console.log(Object.getOwnPropertyDescriptors(tmdwp));

const tmdwp2={
    name:'임승제',
    year:1999,

    get age(){
        return new Date().getFullYear()-this.year;
        // new Date().getFullYear() -> 현재 년도 알 수 있음
    },

    set age(age){
        this.year=new Date().getFullYear()-age;
    }
}
console.log(tmdwp2);
console.log(tmdwp2.age);

tmdwp2.age=22;
console.log(tmdwp2.age);
console.log(tmdwp2.year);

console.log(Object.getOwnPropertyDescriptor(tmdwp2, 'age'));

// tmdwp2.height=174;  // tmdwp2['height']=174;
// console.log(tmdwp2);


// Object.defineProperty -> 상세하게 값을 지정할 수 있다
Object.defineProperty(tmdwp2, 'height',{
    value: 174,
    writable: true,  // value 만 설정시 나머지 값 false
    enumerable: true,
    configurable: true,
})
console.log(tmdwp2);
console.log(Object.getOwnPropertyDescriptor(tmdwp2,'height'));

tmdwp2.height=180;
console.log(tmdwp2);

/**
 * Writable
 */
Object.defineProperty(tmdwp2,'height',{
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(tmdwp2,'height'));

console.log('--------------------------');
tmdwp2.height=174;
console.log(tmdwp2);  // writable false이기에 값 변경 안됨

/**
 * Enumerable
 */
console.log(Object.keys(tmdwp2));
for(let key in tmdwp2){
    console.log(key);
}

Object.defineProperty(tmdwp2,'name',{
    enumerable:false, // 열거가 불가능 해짐
});

console.log(Object.getOwnPropertyDescriptor(tmdwp2,'name'));
console.log('--------------------------');
console.log(Object.keys(tmdwp2));
console.log(tmdwp2.name);

/**
 * Configurable
 */
Object.defineProperty(tmdwp2,'height',{
    writable:true,
    configurable:false, // 값을 더 이상 변경 불가
});
console.log(Object.getOwnPropertyDescriptor(tmdwp2,'height'));

// Object.defineProperty(tmdwp2,'height',{
//     enumerable:false,
// });  // 변경 불가 -> 에러

Object.defineProperty(tmdwp2,'height',{
    value:190,
});
console.log(Object.getOwnPropertyDescriptor(tmdwp2,'height'));
// writable이 true면 configurable이 false여도 변경 가능

Object.defineProperty(tmdwp2,'height',{
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(tmdwp2,'height'));