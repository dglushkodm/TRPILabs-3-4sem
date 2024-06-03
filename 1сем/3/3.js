//1
function Arrcon(arr) {
    return arr.reduce((acc, cur) => acc.concat(/*Array.isArray(cur) ? Arrcon(cur) :*/ cur), [])
}
let arr = [1, [1, 2, [3, 4]], [2, 4]]
let Arr = Arrcon(arr)
alert(Arr)

//2
function Arrcon2(arr) {
    let arrpr =  arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? Arrcon2(cur) : cur), [])
    return arrpr.reduce((sum, el) => sum + el, 0)
}
let arr2 = [1, [1, 2, [3, 4]], [2, 4]]
let Arr2 = Arrcon2(arr2)
alert(Arr2)

//3
let students =[
    {name: 'Denis', groupId: 4, age: 18},
    {name: 'Andrei', groupId: 5, age: 19}
];


const Only18 = (students) =>
    students.reduce(
        (acc, student) =>
            student.age < 18
                ? acc
                : acc[student.groupId]
                ? acc[student.groupId].push(student)
                : (acc[student.groupId] = [student]) && acc,
        {}
    );
let ress = {}
ress = Only18(students)
alert(ress)
console.log(ress)

//4
let str = 'ABC'
function fun4(str) {
    let total1 = str.split('').map(el => el.charCodeAt(0)).join('');
    let total2 = total1.replace(7,1)
    return total1 - total2
}
alert(fun4(str))

//5
function ex(ob, ... obN){
    let newArr = Object.assign(ob,... obN)
    return newArr
}

let result = ex({a: 1, b: 2}, {c: 3})
console.log(result)

//6
function Pyramid(rows)
{
    let pir = ''
    for (let i = 0; i < rows; i++) {
        let output = '';
        for (let j =0; j < rows - i; j++)
            output += ' ';
        for (let k = 0; k <= i; k++)
            output += '* ';
        pir += output + '\n'
    }
    alert(pir);
}
Pyramid(12)