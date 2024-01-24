// key : value pair
let tmdwp={
    name: '임승제',
    age: 26,
    dance: function(){
        return `${this.name}가 춤을 춥니다.`;
        // this는 현재 객체를 가르킴 (tmdwp)
    }
};

console.log(tmdwp);
console.log(tmdwp.name);

const key='name';
console.log(tmdwp[key]);

console.log(tmdwp.dance());

const nameKey='name';
const nameValue='임승제';

const ageKey='age';
const ageValue=26;

const tmdwp2={
    [nameKey]:nameValue,
    [ageKey]:ageValue,
    dance: function(){
        return `${this.name}가 춤을 춥니다.`;
    }
}
console.log(tmdwp2);
console.log(tmdwp2.dance());

tmdwp2['age']=22;
console.log(tmdwp2);

// 존재하지 않는 키를 삽입 시 새로 생성
tmdwp2['engName']='Lim SeungJe';
console.log(tmdwp2);

delete tmdwp2['engName'];
console.log(tmdwp2);

/**
 * 객체의 특징
 * 
 * 1. const로 선언 경우 객체 자페를 변경 할 수는 없다.
 * 2. 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wldn={
    name: '송지우',
    age:22,
}
console.log(wldn);

// wldn={};

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wldn));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wldn));

const name='임승제';

const tmdwp3={
    name,
};
console.log(tmdwp3);