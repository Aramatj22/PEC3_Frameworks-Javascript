"use strict";
/*Sustituye /*** por las instrucciones adecuadas que cumplan las operaciones
y salidas indicadas en los comentarios.*/
class Animal {
    constructor(text) {
        this.text = text;
        Animal.population++;
    }
}
Animal.population = 0;
class Dog extends Animal {
    constructor(text) {
        super(text);
        this.color = this.text;
    }
    sound() {
        console.log('WOW');
    }
    /***/
    iam() {
        console.log('yes, this is a dog');
    }
}
class Cat extends Animal {
    constructor(text) {
        super(text);
        this.gender = this.text;
    }
    sound() {
        console.log('MEOW');
    }
    /***/
    iam() {
        console.log('yes, this is a cat');
    }
}
let animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
for (let animal of animals) {
    console.log(animal.sound());
    console.log(animal.iam());
}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/
console.log(Animal.population); //4
