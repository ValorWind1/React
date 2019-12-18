const Cart = require('./index.js');

const myCart = new Cart();

Apple = {
	ProductName : 'Apple',
    ProductPrice : 1000000000,
    Quantity : 1
};


Android = { 
	ProductName : 'Android',
    ProductPrice : 1,
    Quantity : 2
};

myCart.addProduct(Apple);
myCart.addProduct(Android);

console.log(myCart.lineItem);
