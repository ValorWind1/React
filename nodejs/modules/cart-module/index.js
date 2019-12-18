module.exports = class Cart {
    constructor(){
        this.lineItem = [];
        
    }

// adding a lineItem 
addProduct(items){
    return this.lineItem.push(items);
    
}

// removing a lineitem
removeItem (pName){
    this.lineItem.filter((p)=> {
    return p.ProductName != pName ;
    });
};

// getting total amount
    getTotal(){
    return lineItem.reduce((a, b) => a + b, 0)

    }

    
};
 