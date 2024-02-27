// 1

const Car=function (name,speed)
{
    this.speed=speed
    this.name=name
}

Car.prototype.accelerate=function()
{
    this.speed+=10
    console.log(`The new speed of ${this.name} is ${this.speed}`);
}

Car.prototype.brake=function()
{
    this.speed-=10
    console.log(`The new speed of ${this.name} is ${this.speed}`);
}



const Mercedes=new Car('Mercedes',40)
Mercedes.accelerate()
Mercedes.accelerate()

const BMW=new Car('BMW',30)
BMW.accelerate()
BMW.accelerate()
BMW.brake()


// 2
class CarCl
{
    constructor(name,speed)
    {
        this.name=name
        this.speed=speed
    }

    accelerate()
    {
        this.speed+=10
        console.log(`The new speed of ${this.name} is ${this.speed} Km/h`);
    }

    brake()
    {
    this.speed-=10
    console.log(`The new speed of ${this.name} is ${this.speed}`);
    }
    get speedUS() {
        return this.speed / 1.6;
      }
}

const Ford=new CarCl('Ford',30)
console.log(Ford.speedUS);
Ford.accelerate()
Ford.accelerate()