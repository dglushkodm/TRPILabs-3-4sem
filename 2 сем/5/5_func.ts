function add(a:number, b:number): number {
    return a+b
}
function toupper(str:string):string {
    return str.trim().toUpperCase()
}
interface Myposition {
    x: number|undefined
    y: number|undefined
}
interface MypositionDefault extends Myposition{
    default: string
}
function position(): Myposition
function position(a: number): MypositionDefault
function position(a: number, b: number): MypositionDefault

function position(a?: number,b?: number) {
     if(!a && !b) {
         return {x: undefined, y: undefined}
     }
     if(a && !b) {
     return {x: a, y: undefined, default: a.toString()}
     }
     return {x:a,y:b}
}
console.log('Empty', position())
console.log('One', position(42))
console.log('Two', position(42,56))