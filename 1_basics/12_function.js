// 함수 정의 실행
function calculate(){ 
    console.log((2*10/2%3).toString());
}

//calculate();

function calculate(number){
    console.log((number*10/2%3).toString());
}
/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter
 * 실제 입력하는 값은 argument
 */
calculate(4);

function multiply1(x,y){
    console.log(x*y);
}

multiply1(2,4);

console.log('-----------------');

// 반환 (return)

function multiply2(x,y){
    return x * y;
}

const result1=multiply2(2,5);
console.log(result1);

// Arrow 함수

const multiply3=(x,y)=>{
    return x * y;
}
console.log(multiply3(3,4));

const multiply4=(x,y)=>x*y;
console.log(multiply4(4,5));

const multiply5 = x => y => z => `x:${x} y:${y} z:${z}`;
console.log(multiply5(1)(2)(3));

function multiply6(x){
    return function(y){
        return function(z){
            return `x:${x} y:${y} z:${z}`;
        }
    }
}

console.log(multiply6(3)(4)(5));

const multi = function(x,y,z){
    console.log(arguments); // 실제 값들을 순서대로 반환
    return x*y*z;
}

console.log('---------------');
console.log(multi(4,5,6));

const multiAll=function(...argument){
    return Object.values(argument).reduce((a,b)=>a*b,1);
}

console.log(multiAll(3,4,5,6,7,8,9,10));

(function(x,y){
    console.log(x*y);
})(4,5)  // ()는 실행한다라는 뜻

console.log(typeof multiply1);
console.log(multiply1 instanceof Object); 
// 함수는 Object