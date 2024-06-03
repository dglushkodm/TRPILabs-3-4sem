//1
type id = number;
type size = number;
type color = string;
type cost = number;
type sale = number;
type price = number;
type shoe = {id: id; size: size; color: color; cost: cost};
type shoes = {boots: shoe[]; sneackers: shoe[]; sandals: shoe[]}
type products = {shoes: shoes}

/*abstract class productsclass{
    private id: number;
    private cost: number;
    private size: number;
    private sale: number;
    private color: string;
    public constructor(id, cost, size, sale, color){
        this.id = id;
        this.cost = cost;
        this.size = size;
        this.sale = sale;
        this.color = color;
    }

}
class bootsclass extends productsclass{
    public constructor(id, cost, size, sale, color){
        super(id, cost, size, sale, color);
    }
}
class sneackerslass extends productsclass{
    public constructor(id, cost, size, sale, color){
        super(id, cost, size, sale, color);
    }
}
class sandalsclass extends productsclass{
    public constructor(id, cost, size, sale, color){
        super(id, cost, size, sale, color);
    }
}*/
let products: products = {
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
let result2 : shoe[] = []
result2 = [...boots, ...sneackers, ...sandals];
function filter2(cos, siz, col):shoe[]{
    let filtResult :shoe[]= result2.filter(function(b){
        return b.cost == cos && b.size == siz && b.color == col;
    });

    return filtResult;
}
function filter(cos, siz, col):shoe[]{
    let filtBoots: shoe[] = boots.filter(function(b){
        return b.cost == cos && b.size == siz && b.color == col;
    });

    let filtSneackers : shoe[]= sneackers.filter(function(s){
        return s.cost == cos && s.size == siz && s.color == col;
    });

    let filtSandals:shoe[] = sandals.filter(function(san){
        return san.cost == cos && san.size == siz && san.color == col;
    });

    let result : shoe[] = [];
    result = [...filtBoots, ...filtSneackers, ...filtSandals];
    return result;
}
console.log(filter(100, 46, "white"));
console.log(filter2(100, 46, "white"));
//3
class Shoee{
    id: id;
    cost: cost;
    size: size;
    sale: sale;
    color: color;
    price: price;
    public constructor(id: id, cost:cost, size:size, sale:sale, color:color) {
        this.id = id;
        this.cost = cost;
        this.size = size;
        this.sale = sale;
        this.color = color;
        this.price = this.cost - this.sale
    }

    public getPrice():price  {
        return this.cost - this.sale;
    }
    public setPrice(sale:sale){
        this.price = this.cost - sale;
    }
}
let allProducts = {
    shoes: {
        boots: [
            new Shoee(1, 30, 40, 5, "green"),
            new Shoee(2, 60, 45, 5, "blue"),
            new Shoee(3, 20, 42, 5, "red"),
            new Shoee(4, 10, 43, 5, "black"),
            new Shoee(5, 100, 46, 5, "white")
        ],
        sneackers: [
            new Shoee(1, 60, 46, 5, "blue"),
            new Shoee(2, 20, 43, 5, "red"),
            new Shoee(3, 100, 46, 5, "white"),
            new Shoee(4, 150, 38, 5, "white"),
            new Shoee(5, 70, 41, 5, "green")
        ],
        sandals: [
            new Shoee(1, 20, 42, 5, "blue"),
            new Shoee(2, 10, 43, 5, "green"),
            new Shoee(3, 5, 46, 5, "red"),
            new Shoee(4, 15, 45, 5, "black"),
            new Shoee(5, 25, 39, 5, "white")
        ]
    }

};
console.log(allProducts.shoes);


let prod: shoe = allProducts.shoes.boots[4];
Object.defineProperty(prod, 'cost',{writable:true, configurable:false, enumerable:true})
Object.defineProperty(prod, 'id',{writable:false, configurable:false, enumerable:true})
delete prod.id;

prod.id = 89;
prod.cost = 1000;
delete prod.id;
delete prod.cost;
console.log(prod);
console.log(allProducts.shoes.boots[4].getPrice());
allProducts.shoes.boots[4].setPrice(8);
console.log(allProducts.shoes.boots[4].getPrice());
allProducts.shoes.boots[4].setPrice(10);
console.log(allProducts.shoes.boots[4].getPrice());

class iterator{
    index: number;
    allShoes: shoe[];

    constructor(products: products){
        this.index = 0;
        this.allShoes = Object["values"](products.shoes).reduce((acc: shoe[], curr: shoe[]) => acc.concat(curr), []);
    }

    public next(): shoe | null {
        if (this.index < this.allShoes.length){
            return this.allShoes[this.index++];
        }return null;
    }
}

let iter: iterator = new iterator(allProducts);
let p: shoe | null = iter.next();

while(p != null)
{
    console.log(p);
    p=iter.next();
}

