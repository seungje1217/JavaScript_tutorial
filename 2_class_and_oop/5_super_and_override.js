class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    // 노래 / 춤
    part;

    constructor(name,year,part){
        super(name, year); // 기존 생성자 부모 클래스 상속
        this.part=part;
    }

    sayHello(){
        //return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
        return `${super.sayHello()} ${this.part}를 맡고있습니다.`
    } 
}

const wldn = new FemaleIdolModel('송지우',2003,'뚠뚜');
console.log(wldn);

const tmdwp = new IdolModel('임승제',1999,'보컬');
console.log(tmdwp.sayHello());

console.log(wldn.sayHello());