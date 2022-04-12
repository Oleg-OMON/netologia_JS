
function Product (id, name, description, sizes, price,available) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sizes = sizes;
    this.price = price;
    this.available = available;  
}

let basket = {};
let products = [];
let baskets = [];
let totalResult ={};

// функция создания продуктов
function productsAdd(){
    products.push(new Product(1,'Футболка','Футболка черного цвета', 'S', 500, 'достуно'));
    products.push(new Product(2,'Футболка','Футболка белого цвета', 'M', 500, 'достуно'));
    products.push(new Product(3,'Шорты','Шорты черного цвета', 'М', 600, 'достуно'));
    products.push(new Product(4,'Шорты','Шорты белого цвета', 'S', 600, 'достуно'));
    products.push(new Product(5,'Кросовки','adidas Originals Streetball “Legend Earth”', '42', 30000, 'недостуно'));
}

// функция добавления продукта в корзину
function basketAdd(id, count){
   baskets.push(basket= {'good':id,'amount':count});      
}

// функция подсчета всех товаров в корзине и общую сумму всех товаров
function productsAll(){ 
    let sumprice = 0;
        sumproducts = 0;
    for (let item of baskets)
        for(let pr of products){
            if(item.good == pr.id){
                let priceResult =  pr.price * item.amount;
                totalResult ={totalAmount: sumproducts += item.amount,totalSumm: sumprice += priceResult};
                console.log(`Общая сумма товара "${pr.name}" на сумму: ${priceResult}`); 
            }  
        }
       return console.log(totalResult);
}





productsAdd();
basketAdd(1,2);
basketAdd(4,2);
productsAll();

// console.log(products);
// console.log(baskets);


// console.log(totalResult);
