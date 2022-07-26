// Task 1 =================================================================================
//Создать переменную каждого типа данных.
let myNum = 8;
let myString = "This is a string type datum";
let myBoolean = true;
let myIndef;
let myNull = null;
let mySymbol = Symbol();
let myBigInt = 3408997300809890090n;
let myObject = {
    artist: "Open Souls",
    songName: "Intro",
    duration: "1:34",
    rating: 5,
    year: 2003
}

// Task 2 ===================================================================================
//Создать переменную var, let, const. Перезаписать их значения(не для const).

var sentence = 'I want to create a var variable';
sentence = "I have changed the var variable";

let mySentence = 'I feel JS to be full of unexpected surprises';
mySentence = 'I hope to learn everything';

const mySentence2 = 'This sentence cannot be changed';

//Task 3 ======================================================================================
//Привести тип каждого типа данных хотя бы 2-3мя способами(Google).
// strings
let a = 4789;
console.log(typeof String(a));

let b = true;
console.log(typeof b.toString());

let c = 4789 + "";
console.log(typeof c);

let ca = {
    artist: "Open Souls",
    songName: "Intro",
    duration: "1:34",
    rating: 5,
    year: 2003
}

console.log(JSON.stringify(ca));

let cd;
console.log(String(cd));

let myBigInt1 = 308997300809890090n;
console.log(myBigInt1.toString());

let mySymbol1 = Symbol();
console.log(mySymbol1.toString());

// numbers

let d = '4789';
console.log(typeof Number(d));

let myStr = '4789';
console.log(typeof +myStr);

let e = "6";
let f = 5;
result = e - f;
console.log(typeof result);

let ba = true;
let bb = false;
resultb = ba + bb;
console.log(resultb);

let cf;
console.log(Number(cf));

let myBigInt2 = 308997300000000090n;
console.log(Number(myBigInt2));

// booleans
let g = 6 == "6";
console.log(g);

let h = 568;
console.log(typeof Boolean(h));

let i = "string";
console.log(typeof Boolean(i));

let j = "false";
let k = "true";
rjk = !!j == !!k
console.log(rjk);

let cc;
console.log(Boolean(cc));

let myBigInt3 = 300000000000890090n;
console.log(Boolean(myBigInt3));

let mySymbol3 = Symbol();
console.log(Boolean(mySymbol3));

// TASK 4 =========================================================================
//Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.

let l = 'my string';
let m = '123';
lm = l + m;
console.log(lm);

let n = 'my string';
let o = 123;
no = n + o;
console.log(no);

let p = 'my string';
let q = true;
pq = p + q;
console.log(pq);

let r = 'my string';
let s;
rs = r + s;
console.log(rs);

let t = 'my string';
let u = null
tu = t + u;
console.log(tu);

let v = 'my string';
let w = 400000000000000000n;
vw = v + w;
console.log(vw);

//-------------------------------------------

let da = 12;
let db = '123';
dadb = da + db;
console.log(dadb);

let dc = 12;
let dd = 123;
dcdd = dc + dd;
console.log(dcdd);

let de = 12;
let df = true;
dedf = de + df;
console.log(dedf);

let dg = 12;
let dh;
dgdh = dg + dh;
console.log(dgdh);

let di = 12;
let dj = null
didj = di + dj;
console.log(didj);
//Task 5 ============================================================================
//Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.

let ea = 'my string';
let eb = '123';
eaeb = ea - eb;
console.log(eaeb);

let ec = 'my string';
let ed = 123;
eced = ec - ed;
console.log(eced);

let ef = 'my string';
let eh = false;
efeh = ef - eh;
console.log(efeh);

let eg = 'my string';
let ei;
egei = eg - ei;
console.log(egei);

let ej = 'my string';
let ek = null
ejek = ej - ek;
console.log(ejek);

//-------------------------------------------

let en = 12;
let eo = '123';
eneo = en - eo;
console.log(eneo);

let ep = 12;
let eq = 123;
epeq = ep - eq;
console.log(epeq);

let er = 12;
let es = true;
eres = er - es;
console.log(eres);

let et = 12;
let eu;
eteu = et - eu;
console.log(eteu);

let ew = 12;
let ex = null
ewex = ew - ex;
console.log(ewex);

//Task 6 ==================================================================================
//Задача (Условный оператор)
//  Пользователь вводит логин и пароль.
//  Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
//  то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».

// let login = prompt('Enter your login');
// let password = prompt('Enter your password');
//
// if (login === 'kykold', password === '1234asdQQ') {
//     console.log("You are welcome");
// } else {
//     console.log("entrance error");
// }

// Task 7 =========================================================================================
// Задача (Условный оператор)
// Пользователь вводит год рождения. Программа показывает количество
// лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// если нет – «вход воспрещен».
//
// let yourBirthYear = prompt('Enter your birth year');
//
// let yearNow = 2022;
//
// if (yearNow - yourBirthYear >= 16) {
//     console.log(yearNow - yourBirthYear);
//     console.log("You are welcome");
// } else if (yearNow - yourBirthYear < 16) {
//     console.log(yearNow - yourBirthYear);
//     console.log("Entrance is forbidden");
// }

