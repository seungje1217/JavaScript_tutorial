function IdolModel(name,year){
    //console.log(new.target);
    if(!new.target){ // new.target이 undefined일때
        return new IdolModel(name,year);
    }
    this.name=name;
    this.year=year;

    this.dance=function(){
        return `${this.name} 춤을 춥니다.`;
    }
}

const tmdwp=new IdolModel('임승제',1999);
console.log(tmdwp);
// console.log(tmdwp.dance());

const tmdwp2=IdolModel('임승제',1999);
console.log(tmdwp2); // new 키워드 안쓰면 undefined

// console.log(global.name);


const IdolModelArrow=(name,year)=>{
    this.name=name;
    this.year=year;
};

const tmdwp3=new IdolModelArrow('임승제',1999);