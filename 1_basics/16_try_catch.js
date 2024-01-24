// 에러를 잡는데 사용
/**
 * 발생시킬때 -> 던지낟고 한다 (throw)
 * 명시적으로 인지 -> 잡는다고 한다 (catch)
 */
function runner(){
    try{
    console.log('Hello');

    throw new Error('큰 문제 생성');

    console.log('승제');
    }catch(e){ // Error시 바로 이쪽 문장으로 옴
        console.log('---catch---');
        console.log(e);
    }finally{ 
        // try에서 Error가 없어도 finally는 실행된다
        // 굳이 안써도 된다
        console.log('finally')
    }
}
runner();