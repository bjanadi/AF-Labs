class Vehicle {
    constructor(type) {

        Vehicle.vehicleCount++;
        this.type = type;
    }

    drive() {
        console.log("Vehicle is driving");
    }
}

    Vehicle.vehicleCount=0;

const v1=new Vehicle('Toyota');
v1.drive();
console.log(Vehicle.vehicleCount);

class Car extends Vehicle{
    constructor(type){
        super(type);
    }
    balanceWheels(){
        console.log("Wheels are balanced");
    }
}


const c1=new Car("Maruti");
c1.drive();
c1.balanceWheels();
console.log(Vehicle.vehicleCount);

//use of static
//a static method belongs to the class rather than an object of a class.
//a static method invoked without the need for creating an
//instance of a class.
//a static method can access static data members and change the
//value of it.
