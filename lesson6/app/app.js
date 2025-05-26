console.log('Hello, world!');

let customer = 'John';
let customerName = 'Bakyt';
let customer_name = 'Kuban';
let customerSurname = 'Sariev';
let $ = '12'
let $num = '12'
let _num = 12
let num123 = 123
// let 45 =sdfg
// let 234wdfwe= wdw
// let var = 123
let age = 18
console.log('Имя=', 'customer', ' ', 'Фамилия=', customerSurname, 'Возраст=', age);
console.log(`Имя=${customer}, Фамилия=${customerSurname}, Возраст=${age}`);
// console.log("ОАО "Северэлектро"")
console.log("ОАО \"Северэлектро\"")
let file = 'd:\\data\\profile.txt'
console.log(file)
let number = 123
let number1 = 3.14
console.log(number)
number = 500
console.log(number)
const number2 = 123
// number2 = 500
let a = 10
let b = 4
console.log('a=', a, 'b=', b)
console.log(a + b, '+')
console.log(a - b, '-')
console.log(a * b, '*')
console.log(a / b, '/')
console.log(a % b, '%')
console.log(5 % 2, '5%')
console.log(4 % 2, '4%')
console.log(a ** b, '**')
console.log(a / 0 + 1000000000000000000)
console.log(0 / a)
console.log(654654654654 + 'asd%')
console.log("654654654" + 210)
console.log(654654654 + 210)
console.log('654654654' + '210')
console.log(12123 * '210')
console.log('12123' * 210)
console.log('12123q' * '210')
a = 10
b = '10'
console.log(a > b, 'a>b')
console.log(a < b, 'a<b')
console.log(a >= b, 'a>=b')
console.log(a <= b, 'a<=b')
console.log(a == b, 'a==b')
console.log(a === b, 'a===b')
console.log(a !== b, 'a!==b')
console.log(a != b, 'a!=b')
console.log(true && false, '&& и')
console.log(true || false, '|| или')
console.log(!true, '! НЕ')
console.log((true && false) || true)
console.log(!(true && false) && true)
console.log(0 || 'awda')
let x = 5
x = x + 3 //x+=3
console.log(x, '8')
x -= 2
console.log(x, '6')
x *= 4
console.log(x, '24')
x /= 2
console.log(x, '12')
x %= 2
console.log(x, '0')

let y = 1
console.log(y++)
console.log(y--)
console.log(y)
let by = 1
console.log(++by)
console.log(--by)

console.log(typeof y)
console.log(typeof 'y')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)

let df
console.log(df)
let dfd = 34
console.log(dfd)
let empty = null
console.log(typeof empty)
console.log(typeof {})

// let color = prompt('сколько вам лет')
// console.log(color, 'age')
// console.log(typeof age1,'typeof age')

// if (false) {
//     console.log('true')
// } else {
//     console.log('false')
// }
// if (age1 > 1000) {
//     console.log('Вы бесмертный')
// } else if (age1 > 18) {
//     console.log('Вы совершеннолетний')
// } else if (age1 > 0) {
//     console.log('Вы не совершеннолетний')
// } else {
//     console.log('вы не правильно указали возраст')
// }
// let color = prompt('цвет')
//
// switch (color) {
//     case 'red': console.log('цвет red');
//     break;
//     case 'green': console.log('цвет green');
//     break;
//     case 'blue': console.log('цвет blue');
//     break;
//     default: console.log('нет такого цвета');
// }




// if (color==='red') {
//     console.log('red')
// }

// console.log(10>20 ? 'true' : 'false')

let lesson= ''

console.log(lesson  ? lesson : '0')

console.log(!lesson && '6')

console.log(lesson ?? '000000')

// for (let i = 0 ; i<10; )

let array = [1,2,3,4,5 , '123123', true, false, null, undefined]
// console.log(array[5])
// console.log(array.length)
// console.log(array[array.length-1])
// console.log(array.length-1)
//
// array[4]=6
//
// console.log(array)
// let pop = array.pop() //конец
// let shift = array.shift() //start
// let push = array.push(6) //end
// let unshift = array.unshift('1111') //start
// // ['1111',2,3,4,5 , '123123', true, false, null,6 ]
// console.log(array)
//
// console.log(array[array.indexOf('123123')])
// console.log(array[array.indexOf(true)])
//
// console.log(array.lastIndexOf(6))

console.log(array.includes(423423423))
let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr)
console.log('0,7',arr.slice(0,7))
console.log('7,7',arr.slice(7,9))
console.log('-2',arr.slice(-2))
console.log(arr.reverse())
let arr2= [1,5,9,7,6,54,3,1,4,6,7,9,1,3]
console.log(arr2.sort())
console.log(arr2.sort((a,b)=>a-b))
console.log(arr2.join(', '))
console.log('способности', arr2.slice(0,5).join(', '))
console.log('способности', arr2.reverse().slice(0,5).join(', '))
let array123= [12,23,34]
let array456= [64,55,46]
let arr123456 = [array123,array456]
console.log(arr123456)
let arr1234562222 = [...array123,...array456]
console.log(arr1234562222)

for (let i = 0; i<arr1234562222.length; i++) {
    console.log('индекс=',i, arr1234562222[i])
}


let i = 0;
//while (i<arr1234562222.length) {
//       console.log('индекс=',i, arr1234562222[i])
//      i++
//  }

let ii = arr1234562222.length;
while (ii>=0) {
      console.log('индекс=',ii, arr1234562222[ii])
    ii--
 }

 for (let element of arr1234562222) {
     console.log(element)
 }

 for (let i=0; i<arr1234562222.length; i++) {
     if (i%2===0) console.log(i,' ',arr1234562222[i])
 }

for (let i=0; i<arr1234562222.length; i++) {
    if (arr1234562222[i]%2!==0) console.log(i,' ',arr1234562222[i])
}