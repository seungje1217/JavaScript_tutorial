// 상속
class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

// 상속받기 : class 새로운class extends 상속받을class 이름
class FemaleIdolModel extends IdolModel{
    dance(){
        //return '여자 아이돌이 춤을 춥니다.';
        return `${this.name} 춤을 춥니다.`
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const wldn = new FemaleIdolModel('송지우',2003);
console.log(wldn);

const tmdwp = new MaleIdolModel('임승제',1999);
console.log(tmdwp);

console.log(wldn.dance());
console.log(wldn.name);

// 부모가 자식 클래스를 상속받지는 못한다

console.log(wldn instanceof IdolModel);
console.log(wldn instanceof FemaleIdolModel);
console.log(wldn instanceof MaleIdolModel);
