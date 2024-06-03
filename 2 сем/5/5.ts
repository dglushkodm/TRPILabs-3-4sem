const istrue: boolean = true
const iffalse: boolean = false

const int:number =78
const float:number =7.8
const num:number =7e10

const message: string ='bstu'

const numArray: number[] = [1,2,3,4,5]
const numArray2: Array<number> = [1,2,3,4,5]

const words: string[] = ['Rizu','Kita']

//tuple
const contact: [string, number] = ['Ui Hirasawsa', 23432]

//Any
let variable: any = 34
variable = 'string'

function  saymyname(name: string): void {
    console.log(name)
}
saymyname('andrei')

//never
function error(meserr: string): never{
    throw new Error(meserr)
}
function inf():never {
    while (true){}
}

//type
type Login = string
let login: Login = 'string'

type ID = string | number
let id: ID = 'IUHG'
id = 56

type  sometype = string|null|undefined
