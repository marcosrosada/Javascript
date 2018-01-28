var Module1 = (function () {
    var contents = 'Contents of private method';

    var privateMethod = function () {
        console.log(contents);
    }

    return {
        publicMethod: function () {
            privateMethod();
        }
    };

})();

Module1.publicMethod(); // Outputs: 'Contents of private method'
console.log(Module1.contents); // undefined