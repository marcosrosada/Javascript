var man = {
	gender: "male"
};

var person  = Object.create(man);
person.name = "John";
person.age  = 20;

console.log(person.gender);