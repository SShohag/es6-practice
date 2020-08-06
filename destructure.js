const person = {name:'Shohag', age:26, job:'bekar', village:'charpara', phone:1457544574,  friends:['swadhin', 'saddam', 'shamim', 'babu'], distric:'shirajganj'};

const {phone, name} = person;
// const name = person.name;
// const phone = person.phone;
// const job = person.job;


// console.log(name, phone);
// console.log(name, phone);
// console.log(name, phone);
const Hero = ['sakib Khan', 'Shahrukh Khan', 'salman Khan', 'amir khan'];
const [heroalom, ...remain] = Hero;
console.log(remain);

const personal = {
    name:'Shohag',
    info:{
        details: 'dhangare',
        thana: 'riganj' 
    }
}
const { thana } = personal.info;
console.log(thana);