// funciones con memoria

const moneyBox = ()=>{
    var saveCoins=0;
    const countCoins= (coins)=>{
        saveCoins += coins;
        console.log(`my cuenta tiene $${saveCoins}`);
    }
    return countCoins;
} 

let myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(12);
myMoneyBox(-3);