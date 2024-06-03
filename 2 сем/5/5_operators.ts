interface Person {
    name: string
    age: number

}

type PersonKeys = keyof Person
let key: PersonKeys ='name'
key =  'age'
//key = 'fage'
 type User = {
     id: number
     name: string
     email: string
     createdAt: Date

 }

 type UseeKeys = Exclude<keyof User, 'id'| 'cretedAt'>
 type UseeKeys2 = Pick<User, 'name'| 'email'>