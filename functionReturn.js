var helloWorld = function(){
	return function(){
		return "Hello World!";
	};
};

console.log(helloWorld);
console.log(helloWorld());
console.log(helloWorld()());

var mensagem = helloWorld();
console.log(mensagem());