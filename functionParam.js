var product = { name: "Shoes", price: 150};

var calcTax = function(price){
	return price * 0.1;
};

var calcPrice = function(product, calcTaxParam){
	return product.price + calcTaxParam(product.price);
}


console.log(calcPrice(product, calcTax));