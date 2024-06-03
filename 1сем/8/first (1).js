let  user = {
    name: 'Masha',
    age: 21
};
let deepUserClone = JSON.parse(JSON.stringify(user));
console.log(deepUserClone);
let numbers = [1, 2, 3];
let deepNumbersClone = JSON.parse(JSON.stringify(numbers));

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};
let deepUser1Clone = JSON.parse(JSON.stringify(user1));

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};
let deepUser2Clone = JSON.parse(JSON.stringify(user2));

const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]
let deepArrayClone = JSON.parse(JSON.stringify(array));

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};
let deepUser4Clone = JSON.parse(JSON.stringify(user4));

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};
let deepUser5Clone = JSON.parse(JSON.stringify(user5));
deepUser5Clone.studies.department.group = 12;
deepUser5Clone.studies.exams[1].mark = 10;
console.log(deepUser5Clone);

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};
let deepUser6Clone = JSON.parse(JSON.stringify(user6));
deepUser6Clone.studies.exams[0].professor.name = 'Mr.J';
deepUser6Clone.studies.exams[1].professor.name = 'Mr.G';
console.log(deepUser6Clone);

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
        { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		    }
	    },
        { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
        ]
    }
};
let deepUser7Clone = JSON.parse(JSON.stringify(user7));
deepUser7Clone.studies.exams[1].professor.articles[1].pagesNumber = 3;
console.log(deepUser7Clone);
let store = {
    state:{
        profilePage:{
            posts:[
                {id: 1, message:"Hi", likesCount:12},
                {id: 2, message:"By", likesCount:1},
            ],
            newPostText:'About me',
        },
        dialogsPage:{
            dialogs:[
                {id:1, name:'Valera'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sasha'},
                {id:4, name:'Viktor'},
            ],
            messages:[
                {id:1, message:'hi'},
                {id:2, message:'hi hi'},
                {id:3, message:'hi hi hi'},
            ],
        },
        sidebar: [],
    },
}
let deepStoreClone = JSON.parse(JSON.stringify(store));
for (let i = 0; i < deepStoreClone.state.dialogsPage.messages.length; i++) {
    deepStoreClone.state.dialogsPage.messages[i].message = 'Hello';
}
console.log(deepStoreClone);