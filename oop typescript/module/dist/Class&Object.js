"use strict";
{
    //    class object
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("german shepar", "dog", "gew gew");
    const cat = new Animal("pretter", "cat", "mew mew");
    // instant
    cat.name = "dfdsf";
    console.log(cat.makeSound());
}
