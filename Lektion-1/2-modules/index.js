// Egna moduler

// import hej from './user'
const hej = require('./user');

console.log(hej);



const {names, ages} = require('./module');

console.log(names);
console.log(ages);

const User = require('./user');
const user1 = new User('Daniel', 'Mrkoci');

user1.greet()