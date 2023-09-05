function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  getMilk(4); //$1.5 4/1.5 = 2 bottles of milk

  var change = getMilk(4);

console.log("buy " + calcBottles(money, 1.5) + "bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  // return money%1.5; Remainder of this division.

  return calcChange(money, 1.5);

}

function calcBottles(startingMoney, costPerBottle) {

  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;

}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello master, here is your " + getMilk(10, 3) + " change.");