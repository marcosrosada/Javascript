console.log("\nUsing Factory Function");

var createCounter = function(){
	var value = 0;
	return {
		add: function(){
			return ++value;
		}
	};
};

var counterFact = createCounter();
console.log(counterFact.value);
console.log(counterFact.add());
console.log(counterFact.add());
console.log(counterFact.add());


console.log("\nUsing Constructor Function");

var Counter = function(){
	var value = 0;
	this.add = function(){
		return ++value;
	};
};

var counterConst = new Counter();
console.log(counterConst.value);
console.log(counterConst.add());
console.log(counterConst.add());
console.log(counterConst.add());