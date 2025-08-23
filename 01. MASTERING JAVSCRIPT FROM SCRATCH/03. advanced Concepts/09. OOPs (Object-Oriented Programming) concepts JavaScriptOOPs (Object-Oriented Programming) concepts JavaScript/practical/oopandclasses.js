const user = {
    userName: "Rajat",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from Database");
    }
}

console.log(user.userName)
console.log(user.loginCount)
console.log(user.getUserDetails());