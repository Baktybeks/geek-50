console.log('Hello 8')

function greet() {
    return console.log('function Hello 8')
}

greet()
greet()
greet()
greet()
greet()

function sum(a, b) {
    return a + b
}

console.log(sum(1, 2))
console.log(sum(10, 20))
console.log(sum(81, 8))

function greet1(name) {
    return console.log(`hi ${name}`)
}

greet1('Bakyt')
greet1()

function greet3(name = 'User') {
    return console.log(name)
}

greet3('Bakyt')
greet3()
console.log(stepen(2, 3), 'stepen')

function stepen(a, b) {
    return a ** b
}

console.log(stepen(2, 3))
console.log(stepen(2, 4))
console.log(stepen(2, 5))

function stepen2(a, b) {
    a ** b
}

console.log(stepen2(2, 3))
// console.log(findAverage(numbers))

const findAverage = function (arr) {
    let sum = 0
    for (const elem of arr) {
        sum += elem
    }
    return sum / arr.length
}

const numbers = [1, 2, 3, 4, 5, 9]

console.log(findAverage(numbers))

const greet5 = () => {
    console.log('Hello 5')
}

const square = x => {
    return x * x
}

greet5()

console.log(square(5))


const square2 = x => {
    x * x
}

console.log(square2(5))

const square3 = (a, b) => {
    return a * b
}

console.log(square3(5, 10))

const square4 = (a, b) => a * b

console.log(square4(55, 10))

// const findAverage = function (arr) {
//     let sum = 0
//     for (const elem of arr) {
//         sum += elem
//     }
//     return sum / arr.length
// }
// console.log(dd, 'dd')
// var dd = 5
// console.log(ss, 'ss')
// let ss = 5
// console.log(aa, 'aa')
// const aa = 9
//
// const asd = 6
// const findAverage2 = (arr) => {
//     let summ = 0
//     for (const elem of arr) {
//         summ += elem
//     }
//     console.log(asd)
//     return sum / arr.length
// }
// console.log(asd)
//
// if (true) {
//     const asdf = 6
//     console.log(asdf)
// }
//
// console.log(asdf)
//
// console.log(summ)
//
// console.log(findAverage2(numbers))
//

const relative = {
    name: 'Viktor',
    children: [
        // {
        //     name: 'Viktor11',
        //     children: [
        //         {
        //             name: 'Viktor11',
        //             children: []
        //         }
        //     ]
        // },
        {
            name: 'Viktor1',
            children: [
                {
                    name: 'Viktor2',
                    children: [
                        {
                            name: 'Viktor3',
                            children: [
                                {
                                    name: 'Viktor4',
                                    children: [
                                        {
                                            name: 'Sasha',
                                            children: [
                                                {
                                                    name: 'Sasha2',
                                                    children: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

for (const child of relative.children) {
    console.log(child.name)
    for (const child1 of child.children) {
        console.log(child1.name)
        for (const child2 of child1.children) {
            console.log(child2.name)
        }
    }
}

function showChildren(obj) {
    obj.children.forEach(child => {
        console.log(`${obj.name} => ${child.name}`)
        showChildren(child)
    })
}

showChildren(relative)

function input(callback) {
    const name = 'Бактыбек'
    callback(name)
}

input(
    function (name) {
        console.log(`Привет ${name} !`)
    }
)

const numbers2 = [122, 22, 3, 43, 5, 9]
numbers2.sort((a, b) => b - a)
console.log(numbers2)

const fruits = ['banana', 'apple', 'orange']

fruits.forEach(function (fruit, index) {
    console.log(index, fruit)
})

fruits.forEach((fruit, index) => {
    console.log(index, fruit)
})

const users = [
    {
        name: 'Bakyt',
        age: 18,
    },
    {
        name: 'Kuban',
        age: 28,
    },
    {
        name: 'Altyn',
        age: 8,
    },
    {
        name: 'Altyn',
        age: 8,
    }
]

for ( let user of users) {
    if (user.age >=18) {
    console.log(user.name)
    }
}