
//Scope Global

var hello="Hello";
let world="World";
const helloword="Hello World!"

const anotherFunction=()=>{
    console.log(hello);
    console.log(world);
    console.log(helloword);
}

anotherFunction();

//mala practica de scope 

const helloFunction=()=>{
    globalVar="Hello World";
}

helloFunction();
console.log(globalVar);

//mala practica 

const anotherFunction2=()=>{
    var variable=variableGlobal="Hello World!";
}
anotherFunction2();
console.log(variableGlobal);