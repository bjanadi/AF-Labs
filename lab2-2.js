//example 1

//understanding closures
//functions inside a function

function taxCalculator(tax) {
    var taxPercentage=tax;
    return function (amount) {
        return (amount*taxPercentage)/100;
    }
}

var calculator=taxCalculator(2);
console.log(calculator(1000));



