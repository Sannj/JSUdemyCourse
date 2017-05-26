b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
    console.log('hoisting explained');
}

/* execution context is created in 2 phases. 
Global Object, 'this', outer envi are created
1. Setup memory space for variables and functions (called as hoisting)
2. Assignments to variables are done in execution phase. 
*/