/*
// First version with error!

var counter = 0;
var add = function(){
	return ++counter;
};

console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function(item){
	itens.push(item);
	return itens;
};

console.log(add("A"));
console.log(add("B"));
console.log(add("C"));
console.log(add());
*/

/*
// Second version using Object!
var counter = {
	value: 0,
	add: function(){
		return ++this.value;
	}
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
	value: [],
	add: function(item){
		this.value.push(item);
		return this.value;
	}
};

console.log(itens.add("A"));
console.log(itens.add("B"));
console.log(itens.add("C"));
console.log(counter.add());
*/

// Third version using Function with encapsulation
console.log("\nUsing Factory Function");

var createCounter = function(){
	var value = 0;
	return {
		add: function(){
			return ++value;
		}
	};
};

var counter1 = createCounter();
console.log(counter1.value);
console.log(counter1.add());
console.log(counter1.add());
console.log(counter1.add());


console.log("\nUsing Constructor Function");

var Counter = function(){
	var value = 0;
	this.add = function(){
		return ++value;
	};
};

var counter2 = new Counter();
console.log(counter2.value);
console.log(counter2.add());
console.log(counter2.add());
console.log(counter2.add());


// Immediately-invoked Function Expression - IIFE
console.log("\nUsing IIFE");
console.log("Module Pattern");
var counter3 = (function(){
	var value = 0;
	return {
		add: function(){
			return ++value;
		},
		reset: function(){
			value = 0;
		}
	};
})();

console.log(counter3.value);
console.log(counter3.add());
console.log(counter3.add());
console.log(counter3.add());
counter3.reset();
console.log(counter3.add());


console.log("Revealing Module Pattern");
var counter4 = (function(){
	var _value = 0;
	var _add = function(){
		return ++_value;
	};
	var _reset = function(){
		_value = 0;
	};

	return {
		add: _add,
		reset: _reset
	};
})();

console.log(counter4.value);
console.log(counter4.add());
console.log(counter4.add());
console.log(counter4.add());
counter4.reset();
console.log(counter4.add());