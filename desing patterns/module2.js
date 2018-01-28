var Module2 = (function() {
    var privateVariable = 10;
  
    var privateMethod = function() {
      console.log('Inside a private method!');
      privateVariable++;
    }
  
    var methodToExpose = function() {
      console.log('This is a method I want to expose!');
    }
  
    var otherMethodIWantToExpose = function() {
      privateMethod();
    }
  
    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
  })();
  
  Module2.first();        // Output: This is a method I want to expose!
  Module2.second();       // Output: Inside a private method!
  Module2.methodToExpose; // undefined