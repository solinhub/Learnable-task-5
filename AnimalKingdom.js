// Define the base class Animal
class Animal {
    constructor(name, backbone) {
      this.name = name;
      this.backbone = backbone;
    }
  
    // Abstraction: Display basic information
    displayInfo() {
      console.log(`Name: ${this.name}, Backbone: ${this.backbone}`);
    }
  
    // Polymorphism: Different animals make different sounds
    makeSound() {
      console.log(`${this.name} makes a generic animal sound.`);
    }
  }
  
  // Inheritance: Anthropoda extends Animal
  class Anthropoda extends Animal {
    constructor(name, backbone, exoskeleton) {
      super(name, backbone); 
      this.exoskeleton = exoskeleton;
    }
  
    // Encapsulation: Hide details of movement
    crawl() {
      console.log(`${this.name} crawls with its exoskeleton.`);
    }
  }
  
  // Inheritance: Fish extends Animal
  class Fish extends Animal {
    constructor(name, backbone, coldBlooded) {
      super(name, backbone);
      this.coldBlooded = coldBlooded;
    }
  
    // Encapsulation: Hide details of swimming
    swim() {
      console.log(`${this.name} swims in the water.`);
    }
  }
  
  // Inheritance: Amphibia extends Animal
  class Amphibia extends Animal {
    constructor(name, backbone, coldBlooded) {
      super(name, backbone);
      this.coldBlooded = coldBlooded;
    }
  
    // Polymorphism: Amphibians have a different way of moving
    move() {
      console.log(`${this.name} can move both on land and in water.`);
    }
  }
  
  // Inheritance: Reptiles extends Animal
  class Reptiles extends Animal {
    constructor(name, backbone, coldBlooded) {
      super(name, backbone);
      this.coldBlooded = coldBlooded;
    }
  
    // Encapsulation: Hide details of basking
    bask() {
      console.log(`${this.name} basks in the sun for warmth.`);
    }
  }
  
  // Inheritance: Aves extends Animal
  class Aves extends Animal {
    constructor(name, backbone, warmBlooded) {
      super(name, backbone);
      this.warmBlooded = warmBlooded;
    }
  
    // Polymorphism: Birds have a different way of moving
    move() {
      console.log(`${this.name} flies in the sky.`);
    }
  }
  
  // Inheritance: Mammals extends Animal
  class Mammals extends Animal {
    constructor(name, backbone, warmBlooded) {
      super(name, backbone);
      this.warmBlooded = warmBlooded;
    }
  
    // Encapsulation: Hide details of reproduction
    giveBirth() {
      console.log(`${this.name} gives birth to live young.`);
    }
  }
  

  const bee = new Anthropoda('Bee', 'No', 'Yes');
  bee.displayInfo();
  bee.crawl();
  
  const mackerel = new Fish('Mackerel', 'Yes', 'Yes');
  mackerel.displayInfo();
  mackerel.swim();
  
  const frog = new Amphibia('Frog', 'Yes', 'No');
  frog.displayInfo();
  frog.move();
  
  const snake = new Reptiles('Snake', 'Yes', 'Yes');
  snake.displayInfo();
  snake.bask();
  
  const eagle = new Aves('Eagle', 'Yes', 'Yes');
  eagle.displayInfo();
  eagle.move();
  
  const tiger = new Mammals('Tiger', 'Yes', 'Yes');
  tiger.displayInfo();
  tiger.giveBirth();
  