//Task 8 ==========================================================================================
// Задача (Условный оператор)
// Создайте программу, которая выводит надбавку за стаж.
// Пользователь вводит стаж работы, а программа пишет ему надбавку.

// let yourExperience = prompt('Enter your Experience in Years');
// const bonusForOneYear = 20;
//
// if (yourExperience < 2) {
//     alert("Your Experience is not enough to get a bonus");
// } else if (yourExperience == 2) {
//     alert("Your bonus is 20$");
// } else if (yourExperience > 2) {
//     alert("Your bonus is " + yourExperience * bonusForOneYear + "$");
// }

//Task 9 ======================================================================================
// Задача (Условный оператор и свитч кейс)
//  Пользователь вводит число, показывает день недели
//  в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
//  9.1 Решить на иф елсах
//  9.2 Решить на свитч кейсе
//  9.3 Решить на тернарном операторе
//
// let userNumber = +prompt('Enter your number');
//
// if (userNumber == 1) {
//     alert("Monday");
// } else if (userNumber == 2) {
//     alert("Tuesday");
// } else if (userNumber == 3) {
//     alert("Wednesday");
// } else if (userNumber == 4) {
//     alert("Thursday");
// } else if (userNumber == 5) {
//     alert("Friday");
// } else if (userNumber == 6) {
//     alert("Saturday");
// } else if (userNumber == 7) {
//     alert("Sunday");
// }

// let userNumber1 = prompt('Enter your number');
// console.log(userNumber1);
//
// switch (userNumber1) {
//     case '1':
//         alert("Monday");
//         break;
//     case '2':
//         alert("Tuesday");
//         break;
//     case '3':
//         alert("Wednesday");
//         break;
//     case '4':
//         alert("Thursday");
//         break;
//     case '5':
//         alert("Friday");
//         break;
//     case '6':
//         alert("Saturday");
//         break;
//     case '7':
//         alert("Sunday");
//         break;
// }

// let userNumber2 = +prompt('Enter your number');
//
// let ternar = userNumber2 == 1 ? alert("Monday")
//     : userNumber2 == 2 ? alert("Tuesday")
//         :userNumber2 == 3 ? alert("Wednesday")
//             : userNumber2 == 4 ? alert("Thursday")
//                 : userNumber2 == 5 ? alert("Friday")
//                     : userNumber2 == 6 ? alert("Saturday")
//                         : userNumber2 == 7 ? alert("Sunday")
//                             : "nothing";
//Task 10 ============================================================================
// 10 - Задача (Условный оператор)
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.

// let userNumber = +prompt('Enter your number')
//
// if (userNumber > 0) {
//     alert(1);
// } else if (userNumber < 0) {
//     alert(-1);
// } else if (userNumber == 0) {
//     alert(0);
// }

//Task 11 =============================================================================
// Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.
//
//     let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }
// let login = prompt('Who are you?');
// let message;
// let ternar = login == 'Сотрудник' ? alert(message = 'Привет')
//     : login == 'Директор' ? alert(message = 'Здравствуйте')
//         : login == '' ? alert(message = 'Нет логина')
//             : login == undefined ? alert(message = '')
//                 : "nothing";
//Task 12 =============================================================================
// Задача (Условный оператор)
// В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
// Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.
//
// let flat = +prompt('What is the number of your flat');
//
// if (flat <= 20) {
//     alert("Your entrance is number " + 1);
// } else if (flat >= 21 && flat <=48) {
//     alert("Your entrance is number " + 2);
// } else if (flat >= 49 && flat <=90) {
//     alert("Your entrance is number " + 3);
// }
//Task 13 ================================================================================
// Задача (Условный оператор)
// Напишите if..else, соответствующий следующему switch:
//
//     switch (browser) {
//         case 'Edge':
//             alert( "You've got the Edge!" );
//             break;
//
//         case 'Chrome':
//         case 'Firefox':
//         case 'Safari':
//         case 'Opera':
//             alert( 'Okay we support these browsers too' );
//             break;
//
//         default:
//             alert( 'We hope that this page looks ok!' );
//     }
//
// let browser = prompt("What is your browser");
//
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }

//Task 14 ==============================================================================
// 14 - Задача (свитч кейс)
// Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:
//
//     const number = +prompt('Введите число между 0 и 3', '');
//
//     if (number === 0) {
//         alert('Вы ввели число 0');
//     }
//
//     if (number === 1) {
//         alert('Вы ввели число 1');
//     }
//
//     if (number === 2 || number === 3) {
//         alert('Вы ввели число 2, а может и 3');
//     }

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
        alert('Вы ввели число 2, а может и 3')
        break;
    case 3:
        alert('Вы ввели число 2, а может и 3')
        break;
}