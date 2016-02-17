console.log("\nModule Pattern");
var counter = (function(){
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

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());


console.log("\nRevealing Module Pattern");
var counterRev = (function(){
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

console.log(counterRev.value);
console.log(counterRev.add());
console.log(counterRev.add());
console.log(counterRev.add());
counterRev.reset();
console.log(counterRev.add());