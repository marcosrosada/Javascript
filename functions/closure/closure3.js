function doAdd(x) {
    return function (y) {
        return x + y;
    };
}

var onAdd5 = doAdd(5);
var onAdd10 = doAdd(10);

console.log( onAdd5(2) ); // 7
console.log( onAdd10(2) ); // 12