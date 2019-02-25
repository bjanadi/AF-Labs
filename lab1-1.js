
console.log("Hello World");

var myAge=21;
console.log("My name is Janadi Boteju");
console.log("I'm Janadi and I'm " + myAge + " years old");

function printMyName(){
    console.log("I'm Janadi");
}

printMyName();

// function as a variable


var myFunction= function(){
    console.log("Hello World");
}

myFunction();

//Calling myFunction in another function x

function x(){
    myFunction();
}

x();

var runMe1= function () {
    console.log("Janadii");
}

var runMe2= function () {
    console.log("Janadi Boteju");
}

function execute(abc){
    abc();
}

execute(runMe1);

//another way
function executeAnotherWay(abc) {
    abc;
}

executeAnotherWay(runMe2());