//1
let numbers = [1, 2, 3, 4, 5];
let [y] = numbers;
console.log(y);

//2
let user = {name: "Denis", age: 18};
let admin = {isAdmin: false, ...user};
console.log(admin);
//3
let store = {
    state:{
        profilePage:{
            posts:[
                {id: 1, message: "Hi", likesCount:12},
                {id: 2, message: "By", likesCount: 1},
            ],
            newPostText: "About me",
        },
        dialogsPage:{
            dialogs:[
                {id: 1, name:"Valera"},
                {id: 2, name: "Andrey"},
                {id: 3, name:"Sasha"},
                {id: 4, name: "Viktor"},
            ],
            messages:[
                {id: 1, message: "hi"},
                {id: 2, message: "hi hi"},
                {id: 3, message: "hi hi hi"},
            ],
        },
        sidebar:[],
    },
};

const {state:{profilePage:{posts}}} = store
console.log(posts);
posts.forEach(posts => console.log(posts.likesCount));


const filtered = store.state.dialogsPage.dialogs.filter(dialogs => dialogs.id % 2 === 0)
console.log(filtered);

store.state.dialogsPage.messages.map(function(message){
    message.message = "Hello user";
})
console.log(store.state.dialogsPage.messages);
//4
let tasks = [
    {id: 1, title:"HTML&CSS", isDone: true},
    {id: 2, title:"JS", isDone: true},
    {id: 3, title:"ReactJS", isDone: false},
    {id: 4, title:"Rest API", isDone: false},
    {id: 5, title:"GraphQL", isDone: false},
];

let update = [...tasks, {id:6, title:"C++", isDone: true},];
console.log(update);
//5
function sum(x, y, z) {
    return x + y + z;
}
const number = [1, 2, 3];
console.log(sum(...number));
