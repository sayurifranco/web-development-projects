var output = [];
output.push(1); // [1]
output.push(2); // [1,2]
output.push(3); // [1,2,3]
var count = 1;

function fizzBuzz() {
    
    //write your code here
    if(count%3===0 && count%5===0){
    output.push("FizzBuzz");
    } else if(count%3===0){
        output.push("Fizz");
    } else if(count%5===0){
        output.push("Buzz");
    } else {
        output.push(count);
    }
    
    count = count + 1; // ou count++
    
    console.log(output)
}

