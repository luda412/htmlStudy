// let num = 10;
// num = 30;
// console.log(num);

// let dan = 3;
// let gugu = 8;
// let string = `${dan} 곱하기 ${gugu}은 ${dan * gugu}입니다.`;
// console.log(string);

// let boolean1 = 10 < 20;
// let boolean2 = 10 > 20;
// console.log(boolean1);
// console.log(boolean2);

// let empty = null;
// console.log(empty);

// let num1 = 10;
// let num2 = '10';
// console.log(num1 != num2); // = 하나는 값을 비교, 자료형은 다르지만 값이 같기 때문에(아니, 값이 똑같아)라는 관점에서 false

//암시적 형 변환
// let num = 10;
// let strNum = '10';
// if(num == strNum){
//     console.log('equals');
// }

// 명시적 형 변환
// let num = 10;
// let strNum = '10';
// if(String(num) == strNum){
//     console.log('equals');
// }

//if문 간단 예제
// let num = 10;
// if(num % 2 == 0){
//     console.log(`변수 ${num}은 짝수 입니다.`);
// }

// esle 추가 간단 예제
// let num = 5;
// if(num % 2 ==0){
//     console.log(`변수 ${num}은 짝수 입니다.`);
// } else {
//     console.log(`변수 ${num}은 홀수 입니다.`);
// }

//else if 문 간단 예제
// let num = 0;
// if( num > 0 ){
//     console.log('양수');
// } else if( num < 0 ){
//     console.log('음수');
// } else {
//     console.log('0');
// }

//switch 문 간단 예제
// let food = 'melon';
// switch(food){
//     case 'melon':
//         console.log('fruit');
//         break;
//     case 'apple':
//         console.log('fruit');
//         break;
//     case 'banana':
//         console.log('fruit');
//         break;
//     case 'carrot':
//         console.log('vegetable');
//         break;
//     default:
//         console.log(`It's not fruits and vegetables`);
//         break;
// }

//switch break 생략 가능 예제
// let food = 'apple';
// switch(food){
//     case 'melon':
//     case 'apple':
//     case 'banana':
//         console.log('fruit');
//         break;
//     case 'carrot':
//         console.log('vegetable');
//         break;
//     default:
//         console.log(`It's not fruits and vegetables`);
//         break;
// }

// let score = 90;
// if(score >= 90 && score <= 100){
//     console.log('A++');
// }

//while문 간단 예제
// let num = 1;
// while(num <= 5){
//     console.log(num);
//     num++;
//}

//do while문 간단 예제
// do{
//     console.log('무조건');
//     console.log('한 번은 실행');
// }while(false);

//for문 간단 예제
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

//중첩 for문
// for(let i = 0; i < 2; i++){
//     console.log(`i: ${i}`);
//     for(let k = 0; k< 2; k++){
//         console.log(`k: ${k}`);
//     }
// }

//for문과 배열 간단 예제
// let arr = ['banana', 'apple', 'orange'];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//for in Ex 객체
// let obj = { name: 'fnek', age: '20'};
// for(let key in obj){
//     console.log(`${key}: ${obj[key]}`);
// }

//for in Ex 배열
// let arr = ['orange', 'banana', 'apple'];
// for(let index in arr){
//     console.log(`${index}: ${arr[index]}`);
// }

// Ex) break문
// for(let i = 0; i < 10; i++){
//     console.log(i);
//     if(i === 5){
//         break;
//     }
// }

//Ex) for...in break
// let obj = { name: 'luda', age: 10}
// for( let key in obj){
//     if( key === 'age') break;
//     console.log(obj[key]); //'luda'만 출력되고 10은 출력되지 않고 바로 break
// }

//Ex) continue
// for(let i = 1; i <= 10; i++){
//     if( i % 2 === 0) continue;
//     console.log(i);
// }

// 1부터 100까지 합을 출력
// let sum = 0;
// for(let i = 0; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);

