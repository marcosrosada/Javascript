function init() {
    var name = "Marcos Rosada";

    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myInit = init();
myInit();