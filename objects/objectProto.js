var man = {
	gender: "male"
};

var person = {
	name: "John",
	age: 20,
	__proto__: man
};

console.log(person.gender);