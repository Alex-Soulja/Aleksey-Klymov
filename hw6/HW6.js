// DeadLine: 11.08.2022
//
// 1) Задание на классы:
//     1.1) Создать абстрактный класс Human
// Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean).
//     Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.

class Human {
    constructor(name, height, weight, date, sex, disabled) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.date = date;
        this.sex = sex;
        this.disabled = disabled;
    }
    get getAllHumanInfo() {
        const info = {
            name: this.name,
            height: this.height,
            weight: this.weight,
            date: this.date,
            sex: this.sex,
            disabled: this.disabled
        }
        return info
    }
    get getHelloWord() {
        return `Привет, меня зовут ${this.name}`
    }

    set setNewName(name) {
        this.name = name;
    }
    set setNewDisStatus(disabled) {
        this.disabled = disabled;
    }
}

// 1.2) Создать два класса(которые должны зависеть от абстракции):
// - Фронтенд разработчик
// - Строитель

class frontEndDeveloper extends Human {
    constructor(workStart, previousWork) {
        super();
        this.setNewName = "Alex";
        this.height = '176';
        this.weight = '62'
        this.date = new Date('1990-09-06');
        this.sex = 'male';
        this.setNewDisStatus = false;

        this.workStart = workStart;
        this.previousWork = previousWork;

    }
    get getHelloWord() {
        console.log(`${super.getHelloWord}`)
    }
}


const alex = new frontEndDeveloper('2021', 'never');
console.log(alex)
alex.getHelloWord
//----------------------------------------------------------------------------------------------------

class builder extends Human {
    constructor(name, height, weight, date, sex, disabled) {
        super();
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.date = date;
        this.sex = sex;
        this.disabled = disabled;
    }
}

// 1.3) Класс Фронтенд разработчик:
//     Добавить доп. свойства:
// - начало карьеры(формат Date),
// - предыдущие компании(массив объектов
// {
//     start: new Date(),
//         end: new Date(),
//     salaryPerMonth: number,
//     position: 'middle' или 'junior' или 'senior',
//     companyName: 'Oracle',
// })
// Добавить доп. методы:
// - изменить приветствие на 'Привет, меня зовут ИМЯ_ЧЕЛОВЕКА, я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)'.
// - добавить метод, который покажет сколько всего заработал за всю карьеру (использовать массив предыдущие компании,
//     высчитать количество отработанных ПОЛНЫХ месяцев в каждой компании умноженный на salaryPerMonth для получения дохода в одной компании,
//     в результате должна быть общая сумма со всех компаний(общий доход за всю историю))
// - добавить метод, который позволит используя имя компании показать историю моей работы в ней(вывести объект из массива предыдущие компании по ее имени)
// - возможность добавить компанию в массив предыдущих компаний по примеру объекта выше

const frontEndDeveloper1 = new frontEndDeveloper()
frontEndDeveloper1.workStart = new Date(2019, 6, 8)
frontEndDeveloper1.previousWork = [
    {
        start: frontEndDeveloper1.workStart,
        end: new Date(2020, 5, 25),
        salaryPerMonth: 1600,
        position: 'middle',
        companyName: 'EPAM',
    },
    {
        start: new Date(2020, 7, 1),
        end: new Date(),
        salaryPerMonth: 3000,
        position: 'senior',
        companyName: 'KUNA',
    }
]
frontEndDeveloper1.name = "Sasha"
frontEndDeveloper1.hello = function() {
    let dd = this.workStart.getDate()
    if (dd < 10) dd = '0' + dd

    let mm = this.workStart.getMonth() + 1
    if (mm < 10) mm = '0' + mm

    let yyyy = this.workStart.getFullYear()

    console.log(`Привет, меня зовут ${this.name}, я Фронтенд разработчик. Работаю с ${dd}.${mm}.${yyyy}`)
}
frontEndDeveloper1.hello()
console.log(frontEndDeveloper1.previousWork[0])

//----------------------------------работает-------------------------------------

frontEndDeveloper1.salary = function() {
    function allSalary(d1, d2) {
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
    let sum = 0
    if (this.previousWork) {
        this.previousWork.forEach((el) => {
            sum += allSalary(el['start'], el['end']) * el['salaryPerMonth']
        })
        console.log(`Your total income: ${sum} $`)
        // this.prevCompanies[0]['start'] = 'zon'
    } else {
        console.log('No experience, your total income: 0 $')
    }
}
frontEndDeveloper1.salary()
console.log(frontEndDeveloper1.previousWork[1]['companyName'])


frontEndDeveloper1.companySearch = function(companyName) {
    this.previousWork.forEach((el) => {
        if (el['companyName'] === companyName) console.log(el)
    })
}
frontEndDeveloper1.companySearch('KUNA')

frontEndDeveloper1.addCompany = function(companyName) {
    const companyFieldKeys = ['start', 'end', 'salaryPerMonth', 'position', 'companyName']
    const obj = companyFieldKeys.reduce((obj, key) => {
            key === 'companyName' ? obj[key] = companyName :
                key === 'start' || key === 'end' ? obj[key] = new Date(0) :
                    obj[key] = 0;
            return obj;
        },
        {}
    );
    this.previousWork.push(obj)
    console.log(obj);
}
frontEndDeveloper1.addCompany('NewCompany')

console.log(frontEndDeveloper1.previousWork);


// 1.4) Класс Строитель:
//     Добавить доп. свойства:
// - локация строительного объекта(строка)
// - набор инструментов (массив строк ['кирка', 'топор'])
// - скорость выполнения работы на один квадратный метр (количество минут - number)
// Добавить доп. методы:
// - метод построить дом (принимает в себя количество квадратных метров) - должен показать сколько дней займет постройка дома текущим мастером
// если меньше одного дня - показать количество часов
// если больше одного дня - показать количество дней и часов
// если больше недели - показать количество недель дней и часов
// если больше месяца - показать количество месяцев недель дней и часов
// если больше года - показать количество лет месяцев недель дней и часов

const builder1 = new builder()
builder1.objLocation = ''
builder1.toolSet = ['lazer', 'hummer', 'perforator', 'knife', 'ruler']
builder1.speed = 80

builder1.buildHouse = function(sqrMeters) {
    let minutes = sqrMeters * this.speed
    let hours = Math.floor(minutes / 60)
    let days = Math.floor(hours / 24)
    let weeks = Math.floor(days / 7)
    let months = Math.floor(weeks / 4)
    let years = Math.floor(months / 12)

    if (hours) minutes = minutes - hours * 60
    if (days) hours = hours - days * 24
    if (weeks) days = days - weeks * 7
    if (months) weeks = weeks - months * 4
    if (years) months = months - years * 12

    let time = (years ? years > 1 ? years + ' years ' : years + ' year ' : '') +
        (months ? months > 1 ? months + ' months ' : months + ' month ' : '') +
        (weeks ? weeks > 1 ? weeks + ' weeks ' : weeks + ' week ' : '') +
        (days ? days > 1 ? days + ' days ' : days + ' day ' : '') +
        (hours ? hours > 1 ? hours + ' hours ' : hours + ' hour ' : '') +
        (minutes ? minutes > 1 ? minutes + ' minutes' : minutes + ' minute' : '')
    return `Building of the house will take: ${time ? time : 'please point in minutes'}`
}
console.log(builder1.buildHouse(620))