//Question 4

//using var
function calcTax() {
    var taxPecentage = 200;
    function tax() {
        var amount = 500;
        var total = amount+taxPecentage;
        console.log(total);
        return total
    }
    return tax()
}
calcTax()

//using this
function calTax1(){
    this.taxPercentage1=200;
        function tax1() {
            this.amount1=600;
            this.total1=amount1+taxPercentage1;
            console.log(total1);
            return total1;
        }
        return tax1();
}

calTax1();

//using const
function calcTax2() {
    const taxPecentage2 = 200;
    function tax2() {
        const amount2 = 200;
        const total2 = amount2+taxPecentage2;
        console.log(total2);
        return total2;
    }
    return tax2();
}
calcTax2();



//another method
function calc(tax) {
    var taxvalue=tax;
        return function taxAmount(amount) {

            return amount+taxvalue;
    }
}


var obj = calc(100);
var object=obj(200);
console.log( "New Tax Amount is : " + object);


//same closure example done in a different way
function calc2(tax2) {
    return function taxAmount2(amount2) {

        return amount2+tax2;
    }
}


var obj2 = calc2(1000);
const object2=obj2(2000);
console.log( "New Tax Amount is : " + object2);
