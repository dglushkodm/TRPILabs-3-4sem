var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[" + name + "]: version is " + this.version;
    };
    return TypeScript;
}());
var Car = /** @class */ (function () {
    function Car(thimodel) {
        this.numwhels = 4;
        this.model = thimodel;
    }
    return Car;
}());
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.numwhels = 4;
        this.model = model;
    }
    return Car2;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('meaw');
console.log(cat.color);
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var Appcomponent = /** @class */ (function (_super) {
    __extends(Appcomponent, _super);
    function Appcomponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Appcomponent.prototype.render = function () {
        console.log('render');
    };
    Appcomponent.prototype.rinfo = function () {
        return 'info';
    };
    return Appcomponent;
}(Component));
