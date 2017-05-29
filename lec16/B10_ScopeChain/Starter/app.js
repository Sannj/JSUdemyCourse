'use strict';

function b() {
    var myVar = 3;
    function c() {
        console.log(myVar);
    }
    c();
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();





/*if a variable is not present in the current scope, then it looks for it in its next immediate outer environment. Example - look at c() */