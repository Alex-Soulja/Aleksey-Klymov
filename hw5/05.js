// Deadline: 08.08.2022
//
// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//     а вторым - сколько элементов должно быть в массиве.
//     Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill(a, b) {
//     let myArr = [];
//     for (let i = 0; i < b; i++) {
//         myArr.push(a)
//     }
//         console.log(myArr)
//         return myArr
// }
// arrayFill('x', 12);


// 2) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//     что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(a) {
//     if (a > 0 && a < 10) {
//         console.log(true);
//     } else
//         console.log(false);
//     return true
// }
// isNumberInRange(3)

// 3) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(a) {
//     if (a % 2 === 0) {
//         console.log(true)
//     } else
//         console.log(false)
// }
// isEven(5)

// 4) Дан массив с целыми числами. Создайте из него новый массив,
//     где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let newEven = [];
//
// function even () {
//     for (let i = 0; i < integers.length; i++) {
//         function isEven() {
//             if (i % 2 === 0) {
//                 newEven.push(i)
//             }
//         }
//         isEven()
//     }
//     console.log(newEven)
// }
// even ()

// 5) Создайте функцию, которая получает два параметра – число и степень числа.
//     Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

// function power(i, p) {
//     let powered = i ** p;
//     console.log(powered)
// }
// power(3, 4)

// 6) Функция принимает параметр - возраст пользователя.
//     Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

// function userAge (a) {
//     if (a > 16) {
//         console.log('добро пожаловать')
//     } else if (a < 16) {
//         console.log('вы еще молоды')
//     } else if (a = 16)
//         console.log('наверное вы еще молоды :)')
// }
// userAge (17)

// 7) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//     В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// let age = prompt("Сколько вам лет: ")
//
// function userAge(a) {
//     if (a >= 16) {
//         console.log('добро пожаловать')
//     } else if (age === undefined || age === '' || age < 0 || isNaN(a)) {
//         alert('Введите возрас')
//     } else if (a >= 0 && a < 16) {
//         console.log('вы еще молоды')
//     }
// }
// userAge(age)

// 8) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//     Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
//     делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// function ucfirst () {
//     let myString = "how are you?";
//     let result = myString[0].toUpperCase()
//     myString = myString.replace(myString[0], result)
//     console.log(myString)
//     return myString
// }
// ucfirst ()

// 9) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)
// let st = 'var_text_hello'
//
// function string() {
//     st = st.split('_').join('')
//     let t = st[3].toUpperCase()
//     st = st.replace(st[3], t)
//     let h = st[7].toUpperCase()
//     st = st.replace(st[7], h)
//     console.log(st)
// }
// string()

// 10) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента, а вторым - массив,
//     в котором делается поиск. Функция должна возвращать true или false.

let myArray = ['keep', 'be', 'see', 'take', 'replace']

function inArray (word, sequence) {
    for (let i = 0; i < sequence.length; i++) {
        if (sequence.includes(word)) {
            return true
        } else
            return false
    }
}

let result = inArray('see', myArray)
console.log(result)