//셀프체크 1 문제
// let count = 0;
// for(let i = 1; i < 1000; i++){
//     if(i % 2 === 0 ){
//         count ++;
//     }
// }
// console.log(count);

//셀프체크 2문제 구구단 1부터 9단까지 출력
// let dan = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let danNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let key in dan){
//     console.log(`-----------`)
//     console.log(`${dan[key]} 단`);
//     for(let danNumKey in danNum){
//         console.log(`${dan[key]} X ${danNum[danNumKey]} = ${dan[key] * danNum[danNumKey]}`);
//     }
// }

//셀프체크 3문제 
/**
 * 100부터 999까지 암스트롱 수에 해당하는 숫자를 모두 출력 세자리 정수중 각 자리의 수를 세제곱한 수의 합과 자신이 같은 수를 말함
 * 153 = 1^3 + 5^3 + 3^3 = 153
 */
// for(let i = 1; i < 10; i++){
//     for(let j = 0; j < 10; j++){
//         for(let k = 0; k < 10; k++){
//             let sum = (i*i*i) + (j*j*j) + (k*k*k);
//             let nowNum = (i*100) + (j*10) + k;
//             if(sum === nowNum){
//                 console.log(nowNum);
//             }
//         }
//     }
// }

//Ex) function Declaration 
// function gugudan(){
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// gugudan();

//Ex) function Expression
// const gugudan = function gugudan(){
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// gugudan();

//Ex) 매개변수 사용
// function gugudan(dan){
//     console.log(`dan 매개변수 : ${dan}`);
//       try{
//           if(isNaN(dan)){
//               throw new Error;
  
//           }
//           for(let i = 1; i <=9; i++){
//               console.log(`${dan} * ${i} = ${dan * i}`);
//           }
//       }catch(e){
  
//           console.log('숫자로만 호출 가능합니다.')
//       }
//   }
  
//gugudan(3);
//gugudan('hello');

/* function gugudan(dan){
    try{
        if( dan !== Number){
            throw new Error;
        }
        for(let i = 1; i <=9; i++){
            console.log(`${dan} * ${i} = ${dan * i}`);
        }
    }catch(e){
        console.log('숫자로만 호출 가능합니다.')
    }
}

gugudan(3);
gugudan('hello'); */

// function gugudan(dan){
//     try{
//         if(typeof dan !== 'number'){
//             throw new Error;
//         }
//         for(let i = 1; i <=9; i++){
//             console.log(`${dan} * ${i} = ${dan * i}`);
//         }
//     }catch(e){
//         console.log('숫자로만 호출 가능합니다.')
//     }
// }

//gugudan(3);
//gugudan('hello');
// let num = 1;
// console.log(typeof 1);

//1분 퀴즈 예제

// function getArrayMaxNumber(arr){
//     let result = 0;
//     for( let i = 0; i = arr.length; i++){
//         if(result < arr[i]) result = arr[i];
//     }
//     return result;
// }

// const max = getArrayMaxNumber([10, 50, 30]);
// console.log(max);

// const area = function area(rad){
//     return console.log(rad * rad * 3.14);
// }

// area(5);

// let result = 0;
// function large(arr){
//     for(let key in arr){
//         if(result < arr[key]){
//             result = arr[key];
//         }
//     }
//     return result;
// }

// let array = [125, 500, 12, 42];
// console.log(large(array));


const bmi = (weight, height) =>{
    let bmiNum = 0;
    let h = height/100;
    bmiNum = (weight)/(h*h);
    if(bmiNum > 25){
        return console.log(`비만입니다.`);
    }else if( 25 >= bmiNum >= 24){
        return console.log(`과체중 입니다.`);
    }else if( 23 >= bmiNum >= 18.5){
        return `정상 입니다.`;
    }else if( bmiNum < 18.5){
        return console.log(`저체중 입니다.`);
    }
}
let result = bmi(70, 180);
console.log(`${result}`);