//1
function basicOperation(operation, value1, value2) {
    let result
    if(operation === '+'){
        result= value1 + value2
    }
    else if(operation === '-'){
        result= value1 - value2
    }
    else if(operation === '*'){
        result= value1 * value2
    }
    else if(operation === '/'){
        result= value1 / value2
    }
    else{
        result = 1
    }
    return result;
}

let result = basicOperation('*', 5, 10); 
alert(result)
//2
let n = 5
function fun2(n){
    let result2=0
    for(let i = 0; i <= n; i++){
        result2 = result2 + i*i*i
    }
    return result2
}
alert(fun2(n))

//3
let mass = [1,2,3,4,5];
let result3 = 0
function fun3(mass){
   for(let num of mass){
    result3 += num
   }
    result3 /= mass.length
    return result3
}

alert(fun3(mass))

//4
let o 
let str = "JavaScr53э? ipt"
function fun4(str){
    let result4 = str.replace(/[^a-z]/gi,'').split('').reverse().join('')
    o = function funx(){
        alert('12345')
    }
    return result4
}
alert(fun4(str))
alert(o())
//5
n = 5
strcop = str + ' '
function fun5(n, str, strcop){
    for(i = 1; i < n; i++){
        strcop += str + ' '
    }
    return strcop
}

alert(fun5(n, str, strcop))

//6
let arr1 = ['iybida', 'qwerty', 'ytrewq']
let arr2 = ['qwerty', 'rtyyu', '12354']
function fun6(arr1, arr2){
    let arr3 =[]
    for(i = 0; i < arr1.length; i++){
        for( let j = 0; j< arr2.length; j++){
            if(arr1[i] === arr2[j]){
                delete arr1[i]
            }

        }
    }
    for(i = 0; i < arr1.length; i++){
        if(arr1[i] != null){
            arr3.push(arr1[i])
        }
    }
    return arr3
}

alert(fun6(arr1, arr2))