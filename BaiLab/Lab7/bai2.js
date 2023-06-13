class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    get speedUS() {
      return this.speed / 1.60934;
    }
  
    set speedUS(speedUS) {
      this.speed = speedUS * 1.60934;
    }
  }
  
  const ford = new Car('Ford', 120);
  console.log(ford.speedUS); 
  
  ford.accelerate(); 
  console.log(ford.speedUS);
  
  ford.brake(); 
  console.log(ford.speedUS);
  
  ford.speedUS = 60;
  console.log(ford.speed);
  