// class Student{
//     name;
//     year;
//     static home='Korea'; 
//     // class에 직접 귀속 -> new 키워드 사용할 필요없음

//     constructor(name, year){
//         this.name=name;
//         this.year=year;
//     }
// }

// const tmdwp=new Student('임승제', 1999);
// console.log(tmdwp);

// console.log(Student.home);

/**
 * factory constructor
 */

class Student{
    name;
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    static fromObject(object){
        return new Student(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new Student(
            list[0],
            list[1],
        );
    }
}
const tmdwp2=Student.fromObject({
    name: '임승제',
    year: 1999,
});
console.log(tmdwp2);

const wldn=Student.fromList([
    '송지우',
    2003,
    
]);
console.log(wldn);