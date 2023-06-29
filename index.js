class Ship{
    constructor(shiphull, firepower, accuracy){
        this.shiphull = shiphull
        this.firepower = firepower
        this.accuracy = accuracy
    }
   fire(target){
     if(Math.random()< this.accuracy){
        target.shiphull -= this.firepower;
     }
  }
}
const BlueGiant = new Ship ( 20, 5, .7)
console.log(BlueGiant);

// creating enemy class extending from parent class and changing the valeus of the same parameters
// class Invaders extends Ship{
//     constructor(){
//         super (Math.floor(Math.random()*(7-3))+3, 
//         Math.floor(Math.random()*(5-2))+2, 
//         (Math.random()*(.8-.6))+.6);
//     }
// }

//creating another class with the same parameters but different vaules 
class  Invaders {
    constructor(){
        this.ships = []}
        addInvaders (){
        this.shiphull = Math.round(Math.random()*(6-3)+3)// enemy hull is between 3 and 6
        this.firepower = Math.round(Math.random()*(4-2)+2) // enemy firepowr is between 2 and 4
        this.accuracy = Math.round(Math.random()*(.12 - .6 )+ .2) // enemy accurcay is between .6 and .8
        this.ships.push(new Ship(shiphull, firepower, accuracy));
    }
}


//Random number 1-20
// var randomNumber = Math.floor(Math.random()*20)+1;
// console.log("number is", randomNumber);
//var randomNumber = Math.ceil(Math,random()*20)-1;
