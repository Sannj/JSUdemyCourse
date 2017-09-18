// by value (primitives)

var a = 3;
var b;

b = a;   //a copy of a is going to assigned to be
a = 2;   //this shouldn't affect the value of b.


console.log(a);
console.log(b);




//by reference (all objects - including functions)

var c = { hello: 'world' };
var d;

d = c;  //both d and c point to the same location in the memory.

//mutate means to change something.
//immutable means it cannot be changed.

c.hello = 'how are you?';    //both d and c will be affected by this.


console.log(c);
console.log(d);



d.newVar = 'Checking it both ways.';


console.log(c);
console.log(d);


function changeHello(obj){
    obj.hello = 'Hola';
}


changeHello(d);   //passing a value to the function is pass by reference.


console.log(c);
console.log(d);


c = {hello:'world'};   //this assigns a new memory space to see


//the values will be different because c and d now point to different memory locations.
console.log(c);
console.log(d);


