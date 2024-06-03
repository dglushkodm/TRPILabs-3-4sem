let newProducts = {
    shoes: {
      boots: [
        {
          itemNumber: "001",
          size: 42,
          color: "black",
          cost: 2000,
          discount: 50
        },
        {
          itemNumber: "002",
          size: 38,
          color: "brown",
          cost: 1799,
          discount: 50
        }
      ],
      sneakers: [
        {
          itemNumber: "101",
          size: 40,
          color: "blue",
          cost: 2499,
          discount: 30
        },
        {
          itemNumber: "102",
          size: 37,
          color: "red",
          cost: 2299,
          discount: 40
        }
      ],
      sandals: [
        {
          itemNumber: "201",
          size: 39,
          color: "white",
          cost: 1499,
          discount: 50
        },
        {
          itemNumber: "202",
          size: 36,
          color: "black",
          cost: 1399,
          discount: 50
        }
      ]
    },
  };
  newProducts.shoes[Symbol.iterator]=function*()
  {
    const categories = Object.keys(this);
  for (let category of categories) {
      yield this[category];
    }
  }
  for(let category of newProducts.shoes)
{
        for(let product of category)
        {
            Object.defineProperty(product, "price", {
                get() {
                  return this.cost - this.cost*this.discount/100;
                },
                configurable:true
              });
        }
}
console.log(newProducts.shoes.boots[0].price);
for(let category of newProducts.shoes)
{
    for(let product of category)
    {
        Object.defineProperty(product,"price",{writable:true,enumerable:true,configurable:false})
        Object.defineProperty(product,"itemNumber",{writable:false,enumerable:true,configurable:false})

    }
}
function Product(itemNumber, size, color, cost, discount) {
    this.itemNumber = itemNumber;
    this.size = size;
    this.color = color;
    this.cost = cost;
    this.discount = discount;
    Object.defineProperty(this, "price", {
      get() {
        return this.cost - (this.cost * this.discount / 100);
      },
      enumerable: true,
      configurable: false
    });
  }
let allProducts = {
    shoes: {
      boots: [],
      sneakers: [],
      sandals: []
    }
  };
  
  for (let categoryKey of Object.keys(newProducts.shoes)) {
    let category = newProducts.shoes[categoryKey];
    for (let product of category) {
      let newProduct = new Product(
        product.itemNumber,
        product.size,
        product.color,
        product.cost,
        product.discount
      );
      allProducts.shoes[categoryKey].push(newProduct);
    }
  }
  
  console.log(allProducts);