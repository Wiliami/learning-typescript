class Animal {
    constructor(name) {
        this.name = name
    };

    sound() {
        console.log(`${this.name} made some sound!`);
    };
};

class Dog extends Animal {
    constructor(name) {
        super(name);
    };

    sound() {
        console.log(`${this.name} barked`);
    };
}

const animal = new Animal('Simba');
animal.sound();
console.log(animal);
const dog = new Dog('Vira-lata');
dog.sound();
console.log(dog);