//ámbito local

const anotherFunction=()=>{
    const hello="Hello World";
    console.log(hello);
}
anotherFunction();
//console.log(hello); --- no accederia desde fuera de su declaracion

var variable="I am global";

const helloFunction=()=>{
    var variable="I am just a local";
    const fun=()=>{
        return variable;
    }
    console.log(fun());
}

helloFunction();
console.log(variable);