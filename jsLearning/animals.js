class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak(sound) {
        return `${this.name} is a ${this.type} and says ${sound}`;
    }
}

const animal = new Animal('Alok', 'dog');

console.log(animal.speak('woof'));
