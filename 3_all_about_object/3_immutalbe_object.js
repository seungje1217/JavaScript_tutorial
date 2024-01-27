const tmdwp={
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
console.log(tmdwp);

/**
 * Extensible -> 확장 가능 여부
 */
console.log(Object.isExtensible(tmdwp));

tmdwp['position']='adc';

console.log(tmdwp);

Object.preventExtensions(tmdwp); // 값 추가를 못하게함

console.log(Object.isExtensible(tmdwp));

tmdwp['home']='경기도';
console.log(tmdwp);

delete tmdwp['position']; // 값 삭제는 가능
console.log(tmdwp);

/**
 * Seal
 */
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

console.log(Object.isSealed(tmdwp2));

Object.seal(tmdwp2); 
// Seal를 추가 (봉인 안되게) === configurable false와 동일

console.log(Object.isSealed(tmdwp2));

tmdwp2['home']='경기도';
console.log(tmdwp2);

delete tmdwp2['name']; // 삭제도 안된다
console.log(tmdwp2);

Object.defineProperty(tmdwp2,'name',{
    value:'송지우',
});
console.log(Object.getOwnPropertyDescriptor(tmdwp2,'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const tmdwp3={
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
console.log(Object.isFrozen(tmdwp3));

Object.freeze(tmdwp3);

tmdwp3['home']='경기도';
console.log(tmdwp3);

delete tmdwp3['name'];
console.log(tmdwp3);

// Object.defineProperty(tmdwp3,'name',{
//     value:'송지우',
// });  // 변경 불가
console.log(Object.getOwnPropertyDescriptor(tmdwp3,'name'));

const tmdwp4={
    name: '임승제',
    year:1999,
    wldn:{
        name:'송지우',
        year:2003,
    },
};
Object.freeze(tmdwp4);

console.log(Object.isFrozen(tmdwp4));
console.log(Object.isFrozen(tmdwp4['wldn']));