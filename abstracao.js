class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        throw new Error("Este método deve ser implementado pela classe filha");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "latir");
        this.breed = breed;
    }

    makeSound() {
        return `${this.name}, um ${this.breed}, faz ${this.sound}`;
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name, "miar");
        this.color = color;
    }

    makeSound() {
        return `${this.name}, um gato ${this.color}, faz ${this.sound}`;
    }
}

const dog1 = new Dog("Rex", "Pastor Alemão");
const dog2 = new Dog("Bolt", "Golden Retriever");
const cat1 = new Cat("Mia", "preto");

// Testando as instâncias
console.log(dog1.makeSound());
console.log(dog2.makeSound());
console.log(cat1.makeSound());
