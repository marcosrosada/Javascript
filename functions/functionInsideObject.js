var person = {
	name : "John",
	age	: 25,
	getAge : function() {
		return this.age;
	}
}

console.log(person);
console.log(person.getAge);
console.log(person.getAge());




// Another way to call a function inside of the object
var getAge = function() {
	return this.age;
};

var person2 = {
	name : "John",
	age	: 25,
	getAge : getAge
}

console.log("=============================================");
console.log(person2);
console.log(person2.getAge);
console.log(person2.getAge());