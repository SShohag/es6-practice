//simple way to declaring function

function doubleIt(sum){
    return sum*2;
}

//another way to declaring function

const doubleIt = function(sum){
    return sum*2;
}

//Array function to declaring function
const doubleIt = sum => sum*2; //for single parameter
const add = (num1, num2) => num1 + num2;//for more than one parameter 
// for more more function
const mathDoing = (x, y) => {
    const sum = x + y;
    const subtract = x-y;
    const result = sum * subtract;
    return result;
}
const result = mathDoing(20,10);
console.log(result);