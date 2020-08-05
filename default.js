// function add (num1, num2){
//     return num1 + num2 ;
// }
// const total = add (15,17);
// console.log("Total =",total);
//now pass only one value
function add (num1, num2 = 10){
    // num2 = num2 || 20
    return num1 + num2;
}
const total = add (15);
console.log(total);