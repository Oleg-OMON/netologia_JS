//Good - класс для хранения данных о товаре со свойствами
class Good {
    constructor (id,name, description, sizes,price,available) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sizes = [sizes];
    this.price = price;
    this.available = 'available';
    }

    setAvailable (){
        this.available = 'not available';
    }

}

//GoodsList - класс для хранения каталога товаров со свойствами
class Goodlist {
    constructor (products=[]){
        this.goods = products.forEach(element => {
            return [element];
        });
        this.filter = '';
        this.sortDir = products.filter(element.price=True=>{
            return element;
        });
        this.sortPrice = sortPrice;
    }

    newProduct(id,name,description,sizes,price,available){
        let product = new Good(id,name,description,sizes,price,available);
        this.products.push(product);
        return product;
    }

    getlist(){}
    add(){}
    remove(id){}
}

//BasketGood - класс дочерний от Good,
//для хранения данных о товаре в корзине с дополнительным свойством
class BasketGood extends Good{
    constructor(id){
    this.amount = id;
    }
}
class Basket{
    constructor(goods){
        this.goods = '';
    }

    get totalAmount(){}
    get totalSum(){}
}