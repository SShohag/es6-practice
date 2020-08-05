//const is constant it's not change
const name = "shohag";
// name = "moutusi";
console.log(name);

const friends = ['shohag', 'shamim', 'saddam'];
friends [ 2 ] = 'swadhin';
friends [0] = 'saddam';
friends.push('ali');
friends.unshift('kalam');
console.log(friends);
//let is changeable but un leaked. 
num = 0;
for(let i = 0; i < 10; i++){
    sum = num + i;
}
console.log(i);