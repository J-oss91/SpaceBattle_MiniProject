// class Ship {
//     constructor(shiphull, firepower, accuracy) {
//       this.shiphull = shiphull;
//       this.firepower = firepower;
//       this.accuracy = accuracy;
//     }
  
//     fire(target) {
//       if (Math.random() < this.accuracy) {
//         target.shiphull -= this.firepower;
//       }
//     }
//   }
  
//   const BlueGiant = new Ship(20, 5, 0.7);
  
//   class Invaders {
//     constructor() {
//       this.ships = [];
//     }
  
//     addInvaders() {
//       const shiphull = Math.round(Math.random() * (6 - 3) + 3);
//       const firepower = Math.round(Math.random() * (4 - 2) + 2);
//       const accuracy = Math.round((Math.random() * (0.81 - 0.6) + 0.6) * 10) / 10;
//       this.ships.push(new Ship(shiphull, firepower, accuracy));
//     }
//   }
  
//   let enemyInvaders = new Invaders();
  
//   const attackInvaders = () => {
//     let enemyFleet = enemyInvaders.ships;
//     for (let i = 0; i < enemyFleet.length; i++) {
//       if (BlueGiant.shiphull <= 0) {
//         console.log("Game Over, Your Ship Has Been Taken Out");
//         return;
//       }
//       while (BlueGiant.shiphull > 0 && enemyFleet[i].shiphull > 0) {
//         if (Math.random() < BlueGiant.accuracy) {
//           enemyFleet[i].shiphull -= BlueGiant.firepower;
//         }
//         if (enemyFleet[i].shiphull <= 0) {
//           console.log("Yayyyy You've Taken Out The Invaders!");
//           enemyFleet.splice(i, 1); // Remove destroyed enemy ship from the fleet
//           break;
//         }
//         if (Math.random() < enemyFleet[i].accuracy) {
//           BlueGiant.shiphull -= enemyFleet[i].firepower;
//         }
//         if (BlueGiant.shiphull <= 0) {
//           console.log("Game Over, Your Ship Has Been Taken Out");
//           return;
//         }
//       }
//     }
//   };
  
//   document.getElementById("start").addEventListener("click", startGame);
  
//   function startGame() {
//     enemyInvaders = new Invaders();
  
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
  
//     console.log(enemyInvaders);
//     battle();
//   }
  
//   function battle() {
//     document.getElementById("Ship").innerHTML = "";
  
//     let shipimg = document.createElement("img");
//     shipimg.src = "image/USS_ship.png";
//     document.getElementById("Ship").append(shipimg);
  
//     for (let i = 0; i < enemyInvaders.ships.length; i++) {
//       let invadersimg = document.createElement("img");
//       invadersimg.src = "image/enemy_ship_360.png";
//       document.getElementById("Ship").append(invadersimg);
//     }
  
//     while (BlueGiant.shiphull > 0 && enemyInvaders.ships.length > 0) {
//       attackInvaders();
//     }
  
//     console.log(BlueGiant);
//   }
  
//   startGame();

//Random number 1-20
// var randomNumber = Math.floor(Math.random()*20)+1;
// console.log("number is", randomNumber);
//var randomNumber = Math.ceil(Math,random()*20)-1;

// class Ship {
//     constructor(shiphull, firepower, accuracy) {
//       this.shiphull = shiphull;
//       this.firepower = firepower;
//       this.accuracy = accuracy;
//     }
  
//     fire(target) {
//       if (Math.random() < this.accuracy) {
//         target.shiphull -= this.firepower;
//       }
//     }
//   }
  
//   const BlueGiant = new Ship(20, 5, 0.7);
  
//   class Invaders {
//     constructor() {
//       this.ships = [];
//     }
  
//     addInvaders() {
//       const shiphull = Math.round(Math.random() * (6 - 3) + 3);
//       const firepower = Math.round(Math.random() * (4 - 2) + 2);
//       const accuracy = Math.round((Math.random() * (0.81 - 0.6) + 0.6) * 10) / 10;
//       this.ships.push(new Ship(shiphull, firepower, accuracy));
//     }
//   }
  
//   let enemyInvaders = new Invaders();
  
