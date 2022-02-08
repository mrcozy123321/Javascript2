// const user = {
//   firstName: 'Daniel',
//   lastName: 'Mrkoci',
//   age: 29,
//   email: 'daniel@mail.com'
// }

// console.log(user);

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  }
}

module.exports = user