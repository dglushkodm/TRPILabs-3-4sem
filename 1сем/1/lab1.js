
let a = 5
let name1 = "Name"
let i = 0
let double = 0.23
let result = 1/0
let answer = true
let no = null
alert(typeof a)
alert(typeof name1)
alert(typeof i)
alert(typeof double)
alert(typeof result)
alert(typeof answer)
alert(typeof no)
//2
const rect = Math.trunc(45 /5) * Math.trunc(21 / 5)
alert(rect)
//3
i=2
a = i++
b= ++i
alert(a===b)
//4
alert("Котик" > "котик" ? true : false)//f
alert("Котик" > "китик" ? true : false)//f
alert("Котик" > "Кот" ? true : false)//f
alert("Привет" > "Пока" ? true : false)//t
alert(73 > "53" ? true : false)//t
alert(false == 0 ? true : false)//t
alert(54 == true ? true : false)//f
alert(123 == false ? true : false)//f
alert("3" == true ? true : false)//f
alert(3 == "5мм" ? true : false)//f
alert(8 > "-2" ? true : false)//t
alert(34 == "34" ? true : false)//t
alert(null == undefined ? true : false)//t


//5 
    const teacherName = 'марина'
    const teacherLastName = 'кудлацкая'
    const teacherSecondName = 'фёдоровна'
    const name = prompt("введите ФИО")

    if (name){
        let isMatch;
        const nameParts = name.split(' ').map(el => el.toLowerCase());
        if (nameParts.length === 1){
            isMatch = teacherName === nameParts[0]
        }

        if (nameParts.length === 2){
            isMatch = teacherName === nameParts[0] && teacherSecondName === nameParts[1]
        }

        if (nameParts.length === 3){
            isMatch = teacherLastName === nameParts[0] && teacherName === nameParts[1] && teacherSecondName === nameParts[2]
        }

        if (isMatch){
            alert("совпадает")
        }

    }
    alert("не совпадает")


//6
let mathMark = prompt("Введите оценку по математике");
let engMark = prompt("Введите оценку по английскому");
let rusMark = prompt("Введите оценку по русскому");

if (mathMark >= 4 && engMark >= 4 && rusMark >= 4) {
    alert("Вы прошли на следующий курс");
} else if (mathMark < 4 && engMark < 4 && rusMark < 4) {
    alert("Вас отчислят");
} else {
    alert("Пересдача");
}

//7

alert(true + true); //2
alert(0 + "5"); // "05"
alert(5 + "мм"); // "5mm"
alert(8 / Infinity);// 0
alert(9 * "\n9");//81
alert(null - 1);//-1
alert("5" - 2);//3
alert("5px" - 3);//nan
alert(true - 3);//-2
alert(7 || 0);//7

//8
for (let i = 1, b = 0; i <= 10; i++){
    b = i;

    if (i % 2 === 0) {
        alert(Number(b) + 2);
    } else {
        alert(i + "мм");
    }
}

//9
let days = ['пн','вт','ср','чт','пт','сб','вс']
let daysObj ={
    '1':'пн',
    '2':'вт',
    '3':'ср',
    '4':'чт',
    '5':'пт',
    '6':'сб',
    '7':'вс'
}

const dayNumber = prompt("введите номер дня")
if (dayNumber > 0 && dayNumber <8) {
    alert(days[dayNumber-1])
    alert(daysObj[dayNumber])
}
else{
    alert("неверный ввод")
}

//10
function printParams(Param, userParam, defaultParam = 'default'){
    alert(userParam+defaultParam+Param)
}

printParams("Параметр",prompt("введите параметр"))

//11

function params1(a, b) {
    if(a === b) return (a+b)*2;
    return a*b;
}

const params2 = function (a, b) {
    if(a === b) return (a+b)*2;
    return a*b;
}

const params3 = (a, b) =>{
    if(a === b) return (a+b)*2;
    return a*b;
}
alert(params1(1,2))
alert(params2(1,1))
alert(params3(2,3))
