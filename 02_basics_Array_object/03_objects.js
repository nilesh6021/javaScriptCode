//object literals//

const sym =Symbol("key1");

const User ={
    name:"nilesh",
    "full name":"nilesh patil",
    [sym]:"mykey1",
    age:30,
    email:"nilesh@google.com",
    location:"kolhapur",
    islogedin :false,
    lastlogindays:["Monday","Saturday"]
}

// console.log(User.email);
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User[sym]);

//change any value //
User.email ="nilesh@gmail.com"
//Object.freeze(User)
//User.email ="nilesh@microsoft.com"
//console.log(User)

//functions//
User.greeting1 = function(){
    console.log("Hello wellcome");
}
User.greeting2 = function(){
    console.log(`Hello wellcome,${this.name}`);
}
console.log(User.greeting1());
console.log(User.greeting2());