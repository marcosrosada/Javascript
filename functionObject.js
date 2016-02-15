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