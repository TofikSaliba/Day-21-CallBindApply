//? 1. What is wrong with the code? explain in your own words
//* Answer: when calling whoIsStronger , the this inside the getStrength now is lost and refers to the windows. need to bind it.
//? 2. Fix the code so that invoking the whoIsStronger function will print "I am stronger".

//! note: you cannot change the 'hero' or the whoIsStronger function.

const hero = {
  health: 5,
  power: 68,
  getStrength: function(){
    if (this.health <= 5){
      return this.power - 10;
    } else return this.power;
  }
}
function whoIsStronger(getStrength){
  const myStrength = 82;
  if (getStrength() < myStrength){
    return "I am stronger";
  } else return "You are stronger";
}


whoIsStronger(hero.getStrength.bind(hero));
