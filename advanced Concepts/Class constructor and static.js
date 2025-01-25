class User {
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return  `${this.password}123`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","cha@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene 

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// user.prototype.encryptPassword = function(){
//     return `${this.password}123`
// }
// user.prototype.changeUsername = function(){
//     return `${this.password}123`
// }
// const tea = new User ("tea", "tea@gmail.com", "123")
// console.log(chai.encryptPassword());
// console.log(tea)