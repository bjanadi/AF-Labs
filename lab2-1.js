//EXAMPLE 1
var vehicleName="toyota";

function printName(){
    colour="blue";
    this.year=2000;
    console.log(colour); //blue
    console.log(this.year); //2000
    console.log(this.vehicleName); //undefined
}
printName(); //undefined

console.log(this.vehicleName); //undefined
console.log(vehicleName); //toyota



//EXAMPLE 2
console.log("\nEXAMPLE 2\n");

var vehicle="Nissan";
function printVehicleOuter(){
     console.log(this.vehicle);
}

console.log(this); // {}window object
printVehicleOuter();  // undefined



//EXAMPLE 3
console.log("\nEXAMPLE 3");

var vehicle2={
    name:"hyundai",
    printVehicleInner:printVehicleOuter()
};

vehicle2.printVehicleInner; //undefined


//EXAMPLE 4
console.log("\nEXAMPLE 4");

var vehicle3={
    Name:'HONDA',
    printVehicle3Inner: function(){
        return function () {
            console.log(this.Name);
        }
    }
};

var execute=vehicle3.printVehicle3Inner();
execute();//undefined

execute.call(vehicle3); //HONDA

//another way
var execute2=vehicle3.printVehicle3Inner().bind(vehicle3);
execute2(); //HONDA





