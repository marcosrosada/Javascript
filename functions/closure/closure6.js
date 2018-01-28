var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log("i value is " + i);
    };
}

for (var i = 0; i < 3; i++) {
    funcs[i]();
}

for (var i = 0; i < 3; i++) {
    funcs[i] = (function (value) {
        console.log("i value is " + value);
    })(i);
}

for(var i = 0; i < 3; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        });
    })(i);
}