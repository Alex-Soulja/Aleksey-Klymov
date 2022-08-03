//1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.=====================================

// const myArrayA = ['a', 'b', 'c'];
// const myArray1 = [1, 2, 3];
// newArray = Array.of(myArrayA,myArray1 );
// console.log(newArray);

//2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. (через push и через splice)================

// const abc = ['a', 'b', 'c'];
// abc.push(1, 2, 3);
// console.log(abc);

// const abc2 = ['a', 'b', 'c'];
// abc2.splice(3, 0, 1, 2, 3,);
// console.log(abc2);

//3) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].=====================
// const numbers145 = [1, 2, 3, 4, 5];
// numbers145.splice(1, 2);
// console.log(numbers145);

//4) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].=====

// const numbersAndLetters = [1, 2, 3, 4, 5];
// numbersAndLetters.splice(3, 0, 'a', 'b', 'c');
// console.log(numbersAndLetters);

//5) Дан массив const arr = [1, 2, 3, 4, 5]. Создать новый пустой массив arr1. Обойти массив arr через цикл for,
// каждый элемент массива arr умножить на 10 и результат положить в массив arr1.===============================

// const arr = [1, 2, 3, 4, 5];
// const arr1 = [];
//
// arr.forEach((item) => {
//     arr1.push(item * 10);
// });
// console.log(arr1);

//6) Вывести числа от 4 до 400 на экран.======================================================

// for (let i = 0; (i < 401); i++) {
//     if (i > 3)
//     console.log(i);
// }

//7) Вывести числа в последовательности: 4 7 10 13 с помощью цикла.===============================

// for (let i = 1; (i < 14); i += 3) {
//     if (i > 3)
//         console.log(i);
// }

//8) Вывести числа 654 653 652 до нуля.=================================================

// let i = 654;
//
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

//9) Вывести все годы с 1983 до 2017.

// for (let i = 0; (i < 2018); i++) {
//     if (i > 1982)
//     console.log(i);
// }

// 10) Вывести числа -4 -2 0 2 4 6 ...100.

// for (let i = -4; (i < 102); i += 2) {
//         console.log(i);
// }

// 11) Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function mySum() {
//     let sum100 = 0;
//     for (let i = 0; i <= 100; i++) {
//         sum100 += i;
//     }
//         return sum100;
// }
// console.log(mySum())

// 12) Заполните массив следующим образом: в первый элемент запишите 'x',
//     во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.

// let yourNumber = +prompt("Enter the length of your array: ")
//
// const xLength = []
//
// let result = ''
//
// do {
//     result = result + 'x'
//     xLength.push(result)
// } while (xLength.length < yourNumber)
// console.log(xLength)

// 13) Заполните массив следующим образом: в первый элемент запишите '1',
//     во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.

// let yourNumber = +prompt("Enter the length of your array: ")
//
// const xLength = []
//
// for (let i = 1; i < yourNumber; i++) {
//
//     xLength.push(i.toString().repeat(i));
// }
//
// console.log(xLength)

// 14*) нарисовать матрицу x должны быть по краям, 0 в центре. ( длина и высота матрицы не меньше 10 )
//     ['x', 'x', 'x', 'x', 'x' 'x', 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 'x', 'x', 'x', 'x', 'x','x']

// let firstRow = [];
// let arr10 = 0;
//
// do {
//     firstRow.length = 0
//     if (arr10 === 0 || arr10 === 9) {
//         for (let i = 0; i < 7; i++) {
//             firstRow[i] = 'x'
//         }
//     }
//         else  {
//             for (let i = 0; i < 10; i++) {
//                 if (i === 0 || i === 9) {
//                     firstRow[i] = 'x'
//             } else {
//                 firstRow[i] = 0
//             }
//         }
//     }
//     arr10 += 1
//     console.log(firstRow)
// } while (arr10 < 10)

//
// 15*) нарисовать матрицу (таблица умножения)
// 0: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1: (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// 2: (10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// 3: (10) [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
// 4: (10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// 5: (10) [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
// 6: (10) [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
// 7: (10) [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
// 8: (10) [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
// 9: (10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// let firstRow = [];
// let arr10 = 0;
//
// do {
//     firstRow.length = 0
//     if (arr10 === 0) {
//         for (let i = 1; i <=10; i++) {
//             firstRow.push(i.toString());
//         }
//     } else if (arr10 === 1) {
//         for (let i = 2; i <= 20; i+=2) {
//             if (i > 1) {firstRow.push(i.toString());}
//         }
//     } else if (arr10 === 2) {
//         for (let i = 3; i <=30; i+=3) {
//             firstRow.push(i.toString());
//         }
//     } else if (arr10 === 3) {
//         for (let i = 4; i <=40; i+=4) {
//             firstRow.push(i.toString());
//         }
//     } else if (arr10 === 4) {
//         for (let i = 5; i <=50; i+=5) {
//             firstRow.push(i.toString());
//         }
//     } else if (arr10 === 5) {
//         for (let i = 6; i <=60; i+=6) {
//             firstRow.push(i.toString());
//         }
//     } else if (arr10 === 6) {
//         for (let i = 7; i <=70; i+=7) {
//             firstRow.push(i.toString());
//         }
//     } else if (arr10 === 7) {
//         for (let i = 8; i <=80; i+=8) {
//             firstRow.push(i.toString());
//         }
//     } else if (arr10 === 8) {
//         for (let i = 9; i <=90; i+=9) {
//             firstRow.push(i.toString());
//         }
//     } else if (arr10 === 9) {
//         for (let i = 10; i <=100; i+=10) {
//             firstRow.push(i.toString());
//         }
//     }
//     arr10 += 1
//     console.log(firstRow)
// } while (arr10 < 10)

// 16*)	Написать программу которая будет склонять слово
// 	“товар” в зависимости от количества товаров в корзине.
//     Например 1 - товар, 4 - товара, 6 - товаров.

// let promptNumber = prompt("Сколько товаров в вашей корзине: ")
//

let Number = prompt("Сколько товаров в вашей корзине: ")

let myWord = "товар";
let firstEnding = "а";
let secondEnding = "ов";
let finalResult = '';

console.log(Number.slice(-1));

if (Number.slice(-2) === "11") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-2) === "12") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-2) === "13") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-2) === "14") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-2) === "15") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-2) === "16") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-2) === "17") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-2) === "18") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-2) === "19") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-1) === "0") {
    finalResult = myWord + secondEnding;
} else if (Number.slice(-1) === '1') {
    finalResult = myWord;
} else if (Number.slice(-1) === '2' || Number.slice(-1) === '3' || Number.slice(-1) === '4' ) {
    finalResult = myWord + firstEnding;
} else if (Number.slice(-1) === '5' || Number.slice(-1) === '6' || Number.slice(-1) === '7' || Number.slice(-1) === '8' || Number.slice(-1) === '9' ) {
    finalResult = myWord + secondEnding;
} else {
    finalResult = "Nothing to show"
    alert(finalResult);
}
alert(finalResult);

