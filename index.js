class Ship{
    constructor(shiphull, firepower, accuracy){
        this.shiphull = shiphull;
        this.firepower = firepower;
        this.accuracy = accuracy;
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
        this.ships = []
    }
    addInvaders (){
        this.shiphull = Math.round(Math.random()*(6-3)+3)// enemy hull is between 3 and 6
        this.firepower = Math.round(Math.random()*(4-2)+2) // enemy firepowr is between 2 and 4
       // his.accuracy = (Math.random()*(.6 - .8) + .8).toFixed(1)-will stop the decimal if it keeps going
        this.accuracy = Math.round((Math.random()*(.81 - .6) + .6) * 10) / 10 // enemy accurcay is between .6 and .8
        this.ships.push(new Ship(this.shiphull, this.firepower, this.accuracy));
    }
}

let enemyInvaders = new Invaders (); 

enemyInvaders.addInvaders();
enemyInvaders.addInvaders();
enemyInvaders.addInvaders();
enemyInvaders.addInvaders();
enemyInvaders.addInvaders();
enemyInvaders.addInvaders();



console.log(enemyInvaders);

//Attack 
const attackInvaders = () => {
    let enemyFleet = enemyInvaders.ships;
    for (i =0; i < enemyInvaders.ships.length; i++){
        //need to check our if oue ship is destroyed, if destoryed then gameover, if not keep fighting
        if(BlueGiant.shiphull <=0){
            console.log("Game Over, Your Ship Has Been Taken Out");
            break;
        }
        while(BlueGiant.shiphull > 0 || enemyFleet[i].shiphull > 0){
            if (Math.random()< BlueGiant.accuracy){
                enemyInvaders.ships[i].shiphull = enemyInvaders.ships[i].shiphull - BlueGiant.firepower
            
            }
            // need to check if enemy invaders ship is destoryed, if yes then break and go to the new ship and restart battle
            if (enemyInvaders.ships[i].shiphull <=0){
                console.log("Yayyyy You've Taken Out The Invaders!");
                break;
                
            }
            if (Math.random()< enemyInvaders.ships[i].accuracy){
                BlueGiant.shiphull = BlueGiant.shiphull - enemyInvaders.ships[i].firepower
            }
            if (BlueGiant.shiphull <= 0) {
                console.log("Game Over, Your Ship Has Been Taken Out");
                break;
            }
        } 
    
    }
}
attackInvaders()
console.log(BlueGiant);


//Random number 1-20
// var randomNumber = Math.floor(Math.random()*20)+1;
// console.log("number is", randomNumber);
//var randomNumber = Math.ceil(Math,random()*20)-1;
