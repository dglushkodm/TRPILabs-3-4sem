var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
//3
var car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
var Stud1 = {
    id: 4,
    name: "Andy",
    group: 7,
    marks: [
        { subject: "AISD", mark: 4, done: true },
        { subject: "TEORVER", mark: 7, done: true },
        { subject: "OOP", mark: 2, done: false }
    ]
};
var Stud2 = {
    id: 2,
    name: "Denis",
    group: 4,
    marks: [
        { subject: "AISD", mark: 10, done: true },
        { subject: "TEORVER", mark: 7, done: true },
        { subject: "OOP", mark: 10, done: true }
    ]
};
var Group1 = {
    students: new Array(Stud1, Stud2),
    studentsFilter: function (group) {
        var arr = Group1.students.filter(function (stud) { return stud.group === group; });
        return arr;
    },
    marksFilter: function (markk) {
        var arr = Group1.students.filter(function (stud) {
            stud.marks.filter(function (mark) { return mark.mark === markk; });
            return stud.marks.filter(function (mark) { return mark.mark === markk; }).length === 1; //stud.marks.length
        });
        return arr;
    },
    deleteStudent: function (id) {
        Group1.students = Group1.students.filter(function (stud) { return stud.id != id; });
    },
    mark: 5,
    group: 12
};
console.log("Фильтр студентов");
console.log(Group1.studentsFilter(4));
console.log("Фильтр студентов по оценке");
console.log(Group1.marksFilter(7));
Group1.deleteStudent(4);
console.log("Список студентов после удаления");
console.log(Group1.students);
