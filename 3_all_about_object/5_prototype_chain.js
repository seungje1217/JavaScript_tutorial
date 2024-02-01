const testObj={};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);

// console.dir(IdolModel.prototype,{
//     showHidden:true,
// });

// circular reference -> 서로가 서로를 참조하고 있는 상태
console.log(IdolModel.prototype.constructor===IdolModel);
console.log(IdolModel.prototype.constructor.prototype===IdolModel.prototype);

const wldn=new IdolModel('송지우',2003);

console.log(wldn.__proto__);
console.log(wldn.__proto__===IdolModel.prototype);

console.log(testObj.__proto__===Object.prototype);

console.log(IdolModel.__proto__===Function.prototype);
console.log(Function.prototype.__proto__===Object.prototype);
console.log(IdolModel.prototype.__proto__===Object.prototype);

console.log(wldn.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${this.name}가 인사를 합니다.`;
    }
}

const wldn2=new IdolModel2('송지우',2003);
const tmdwp2=new IdolModel2('임승제',1999);

console.log(wldn2.sayHello());
console.log(tmdwp2.sayHello());
console.log(wldn2.sayHello===tmdwp2.sayHello);

console.log(wldn2.hasOwnProperty('sayHello')); 
// true -> 고유값

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function () {
    return `${this.name}가 인사를 합니다.`;
}

const wldn3=new IdolModel3('송지우',2003);
const tmdwp3=new IdolModel3('임승제',1999);

console.log(wldn3.sayHello());

console.log(wldn3.sayHello===tmdwp3.sayHello);
console.log(wldn3.hasOwnProperty('sayHello'));
// false -> 상속 받은 값

IdolModel3.sayStaticHello=function(){
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return '안녕하세요 저는 인스턴스 메서드입니다!';
    }
}
IdolModel4.prototype.sayHello = function () {
    return '안녕하세요 저는 prototype 메서드입니다!';
}

const wldn4=new IdolModel4('송지우',2003);
console.log(wldn4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name} 인사를 합니다.`;
} // 모두 상속 받기에 효율적으로 관리

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}가 춤을 춥니다.`;
    }
}
const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__===IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);
// getPrototypeOf(x) -> x의 .__proto__

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello());

// setPrototypeOf -> 프로토타입을 바꿈
Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor===FemaleIdolModel);
// 원래와 연결이 아예 끊김
console.log(ray.constructor===IdolModel);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

FemaleIdolModel.prototype=IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);