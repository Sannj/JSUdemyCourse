function b() {
    var myVar;
    console.log(myVar);
}

function a(){
    var myVar = 2;
    b();
    console.log(myVar);
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);


/* each function will have its own execution context. So the value of myVar keeps changing depending on which function is getting executed - similar to loal variables scope concept*/