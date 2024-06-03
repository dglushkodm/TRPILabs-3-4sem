function Phone(numb: number[]): string {
    if(numb.length != 10) return '0';
    let p1 = numb.slice(0, 3).join('');
    let p2 = numb.slice(3, 6).join('');
    let p3 = numb.slice(6).join('');
    return `(${p1})${p2}-${p3}`;
}
let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let phoneNumber: string = Phone(numbers);
console.log(phoneNumber);

class Challenge {
    static solution(num: number) {
        if (num < 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    }
}
const number = 15;
console.log(Challenge.solution(number));

let numbss: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let k = 3
for (let kk = 0; kk < k;kk++) {
    let buf = numbss[numbss.length-1]
    for (let i = numbss.length-1; i >=0; i--) {
        numbss[i] = numbss[i-1]
        if(i === 0)
            numbss[i] = buf
    }
}
console.log(numbss)

let mas1: number[] = [20,5,3]
let mas2: number[] = [7,6,8]
let mas3: number[] = mas1.concat(mas2)
console.log(mas3.sort((a,b)=> a - b))
mas3= mas3.sort((a,b)=> a - b)
if(mas3.length % 2){
    console.log(mas3[Math.floor(mas3.length/2)])
}
else{
    console.log((mas3[mas3.length/2] + mas3[mas3.length/2 - 1])/2)
}

const num = [1,2,3,4,5];
const [y] = num;
console.log(y)

