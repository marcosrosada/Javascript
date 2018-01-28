function doAdd(x) {
    return function (y) {
        return x + y;
    };
}

var onAdd5 = doAdd(5);
var onAdd10 = doAdd(10);

console.log( doAdd(3)(3) ); // 6
console.log( onAdd5(2) ); // 7
console.log( onAdd10(2) ); // 12

// ---- 
var doCounter = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

console.log( doCounter() );
console.log( doCounter() );
console.log( doCounter() );