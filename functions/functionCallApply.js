var getAge = function(param) {
	console.log(arguments);
	return this.age + param;
};

var person = {
	name : "John",
	age	: 25,
	getAge : getAge
}

console.log(person.getAge(2));
console.log(getAge.call(person, 2, 0, 1));
console.log(getAge.apply(person, [2, 0, 1]));