(function (){
// IiFE - Immediately involked function experession
 age = 50;
}());
/* the orange brackets says this is an experession not just a declaration
the pink brackets tells the function to execute */

{
let x= 10;
const y = 20;
var z = 30;
x = x + y+ z; 
console.log(x, y, z);
console.log(x);
}

// creating an object
let person = {
    // attributes of the object
    name : "kyle",
    age : 21,
    favouriteFood: "pizzah",
    
    fun: function () {
        console.log("football");
        console.log("swimming");
        console.log("volley ball");
    }

}


console.log(person);
// calling the function that is inside the object
person.fun();
// objects that inside the function
console.log(person.age);

// creating a new date
let now = new Date();
console.log(now);

// creating an array
let grades = [20, 30, 40];
console.log(grades);

// primitives 
let myName  = "Evans njoroge";
newName  = myName.toUpperCase();
console.log(newName);

let salary = -90071994740999;
console.log(Number.Max_SAFE_INTEGER);

// isSafeInterger is used to check if the number is safe to be stored
console.log(Number.isSafeInteger(salary));

let no_pizzah = 10;
console.log(no_pizzah % 3);

let orange = 10;
orange = orange + 1;
console.log(orange);


