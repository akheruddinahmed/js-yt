// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Akher",
    "full name": "Akher Uddin Ahmed",
    [mySym]: "mykey1",
    age: 18,
    location: "Bangaluru",
    email: "ahmed@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ahmed@chatgpt.com"
// Object.freeze(JsUser) //To Lock the object so that we can't do any modification,we use freeze
JsUser.email = "ahmed@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());