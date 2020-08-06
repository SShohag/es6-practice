//Adding to array by using concat
const temp = [22, 23, 24, 27, 36, 25];
const temp2 = [26, 27, 26, 28, 30];
const temp3 = [33, 35, 39];
const total = temp.concat(temp2).concat(45, 14).concat(temp3);
const total1 = [...temp, ...temp2];
console.log(total1);

//Finding max value by using three dots
const minister = 450;
const businessmen = 400;
const shochib = 350;
const maxTaka = [minister, businessmen, shochib];
const maximum = Math.max(...maxTaka);
console.log(maximum);
