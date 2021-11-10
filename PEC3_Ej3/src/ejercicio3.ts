
/*Sustituye /*** por las instrucciones adecuadas que cumplan las operaciones 
y salidas indicadas en los comentarios.*/

abstract class Animal {
    static population: number = 0;
    text:string;
    constructor(text: string) {
        this.text= text;
        Animal.population++
    }
    public abstract sound(): void;
    public abstract iam(): void;
}

class Dog extends Animal {
   private color: string;
   constructor(text: string){
       super(text)
       this.color = this.text;

   }

    sound() {
        console.log('WOW');
    } 

    /***/

    public iam() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {
    private gender: string;

    constructor(text: string){
       super(text)
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

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for(let animal of animals){
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
