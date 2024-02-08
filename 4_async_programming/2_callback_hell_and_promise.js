// Callback
function waitAndRun(){
    setTimeout(()=>{
        console.log('끝');
    },2000);
}

// waitAndRun();

function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(() => {
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}
// waitAndRun2();

// Promise
// resolve -> then 실행
// reject -> catch 실행
const timeoutPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('완료');
    },2000);
});

// timeoutPromise.then((res)=>{
//     console.log('----then----');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
        //reject('에러');
    }, seconds * 1000);
});

// getPromise(3)
//     .then((res)=>{
//         console.log('--- first then ---');
//         console.log(res);

//     })
//     .catch((res)=>{
//         console.log('--- first catch ---');
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('finally');
//     });

Promise.all([ 
    // 가장 느린 함수를 기준으로 then이나 catch가 불린다
    // 전부 2초뒤에 동시에 실행
    getPromise(1),
    getPromise(2),
    getPromise(1),
]).then((res)=>{
    console.log(res);
});