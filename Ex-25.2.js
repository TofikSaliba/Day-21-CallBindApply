const something = {
  name: "Tofik",
  printName() {
    console.log(`I am ${this.name}`);
  },
  printNameDelay() {
    setTimeout(this.printName.bind(this), 1000);
  },
};

something.printName();
something.printNameDelay();
