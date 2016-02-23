var ClassError = function (message){
	this.message = message;
	this.name = "ClassError";
};

var callSomething = function (value){

	try { 
        if (value == "")  
        	throw new ClassError("Value is Empty!");

        if (isNaN(value) && typeof value === "string") 
        	throw new ClassError("Value is a isNaN!");

        if (typeof value === "object") 
        	throw new ClassError("Value is a Object!");
        
        if (value >= 10)
        	throw new ClassError("Value is too high!");
        else
        	throw new ClassError("Value is too low!");
        
        if (!value)    	  
        	throw new ClassError("Value is undefined");
	}
    catch(err) {
        console.log(err.name + " Catch: [ " + value + " ] " + err.message );
    }
    finally {
        console.log("Finally clean up something\n");
    }
}


callSomething("");
callSomething("Lorem ipsum dolor sit amet ...");
callSomething(15);
callSomething(4);
callSomething({ name: "John", age: 30});
callSomething();