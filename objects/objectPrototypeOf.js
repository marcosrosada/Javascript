var man = {
	gender: "male"
};

var person = {
	name: "John",
	age: 20
};

Object.setPrototypeOf(person, man);

console.log(person.gender);

console.log("\nObject Keys", Object.keys(person));

for(var property in person){
	if (!person.hasOwnProperty(property))
		continue;

	console.log(property);
}
