/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

function main(){
    beeperDiagonal();
 }
 
 function beeperLeft(){
   putBeeper();
   move();
   turnLeft();
   move();
 }
 
 
 function beeperRight(){
   putBeeper();
   move();
   turnRight();
   move();
 }
 
 function beeperDiagonal(){
    beeperLeft();
    beeperRight();
    beeperLeft();
    beeperRight();
    putBeeper();
 }


 // ou

 function main() {
    putBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
 }

 function diagonalMoveAndBeeper(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }