function Vehicle(type){
    Vehicle.vehicleCount++;
    this.type=type;
}

Vehicle.vehicleCount=0;

Vehicle.prototype.drive= function () {

    console.log("Vehicle is driving");
}

var v1=new Vehicle('Toyota');


function Car(type){
    Vehicle.call(this,type);
}

Car.prototype=Object.create(Vehicle.prototype);
Car.prototype.constructor=Car;

Car.prototype.balanceWheels= function () {
    console.log("Wheels are balanced");
};

var c1=new Car('Nissan');
c1.drive();
c1.balanceWheels();

console.log(c1.type + ", Vehicle Count is : " + Vehicle.vehicleCount);

