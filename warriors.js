// Create a constructor function called Warrior that can create new warriors. 
// This function will take parameters name, and gender. name can be any string, 
// gender can be M or F. It should create a warrior that has these properties:
// name: the value that was passed to the constructor
// gender: the value that was passed to the constructor
// level: 1
// weapon: wooden sword
// power: a random number between 1 and 100
// In addition to that, every object that gets created should have the following methods:
// fight: will output to the console: " rushes to the arena with "
// faceoff: faceoff takes one argument called opponent. Based on the power of each opponent, 
// this method should output to the console which player won the fight based on their power. 
// Be as creative as you like with the text of this method :)
// Finally, create a bunch of warriors and make them fight together.

function Warrior(name,gender){
    this.name = name;
    if (gender === "F" || gender ==="M"){
        this.gender = gender;
    }
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor(Math.random()*100);
}

Warrior.prototype = {
    fight: function() {
        console.log(this.name + " rushes in the arena with " + this.weapon);
    },
    faceoff: function(opponent) {
        if (this.power > opponent.power) {
            console.log(this.name + " is much stronger and destroyed " + opponent.name);
        }
        else {
            console.log(opponent.name + " is much stronger and destroyed " + this.name);
        }
    }
};


var Jessica = new Warrior("Jess","F");
var Jared = new Warrior("Jared","M");
var Maxime = new Warrior("Maxime","M");
var Dennis = new Warrior("Den","M");
Maxime.fight();
Jessica.faceoff(Dennis);
Jared.faceoff(Maxime);

