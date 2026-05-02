let a = 10;
console.log(a); 
console.log(b);


var b = 20;
console.log(b);
console.log(a);




let  test = "This Is global Test Variable";

function classA () {
    console.log("ClassA " + test);
}

function classB () {
    console.log("ClassB " + test);
}

function classC () {
    let test2 = "This is local Test Variable";
    console.log("ClassC " + test);
    console.log("ClassC " + test2);
}

function classD () {
    let x = 20;
    console.log("ClassD " + test);
    console.log(x);
}
{
    let test = "This is block scope variable";
    console.log("This is block " + test);
}


classA();
classB();
classC();
classD();



// hosting a variable in global scope

let a;
let b;
let c;

 a = 10;
 console.log(a);
 console.log(b);
 console.log(c);


 b = 20;
    console.log(a); 
    console.log(b);
    console.log(c);

 c = 30;
    console.log(a); 
    console.log(b);
    console.log(c);   

var a;
var b;
var c;

 a = 10;
 console.log(a);
 console.log(b);
 console.log(c);


 b = 20;
    console.log(a); 
    console.log(b);
    console.log(c);

 c = 30;
    console.log(a); 
    console.log(b);
    console.log(c);   

