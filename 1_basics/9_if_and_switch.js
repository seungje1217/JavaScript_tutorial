let number = 5;

if (number % 2 ===0){
    console.log('number 변수는 짝수');
}else {
    console.log('number 변수는 홀수');
}

const englishDay='monday';

switch (englishDay){
    case 'monday':
        koreanDay='월요일';
        break;
    case 'friday':
        koreanDay='금요일';
        break;
    default:
        koreanDay='주말';
        break;
}

console.log(koreanDay);