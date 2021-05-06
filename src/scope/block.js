// asignacion de variables en bloque accesible

const fruits=()=>{
    if(true){
        var fruit1="Apple";
        var fruit2="Banana";
        var fruit3="Lima";
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

// asignacion de variables en bloque no accesible

const fruits2=()=>{
    if(true){
        var fruit1="Apple";
        let fruit2="Banana";
        const fruit3="Lima";
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits2();

// asignacion en bloque

var num1=3;
{
    var num1=6;
    console.log(num1);
}
console.log(num1);

//.....

let num2=3;
{
    let num2=6;
    console.log(num2);
}
console.log(num2);


//otro ejemplo practico

const anotherFunction= ()=>{
    for(var i=0; i<10 ; i++){
        setTimeout(()=>{
            console.log(i);
        },1000);
    }
}
anotherFunction();

//...
const anotherFunction= ()=>{
    for(let i=0; i<10 ; i++){
        setTimeout(()=>{
            console.log(i);
        },1000);
    }
}
anotherFunction();