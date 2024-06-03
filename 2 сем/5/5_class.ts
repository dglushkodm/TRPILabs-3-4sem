class TypeScript{
    version: string
    constructor(version: string) {
        this.version= version
    }
    info(name: string){
        return `[${name}]: version is ${this.version}`
    }
}

class Car{
    readonly model: string
    readonly numwhels: number = 4

    constructor(thimodel: string) {
        this.model = thimodel
    }
}

class Car2{
    readonly numwhels: number = 4
    constructor(readonly model: string) {
        this.model = model
    }
}

class Animal{
    protected voice: string =''
    public color: string = 'black'

    private go(){
        console.log('Go')
    }
}
class Cat extends Animal{
    public  setVoice(voice:string): void{
        this.voice = voice
    }
}
 const cat = new Cat()
cat.setVoice('meaw')
console.log(cat.color)

abstract class Component{
    abstract render(): void
    abstract rinfo(): string
}

class Appcomponent extends Component{
    render(): void {
        console.log('render')
    }
    rinfo(): string {
        return 'info'
    }
}