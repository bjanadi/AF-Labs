function Vehicle(){
    this.name= "Toyota",
    this.printName= function() {
        console.log("Vehicle is " + this.name);
    }
    this.getName = function () {
        return this.name;
    }

}

var vehicle=new Vehicle();
vehicle.printName();
console.log(vehicle.getName());