function Strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
var Myresponce = /** @class */ (function () {
    function Myresponce() {
        this.header = 'responce header';
        this.result = 'responce result';
    }
    return Myresponce;
}());
var Myerror = /** @class */ (function () {
    function Myerror() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return Myerror;
}());
function handle(res) {
    if (res instanceof Myresponce) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function SetalertTYpe(type) {
}
SetalertTYpe('sucsess');
SetalertTYpe('warning');
//SetalertTYpe('ransom')
