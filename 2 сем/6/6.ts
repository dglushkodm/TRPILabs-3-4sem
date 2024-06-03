//1
type id = number
type name = string
type group = number
type arrayel = {id:id, name:name, group:group}
const array: arrayel[] = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]
//2
type CarsType = {
    model?: string;
    manufacturer?: string;
}
type ArrayCarsType = {cars:CarsType[]}

let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';

//3
const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

//4
type MarkFilterType = 1|2|3|4|5|6|7|8|9|10
type DoneType = boolean
type GroupFilterType = MarkFilterType|11|12
type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}
type studentsArray = Array<StudentType>
type GroupType = {
    students: studentsArray,// массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}



let Stud1: StudentType={
    id:4,
    name: "Andy",
    group: 7,
    marks: [
        {subject: "AISD", mark:4, done:true},
        {subject: "TEORVER", mark:7, done:true},
        {subject: "OOP", mark:2, done:false}
    ]
}
let Stud2: StudentType={
    id:2,
    name: "Denis",
    group: 4,
    marks: [
        {subject: "AISD", mark:10, done:true},
        {subject: "TEORVER", mark:7, done:true},
        {subject: "OOP", mark:10, done:true}
    ]
}
let Group1:GroupType = {
    students: new Array<StudentType>(Stud1,Stud2),
    studentsFilter: (group: number) => {
        let arr:Array<StudentType> = Group1.students.filter((stud: StudentType) => stud.group === group);
        return arr

    },
    marksFilter: (markk: number) => {
        let arr:Array<StudentType> = Group1.students.filter((stud:StudentType)=> {
            stud.marks.filter((mark) => mark.mark === markk)
            return stud.marks.filter((mark) => mark.mark === markk).length === 1 //stud.marks.length
        })
        return arr
    },
    deleteStudent:(id: number) => {
        Group1.students = Group1.students.filter((stud)=> stud.id != id)
    },
    mark: 5,
    group:12
}

console.log("Фильтр студентов")
console.log(Group1.studentsFilter(4))
console.log("Фильтр студентов по оценке")
console.log(Group1.marksFilter(7))
Group1.deleteStudent(4)
console.log("Список студентов после удаления")
console.log(Group1.students)