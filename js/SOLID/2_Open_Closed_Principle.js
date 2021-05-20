// Good
class Animal {
makeSound()
}

class Lion extends Animal {
    makeSound = () => 'roar'
}
class Squirrel extends Animal {
    makeSound = () => 'squeak'
}
class Snake extends Animal {
    makeSound = () => 'hiss'
}

function AnimalSound (arr) {
  for (const animal of animals) {
      animal.makeSound()
  }
}

//  We use extends of classes to update their methods.
class Discount {
    giveDiscount = () => 20
}

class SuperDiscount extends Discount{
    getDiscount = () => super.giveDiscount() * 2 
}