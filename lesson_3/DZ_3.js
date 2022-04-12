function Good (id, name, description, sizes, price,available) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sizes = sizes;
    this.price = price;
    this.available = 'available';

    Good.prototype.constructor = function(){
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = 'available';  
    };

    Good.prototype.setAvailable = function(){
        this.available = 'not available';
    };

function Goodlist(){
    #goods       
    filter      
    sortPrice  
    sortDir 
}

}

