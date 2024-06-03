interface Rect {
    readonly id: string
    color?: string
    size:{
        width:number
        height: number
    }

}
const rect1:Rect ={
    id: '4353',
    size:{
        width: 3,
        height: 4
    }
}
rect1.color = '234'

const rect2  = { } as Rect
const rect3 = <Rect>{}

interface RectArea extends Rect{
        getArea: () => number
}
const rect5: RectArea ={
    id: '34324',
    size:{
        width:45,
        height:90
    },
    getArea(): number{
        return this.size.width * this.size.height
    }
}

interface  IClock {
    time: Date
    setTime(date: Date): void
}
class Clock implements IClock{
    time:Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}


interface Styles{
    [key: string]: string

}
const css: Styles ={
    border: "1 px",
    marginTop: '2px'
}