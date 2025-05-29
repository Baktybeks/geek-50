// let str = 'кыргызстан'
// let str2 = 'Кыргызстан'
// let str3 = 'кырГЫзсТАн'
// console.log(str, 'str')
// console.log(str[0], 'str')
// console.log(str[str.length - 1], 'str')
// console.log(str.toUpperCase(), 'str')
// console.log(str2.toLowerCase(), 'str')
//
// console.log(str3[0].toUpperCase(), 'str')
// console.log(str3.slice(1, 5), 'str')
// console.log(str3.slice(1), 'str')
// console.log(str3, 'str3')
// console.log(str3[0].toUpperCase() + str3.slice(1).toLowerCase(), 'str')
//
// const user = {
//     name: "Bakyt",
//     age: 18,
//     isStudent: true,
//     surname: 'Sariev',
//     passport: {
//         id: '123456789',
//         inn: '1234567890',
//         date: '12.12.2020',
//     },
//     'country name': 'Bishkek'
// }
//
// for (let key in user) {
//     console.log(key, user[key], 'key')
// }
//
// console.log(Object.keys(user), 'keys')
// console.log(Object.values(user), 'keys')
// console.log(Object.keys(user).includes('age1'), 'age1')
// console.log(Object.keys(user).includes('age') ? user.age * 45 : 0)
// console.log('age1' in user, "\"name\" in user")
//
// user.passport.id ='bakyt'
// console.log(user)
// console.log(user.surname, 'surname')
// console.log(user.surname && '+', 'surname+')
// console.log(user.surname ?? '-', 'surname-')
// const user1 = {
//     name: "Kuban",
//     age: 18,
//     isStudent: true,
// }
//
// let userName = 'name'
//
// console.log(user, 'user')
// console.log(user.userName, 'user')
// console.log(user[userName], 'userName')
// console.log(user['country name'], 'user')
// console.log(user['name'], 'user')
// console.log(user.passport.date, 'user')
// console.log(user.name, 'user')
// console.log(user.age, 'user')
// console.log(user.isStudent, 'user')
//
// let name = "Bakyt"
// let age = 18
// let isStudent = true
//
// let name1 = "Bakyt"
// let age1 = 18
// let isStudent1 = true
//
// let name2 = "Bakyt"
// let age2 = 18
// let isStudent2 = true
//
// const user1 = [123423, 223, 323, 42, 'asd', true, null, undefined]
// for (const elem of user1) {
//     console.log(elem, 'elem')
// }
//
// const users = [
//     {
//         name: "Bakyt",
//         age: 18,
//         isStudent: true,
//     },
//     {
//         name: "Kuban",
//         age: 18,
//         isStudent: false,
//     },
//     {
//         name: "Altyn",
//         age: 18,
//         isStudent: true,
//     },
//     {
//         name: "Nurman",
//         age: 18,
//         isStudent: true,
//     },
//
// ]
// for (const person of users) {
//     console.log('name', person['name'], 'age', person['age'], 'isStudent', person['isStudent'])
//     console.log(`name=${person['name']}, age=${person['age']}, isStudent=${person['isStudent']}`)
// }
// let names = []
// for (const person of users) {
//     names.push(person['name'])
// }
// console.log(names)
//
// let num1 = Number(prompt('num1'))
// let num2 = Number(prompt('num2'))
// let operator = prompt('operator')
//
// switch (operator) {
//     case '+':
//         console.log(num1 + num2)
//         break;
//     case '-':
//         console.log(num1 - num2)
//         break;
//     case '*':
//         console.log(num1 * num2)
//         break;
//     case '/':
//         console.log(num1 / num2)
//         break;
//     default:
//         console.log('error')
// }

const user5 = {
    name: "Bakyt",
    age: 18,
    isStudent: true,
    surname: 'Sariev',
    school: [
        {
            name: 'Bishkek'
        },
        {
            name: 'Kant'
        },
        {
            name: 'Tokmok'
        },
    ]
}

console.log(user5.name)
console.log(user5.surname)
console.log(user5.age)
for (const school of user5.school) {
    console.log(school.name)
}



const user6 = {
    isTeacher: true,
}
const user4 = {
    name: "Kuban",
    age: 28,
}

const user7 = {
    user5,
    user6
}

console.log(user7,' user7')

const user8 = {
    ...user5,
    ...user6,
}

console.log(user8,' user8')

const user9 = {
    ...user4,
}
console.log(user9,' user9')
