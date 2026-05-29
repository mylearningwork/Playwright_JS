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
/*
How it works:
1. The constructor stores name and type on the object.
2. speak() builds and returns a sentence using those properties.
3. The object is created with new Animal() and the returned message is logged.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. A class groups data and behavior into reusable objects.
2. A constructor runs when a new object is created.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
