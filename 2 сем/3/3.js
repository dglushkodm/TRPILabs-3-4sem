function Phone(numb) {
    if (numb.length != 10)
        return '0';
    var p1 = numb.slice(0, 3).join('');
    var p2 = numb.slice(3, 6).join('');
    var p3 = numb.slice(6).join('');
    return "(" + p1 + ")" + p2 + "-" + p3;
}
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var phoneNumber = Phone(numbers);
console.log(phoneNumber);
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (num) {
        if (num < 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 1; i <= num; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
var number = 15;
console.log(Challenge.solution(number));
var numbss = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var k = 3;
for (var kk = 0; kk < k; kk++) {
    var buf = numbss[numbss.length - 1];
    for (var i = numbss.length - 1; i >= 0; i--) {
        numbss[i] = numbss[i - 1];
        if (i === 0)
            numbss[i] = buf;
    }
}
console.log(numbss);
var mas1 = [20, 5, 3];
var mas2 = [7, 6, 8];
var mas3 = mas1.concat(mas2);
console.log(mas3.sort(function (a, b) { return a - b; }));
mas3 = mas3.sort(function (a, b) { return a - b; });
if (mas3.length % 2) {
    console.log(mas3[Math.floor(mas3.length / 2)]);
}
else {
    console.log((mas3[mas3.length / 2] + mas3[mas3.length / 2 - 1]) / 2);
}
var num = [1, 2, 3, 4, 5];
var y = num[0];
console.log(y);
