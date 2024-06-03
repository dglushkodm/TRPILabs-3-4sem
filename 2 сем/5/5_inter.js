var rect1 = {
    id: '4353',
    size: {
        width: 3,
        height: 4
    }
};
rect1.color = '234';
var rect2 = {};
var rect3 = {};
var rect5 = {
    id: '34324',
    size: {
        width: 45,
        height: 90
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: "1 px",
    marginTop: '2px'
};
