{
  //    class object

  //   class Animal {
  //     name: string;
  //     species: string;
  //     sound: string;

  //     constructor(name: string, species: string, sound: string) {
  //       this.name = name;
  //       this.species = species;
  //       this.sound = sound;
  //     }

  //     makeSound() {
  //       console.log(`The ${this.name} says ${this.sound}`);
  //     }
  //   }

  //   const dog = new Animal("german shepar", "dog", "gew gew");
  //   const cat = new Animal("pretter", "cat", "mew mew");
  //   // instant

  //   cat.name = "dfdsf";
  //   console.log(cat.makeSound());

  //   when using typescript
  class Animal {
    // paramerter Properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

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
