//2
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(Math.floor(Math.random()*100)), 3000);

});
promise.then(result => console.log(result))
//3
function delaypromises(delay) {
    return  new Promise( (resolve) => {setTimeout(() => resolve(Math.floor(Math.random()*100)),delay)})
}
let results = [
 delaypromises(4000),
 delaypromises(5000),
 delaypromises(6000)
]
Promise.all(results).then(result => console.log(result))
//4
let pr = new Promise((res,rej) => {
    rej('ku')
})

pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))
//5
let prom = new Promise((res,rej) => {
    setTimeout(()=>res(21), 7000)
})

prom
        .then(function (result){
            console.log(result)
            return 2* result
        })
        .then(function (result){
            console.log(result)
        })

//6
    setTimeout(async ()=> {
        let result = await prom
        console.log(result)
        console.log(result * 2)
    }, 8000)