//   const attackInvaders = () => {
//     let enemyFleet = enemyInvaders.ships;
//     for (let i = 0; i < enemyFleet.length; i++) {
//       if (BlueGiant.shiphull <= 0) {
//         console.log("Game Over, Your Ship Has Been Taken Out");
//         return;
//       }
//       while (BlueGiant.shiphull > 0 && enemyFleet[i].shiphull > 0) {
//         if (Math.random() < BlueGiant.accuracy) {
//           enemyFleet[i].shiphull -= BlueGiant.firepower;
//         }
//         if (enemyFleet[i].shiphull <= 0) {
//           console.log("Yayyyy You've Taken Out The Invaders!");
//           enemyFleet.splice(i, 1); // Remove destroyed enemy ship from the fleet
//           break;
//         }
//         if (Math.random() < enemyFleet[i].accuracy) {
//           BlueGiant.shiphull -= enemyFleet[i].firepower;
//         }
//         if (BlueGiant.shiphull <= 0) {
//           console.log("Game Over, Your Ship Has Been Taken Out");
//           return;
//         }
//       }
//     }
//   };
  
//   document.getElementById("start").addEventListener("click", startGame);
  
//   function startGame() {
//     enemyInvaders = new Invaders();
  
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
//     enemyInvaders.addInvaders();
  
//     console.log(enemyInvaders);
  
//     let shipimg = document.createElement("img");
//     shipimg.src = "image/USS_ship.png";
//     document.getElementById("Ship").appendChild(shipimg);
//   }
//   document.getElementById("start").addEventListener("click", battle);
  
//   function battle() {
//     document.getElementById("Ship").innerHTML = "";
//     let shipContainer = document.createElement("div");
//     shipContainer.classList.add("ship-container");
//     document.getElementById("Ship").appendChild(shipContainer);
    
  
//     let shipimg = document.createElement("img");
//     shipimg.src = "image/uss_ship.png";
//     document.getElementById("Ship").append(shipimg);
  
//     for (let i = 0; i < enemyInvaders.ships.length; i++) {
//       let invadersimg = document.createElement("img");
//       invadersimg.src = "image/enemy_ship_dead_360.png";
//       document.getElementById("Ship").append(invadersimg);
//     }
//     let initialShipHull = BlueGiant.shiphull;
  
//     while (BlueGiant.shiphull > 0 && enemyInvaders.ships.length > 0) {
//       attackInvaders();
//     }
//     if (BlueGiant.shiphull > 0) {
//          let victoryText = document.createElement("p");
//         victoryText.textContent = "Yayyyy You've Taken Out The Invaders!";
//         victoryText.style.color = "blue"
//         victoryText.style.fontSize ="50px"
//         document.getElementById("Ship").appendChild(victoryText);
//       } else {
//          let gameOverText = document.createElement("p");
//         gameOverText.textContent = "Game Over, Your Ship Has Been Taken Out";
//         gameOverText.style.color = "red"
//         gameOverText.style.fontSize = "50px"
//         document.getElementById("Ship").appendChild(gameOverText);
//       }
//       let startHullText = document.createElement("p");
//       startHullText.textContent = "Start Ship Hull: " + initialShipHull;
//       startHullText.style.color = "white";
//       startHullText.style.fontSize = "16px";
//       document.getElementById("Ship").appendChild(startHullText);

// let shipAccuracyText = document.createElement("p");
// shipAccuracyText.textContent = "Ship Accuracy: " + BlueGiant.accuracy;
// shipAccuracyText.style.color = "white"; 
// shipAccuracyText.style.fontSize = "16px"; 
// document.getElementById("Ship").appendChild(shipAccuracyText);

// let shipFirepowerText = document.createElement("p");
// shipFirepowerText.textContent = "Ship Firepower: " + BlueGiant.firepower;
// shipFirepowerText.style.color = "white";
// shipFirepowerText.style.fontSize = "16px"; 
// document.getElementById("Ship").appendChild(shipFirepowerText)

// let endHullText = document.createElement("p");
// endHullText.textContent = "End Ship Hull: " + BlueGiant.shiphull;
// endHullText.style.color = "white";
// endHullText.style.fontSize = "16px";
// document.getElementById("Ship").appendChild(endHullText);
  
// console.log(BlueGiant);
//   }
  
//   startGame();
class Ship {
    constructor(shiphull, firepower, accuracy) {
      this.shiphull = shiphull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
  
    fire(target) {
      if (Math.random() < this.accuracy) {
        target.shiphull -= this.firepower;
      }
    }
  }
  
  const BlueGiant = new Ship(20, 5, 0.7);
  
  class Invaders {
    constructor() {
      this.ships = [];
    }
  
