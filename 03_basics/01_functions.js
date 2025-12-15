
function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("E");
    console.log("R");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "admin"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("akher"))
// console.log(loginUserMessage("akher"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "akher",
    prices: 199
}

//Passing object to function

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//Passing object to function without storing in variable

// handleObject(user)
handleObject({
    username: "admin",
    price: 399
})

//Passing array to function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//Directly passing array without storing in variable
console.log(returnSecondValue([200, 400, 500, 1000]));