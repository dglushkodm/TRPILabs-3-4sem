//1
let products = {
    shoes:{
        boots:[
            {id: 1, cost:30, size: 40, color: "green"},
            {id: 2, cost:60, size: 45, color: "blue"},
            {id: 3, cost:20, size: 42, color: "red"},
            {id: 4, cost:10, size: 43, color: "black"},
            {id: 5, cost:100, size: 46, color: "white"},
        ],
        sneackers:[
            {id: 1, cost:60, size: 46, color: "blue"},
            {id: 2, cost:20, size: 43, color: "red"},
            {id: 3, cost:100, size: 46, color: "white"},
            {id: 4, cost:150, size: 38, color: "white"},
            {id: 5, cost:70, size: 41, color: "green"},
        ],
        sandals:[
            {id: 1, cost:20, size: 42, color: "blue"},
            {id: 2, cost:10, size: 43, color: "green"},
            {id: 3, cost:5, size: 46, color: "red"},
            {id: 4, cost:15, size: 45, color: "black"},
            {id: 5, cost:25, size: 39, color: "white"},
        ],
    },
};
let {
    shoes:{
        boots, sneackers, sandals
    },
} = products;
let result2 = []
result2 = [...boots, ...sneackers, ...sandals];
function filter2(cos, siz, col){
    let filtResult = result2.filter(function(b){
        return b.cost == cos && b.size == siz && b.color == col;
    });

    return filtResult;
}
function filter(cos, siz, col){
    let filtBoots = boots.filter(function(b){
        return b.cost == cos && b.size == siz && b.color == col;
    });

    let filtSneackers = sneackers.filter(function(s){
        return s.cost == cos && s.size == siz && s.color == col;
    });

    let filtSandals = sandals.filter(function(san){
        return san.cost == cos && san.size == siz && san.color == col;
    });

    let result = [];
    result = [...filtBoots, ...filtSneackers, ...filtSandals];
    return result;
}
console.log(filter(100, 46, "white"));
console.log(filter2(100, 46, "white"));
//3
let newProducts = {
    shoes:{
        boots:[
            {id: 1, cost: 30, size: 40, sale: 5, color: "green",
                get Price() {
                    return this.cost - this.sale;
                },
                set Price(value) {
                    this.cost = value;
                }
            },
            {id: 2, cost: 60, size: 45, sale: 5, color: "blue"},
            {id: 3, cost: 20, size: 42, sale: 5, color: "red"},
            {id: 4, cost: 10, size: 43, sale: 5, color: "black"},
            {id: 5, cost: 100, size: 46, sale: 5, color: "white",
                get Price() {
                    return this.cost - this.sale;
                },
                set Price(value){
                    this.cost = value;
                }
            },
        ],
        sneackers:[
            {id: 1, cost: 60, size: 46, sale: 5, color: "blue"},
            {id: 2, cost: 20, size: 43, sale: 5, color: "red"},
            {id: 3, cost: 100, size: 46, sale: 5, color: "white"},
            {id: 4, cost: 150, size: 38, sale: 5, color: "white"},
            {id: 5, cost: 70, size: 41, sale: 5, color: "green"},
        ],
        sandals:[
            {id: 1, cost: 20, size: 42, sale: 5, color: "blue"},
            {id: 2, cost: 10, size: 43, sale: 5, color: "green"},
            {id: 3, cost: 5, size: 46, sale: 5, color: "red"},
            {id: 4, cost: 15, size: 45, sale: 5, color: "black"},
            {id: 5, cost: 25, size: 39, sale: 5, color: "white"},
        ],
    },
};

let prod = newProducts.shoes.boots[4];
Object.defineProperty(prod, 'cost',{writable:true, configurable:false, enumerable:true})
Object.defineProperty(prod, 'id',{writable:false, configurable:false, enumerable:true})
delete prod.id;
for(s in prod){
    console.log(s);
}
prod.id = 89;
prod.cost = 1000;
delete prod.id;
delete prod.cost;
console.log(prod);
console.log(prod.Price);
prod.Price = 50;
console.log(prod.Price);
prod.Price = 40;
console.log(prod.Price);

//5
function Shoe(id, cost, size, sale, color) {
    this.id = id;
    this.cost = cost;
    this.size = size;
    this.sale = sale;
    this.color = color;
}


let allProducts = {
    shoes: {
        boots: [
            new Shoe(1, 30, 40, 5, "green"),
            new Shoe(2, 60, 45, 5, "blue"),
            new Shoe(3, 20, 42, 5, "red"),
            new Shoe(4, 10, 43, 5, "black"),
            new Shoe(5, 100, 46, 5, "white")
        ],
        sneakers: [
            new Shoe(1, 60, 46, 5, "blue"),
            new Shoe(2, 20, 43, 5, "red"),
            new Shoe(3, 100, 46, 5, "white"),
            new Shoe(4, 150, 38, 5, "white"),
            new Shoe(5, 70, 41, 5, "green")
        ],
        sandals: [
            new Shoe(1, 20, 42, 5, "blue"),
            new Shoe(2, 10, 43, 5, "green"),
            new Shoe(3, 5, 46, 5, "red"),
            new Shoe(4, 15, 45, 5, "black"),
            new Shoe(5, 25, 39, 5, "white")
        ]
    }

};
console.log(allProducts.shoes);


