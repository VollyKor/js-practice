console.log("Generators");

const leftBtn = document.getElementById(1);
const rightBtn = document.getElementById(2);

// Example 1
// =============================
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
