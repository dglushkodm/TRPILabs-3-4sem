function Strip(x: string| number) {
    if(typeof x === 'number'){
        return x.toFixed(2)
    }
    return x.trim()
}

class Myresponce{
    header = 'responce header'
    result = 'responce result'
}

class Myerror{
    header = 'error header'
    message = 'error message'
}

function handle(res: Myresponce| Myerror) {
    if(res instanceof Myresponce){
        return{
            info: res.header + res.result
        }
    } else{
        return{
            info: res.header + res.message
        }
    }
}


type AlertType = 'alert'|'sucsess'|'warning'

function SetalertTYpe(type: AlertType) {

}
SetalertTYpe('sucsess')
SetalertTYpe('warning')
//SetalertTYpe('ransom')



