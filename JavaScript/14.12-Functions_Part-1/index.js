// Welcome to the Stanford Karel IDE
// This is a free space for you to
// write any Karel program you want.

function main(){
    // your code here
    goInCircle();
    goInCircle();
}

function goInCircle() {
    move();
    turnLeft();
    move();
    turnLeft();
}

function getCorner(){
     move();
      move();
       move();
        move();
        turnLeft();
         move();
          move();
           move();
            move();
}

function moveFourTimes(){
    move();
    move();
    move();
    move();
}

function getCorner(){
    moveFourTimes()
        turnLeft();
            moveFourTimes()
}