    addInvaders() {
      const shiphull = Math.round(Math.random() * (6 - 3) + 3);
      const firepower = Math.round(Math.random() * (4 - 2) + 2);
      const accuracy =
        Math.round((Math.random() * (0.81 - 0.6) + 0.6) * 10) / 10;
      this.ships.push(new Ship(shiphull, firepower, accuracy));
    }
  }
  
  let enemyInvaders = new Invaders();
  
  const attackInvaders = () => {
    let enemyFleet = enemyInvaders.ships;
    for (let i = 0; i < enemyFleet.length; i++) {
      if (BlueGiant.shiphull <= 0) {
        console.log("Game Over, Your Ship Has Been Taken Out");
        return;
      }
      while (BlueGiant.shiphull > 0 && enemyFleet[i].shiphull > 0) {
        if (Math.random() < BlueGiant.accuracy) {
          enemyFleet[i].shiphull -= BlueGiant.firepower;
        }
        if (enemyFleet[i].shiphull <= 0) {
          console.log("Yayyyy You've Taken Out The Invaders!");
          enemyFleet.splice(i, 1); // Remove destroyed enemy ship from the fleet
          break;
        }
        if (Math.random() < enemyFleet[i].accuracy) {
          BlueGiant.shiphull -= enemyFleet[i].firepower;
        }
        if (BlueGiant.shiphull <= 0) {
          console.log("Game Over, Your Ship Has Been Taken Out");
          return;
        }
      }
    }
  };
  
  document.getElementById("start").addEventListener("click", startGame);
  
  function startGame() {
    enemyInvaders = new Invaders();
  
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
  
    console.log(enemyInvaders);
  
    let shipimg = document.createElement("img");
    shipimg.src = "image/USS_ship.png";
    document.querySelector("#Ship > div").appendChild(shipimg);
  }
  document.getElementById("start").addEventListener("click", battle);
  
  function battle() {
    document.getElementById("Ship").innerHTML = "";
    let shipContainer = document.createElement("div");
    shipContainer.classList.add("ship-container");
    document.getElementById("Ship").appendChild(shipContainer);
    if (BlueGiant.shiphull <= 0) {
        let gameOverText = document.getElementById("gameOverText");
        gameOverText.textContent = "Game Over, Your Ship Has Been Taken Out";
        gameOverText.style.color = "red";
        gameOverText.style.fontSize = "50px";
      } else {
        let victoryText = document.createElement("p");
        victoryText.textContent = "Yayyyy You've Taken Out The Invaders!";
        victoryText.style.color = "blue";
        victoryText.style.fontSize = "50px";
        document.getElementById("Ship").appendChild(victoryText);
      }
    

    let shipimg = document.createElement("img");
    shipimg.src = "image/uss_ship.png";
    document.getElementById("Ship").append(shipimg);
  
    for (let i = 0; i < enemyInvaders.ships.length; i++) {
      let invadersimg = document.createElement("img");
      invadersimg.src = "image/enemy_ship_dead_360.png";
      document.getElementById("Ship").append(invadersimg);
    }
    let initialShipHull = BlueGiant.shiphull;
  
    while (BlueGiant.shiphull > 0 && enemyInvaders.ships.length > 0) {
      attackInvaders();
    }
    
    let startHullText = document.createElement("p");
    startHullText.textContent = "Start Ship Hull: " + initialShipHull;
    startHullText.style.color = "white";
    startHullText.style.fontSize = "16px";
    document.getElementById("Ship").appendChild(startHullText);
  
    let shipAccuracyText = document.createElement("p");
    shipAccuracyText.textContent = "Ship Accuracy: " + BlueGiant.accuracy;
    shipAccuracyText.style.color = "white";
    shipAccuracyText.style.fontSize = "16px";
    document.getElementById("Ship").appendChild(shipAccuracyText);
  
    let shipFirepowerText = document.createElement("p");
    shipFirepowerText.textContent = "Ship Firepower: " + BlueGiant.firepower;
    shipFirepowerText.style.color = "white";
    shipFirepowerText.style.fontSize = "16px";
    document.getElementById("Ship").appendChild(shipFirepowerText);
  
    let endHullText = document.createElement("p");
    endHullText.textContent = "End Ship Hull: " + BlueGiant.shiphull;
    endHullText.style.color = "white";
    endHullText.style.fontSize = "16px";
    document.getElementById("Ship").appendChild(endHullText);
  
    console.log(BlueGiant);
  }
  
  startGame();