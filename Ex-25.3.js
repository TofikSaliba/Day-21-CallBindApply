const wonderWoman = {
  name: "Diana Prince",
};
const batman = {
  name: "Bruce Wayne",
};
const superHeroes = [wonderWoman, batman];
function printName() {
  console.log(`my name is ${this.name}`);
}

//* with call
function printHeroes(heroes, printFunc) {
  heroes.forEach((hero) => printFunc.call(hero));
}

//* with apply
function printHeroes2(heroes, printFunc) {
  heroes.forEach((hero) => printFunc.apply(hero));
}

//* with call
printHeroes(superHeroes, printName);
//* with apply
printHeroes2(superHeroes, printName);
