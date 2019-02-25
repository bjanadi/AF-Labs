//creating a JSON like Javascript like object and adding properties and functions to the object

var Vehicle ={
    colour: "Red",
    ID: "JM34590",
    printColour : function () {
        console.log("The colour is : " + this.colour);
    }
}

console.log(Vehicle.colour);
Vehicle.printColour();
