class Student{
    name;
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    /**
     * 1. 데이터를 가공해서 새로운 데이터를 반환할때
     * 2. private한 값을 반환할때
     */
    get nameAndYear(){ // 함수가 아님
        return `${this.name}-${this.year}`;
    }

    set setName(name){
        this.name=name;
    }
}

const tmdwp=new Student('임승제',1999);
console.log(tmdwp);
console.log(tmdwp.nameAndYear);

tmdwp.setName='송지우';
console.log(tmdwp);

class Student2{
    #name; // private한 값 사용시 # 추가
    year;

    constructor(name,year){
        this.#name=name;
        this.year=year;
    }
    get name(){
        return this.#name;
    }
    set name(name){
        this.#name=name;
    }
}

const tmdwp2=new Student2('임승제',1999);
console.log(tmdwp2); // name이 private한 값이라 year만 출력됨
console.log(tmdwp2.name); // getter를 실행해주면 private한 값 출력가능

tmdwp2.name='송지우';
console.log(tmdwp2.name);