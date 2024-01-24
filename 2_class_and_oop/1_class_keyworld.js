/**
 * 클래스 : 이름, 나이 -> 일종의 틀
 * 객체 : 임승제, 26
 * 
 * 클래스는 일반적으로 대문자로 시작
 */
// class Student{
//     name='임승제';
//     year='1999';
// }

class Student{
    name; // constructor안에 있으면 굳이 안넣어도 된다
    year;

    constructor(name, year){
        this.name=name; // 실제 입력받은 값
        this.year=year;
    }

    sayName(){ // (){}로 인해 함수로 인식 -> 매소드
        return `ㅎㅇㅎㅇ ${this.name}`;
    }
}
// constructor - 생성자

const tmdwp= new Student('임승제','1999');
console.log(tmdwp); // class 이름과 객체가 나옴

const wldn=new Student('송지우', '2003');
console.log(wldn);

const wjddnjs=new Student('이정원','1999');
console.log(wjddnjs);

console.log(tmdwp.name); // 실제 객체처럼 사용 가능

console.log(tmdwp.sayName());

console.log(typeof Student); // 함수로 인식
console.log(typeof tmdwp); // 객체 (클래스로 생성한 Object)
