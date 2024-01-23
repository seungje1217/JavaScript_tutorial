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

function multiply(x,y){
    console.log(x*y);
}

multiply(2,4);