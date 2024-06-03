//1
let set = new Set()
function Add(set, a) {
    set.add(a)
}
function Delete(set, a) {
    set.delete(a)
}
function Find(set, a) {
    if(set.has(a))
        alert('есть')
    else
        alert('нету')
}
function Size(set){
    alert('размер сета:' + set.size)
}
let Pepsi ={name: 'pepsi'}
let Syrok = {name: 'syrok'}
let Apple = {name: 'apple'}
let Cola = {name: 'cocacolastik'}

Add(set, Syrok)
Add(set, Apple)
Add(set, Cola)
Delete(set, Cola)
Find(set, Apple)
Find(set, Pepsi)
Size(set)


//2
let setstud = new Set()

function Addstud(set, a) {
    set.add(a)
}
function Deletestud(set) {
    let numb = prompt('номер зачётки', '')
    for(let a of set) {
        if (a.num === numb)
            set.delete(a)
    }
}
function Filter(set) {
    let numb = prompt('номер группы', '')
    for(let a of set)
    {
        if (a.groupnum == numb) {
            alert(a)
            console.log(a)
        }
    }
}
function Sort(set) {
    let arr = Array.from(set)
    set.clear()
    arr.sort((a,b) => a.num > b.num ? 1 : -1)
    arr.forEach(el => set.add(el))
    console.log(set)
}

let Std3 ={name: 'Denis', num: 124578, groupnum: 4}
let Std2 = {name: 'Andrey', num: 124579, groupnum: 4}
let Std1 = {name: 'Roma', num: 124580, groupnum: 5}
let Std4 = {name: 'Maxon', num: 124581, groupnum: 6}

Addstud(setstud, Std1)
Addstud(setstud, Std2)
Addstud(setstud, Std3)
Addstud(setstud, Std4)
Filter(setstud)
Sort(setstud)
Deletestud(setstud)


//3
let nam;
let cost;
let amount;
let p = prompt("введите ключ, 0-остановить");
let good = {};
let m = new Map();

function rem(id){
    if(m.has(id)){
        m.delete(id);
    }
    else{
        alert("Элемента с таким id не существует");
    }
}

function deletebyname(name){
    for(item of m.keys()){
        let value = m.get(item);
        if(value.n == name){
            m.delete(item);
        }
    }
}

function changecost(id, cost){
    let value = m.get(id);
    if(value.cos){
        value.cos = cost;
    }
}

function changeamount(id, amount){
    let value = m.get(id);
    if(value.am){
        value.am = amount;
    }
}

function ad(k ,na, co, a){
    good = {};
    if(!m.has(k)){
        good = {
            n: na,
            cos: co,
            am: a
        };
        m.set(k, good);
    }
    else{
        alert("Неправильный ключ");
    }
}

function sumofgoods(){
    let sum = 0;
    let count = 0
    for(item of m.keys()){
        count++
        let value = m.get(item);
        sum += Number(value.cos);
    }
    alert("Сумма: "+sum+" количество: "+count);
}

while(p != 0){
    nam = prompt("Введите имя товара: ");
    cost = prompt("Введите цену товара: ");
    amount = prompt("Введите кол-во товара: ");
    good = {
        n : nam,
        cos: cost,
        am: amount
    };
    m.set(p, good);
    good = {};
    p = prompt("введите ключ, 0-остановить");
}

let choose = prompt("Введите функцию: ");
while (choose != 0) {

    if(choose == "удалить"){
        let id = prompt("Введите id товара который хотите удалить: ");
        rem(id);
        console.log(m);
    }

    if(choose == "добавить"){
        let id = prompt("Введите id: ");
        let n =  prompt("Введите название товара: ");
        let c =  prompt("Введите цену товара: ");
        let a =  prompt("Введите количество: ");
        ad(id, n, c, a);
        console.log(m);
    }

    if(choose == "удалить по имени"){
        let n =  prompt("Введите название товара: ");
        deletebyname(n);
        console.log(m);
    }

    if(choose == "изменить цену"){
        let id = prompt("Введите id: ");
        let c =  prompt("Введите цену товара: ");
        changecost(id, c);
        console.log(m);
    }

    if(choose == "изменить кол-во"){
        let id = prompt("Введите id: ");
        let a =  prompt("Введите количество: ");
        changeamount(id, a);
        console.log(m);
    }
    choose = prompt("Введите функцию: ");
}

sumofgoods();

//4

let cache = new WeakMap();
function calculateResult(input) {
    if (cache.has(input)) {
        console.log('Кэш');
        return cache.get(input);
    }
    console.log('Считаем');
    let result = input.data * input.data;
    cache.set(input, result);
    return result;
}
let input1 = {data: 22};
let result1 = calculateResult(input1);
let result2 = calculateResult(input1);
console.log(result1);
console.log(result2);