function makeCounter() {
    let currentCount = 1

    return function() {
        return currentCount++
    }
}

let counter = makeCounter()

alert(counter())
alert(counter())
alert(counter())

let counter2 = makeCounter()
alert(counter2())

////////////////////////////////

let curCount = 1

function makeCounter2() {
    return function() {
        return curCount++
    }
}

let counter3 = makeCounter2()
let counter4 = makeCounter2()

alert(counter3())
alert(counter3())

alert(counter4())
alert(counter4())



//2

function findVolume(l) {
    return (w) => {
        return (h) =>{
            return l * w * h
        }
    }
}

console.log(findVolume(4)(2)(5))


function findVolume1(l) {
    return (w, h) => {
        return l * w * h
    }
}

const Vl = findVolume1(3)
console.log(Vl(4, 2))
console.log(Vl(6, 9))
console.log(Vl(1, 3))

//3

let cords = {x: 0, y: 0}
function* Movement(dir){
    yield cords
    for(let i = 0; i<10; i++){
        dir = prompt("Введите направление")
        switch (dir) {
            case "up":
                ++cords.y
                console.log(cords)
                break;
            case "down":
                --cords.y
                console.log(cords)
                break;
            case "right":
                ++cords.x
                console.log(cords)
                break;
            case "left":
                --cords.x
                console.log(cords)
                break
            default:
                break;
        }
    }
    return cords
}

let move = Movement()
let crds = move.next()
console.log(JSON.stringify(crds))
crds = move.next()
console.log(JSON.stringify(crds))

//4.................................................

var a = 5
let b = 2
alert(window.a)
alert(window.b)
window.alert(window.makeCounter)
window.a = 7
alert(window.a)