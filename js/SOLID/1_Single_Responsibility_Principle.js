// Bad
// class Animal {
//   constructor(name) {}
//   getAnimal() {}
//   saveAnimal(a) {}
// }

// Good
class AnimalDB {
  getAnimal(a) {}
  saveAnimal(a) {}
}
class Animal {
  getAnimalName(a) {}
}
