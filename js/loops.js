/* // while loop
let i = 1; //initialization
while (i < 11) { //condition
    console.log("we have "+ i + " pizzas"); //update
    i++;
} */

/* // do while loop
let i = 1;
do {
    console.log("we have numbers from " + i);
    i++;
} while (i < 10);
 */


/* 
// for loop
for (let i = 0; i < 10; i++) {
    console.log(i)
    
} */


/* // a guessing game using a do while loop
let diceSide;
do {
   diceSide = prompt("guess the side of the dice");
} while (diceSide.toLowerCase() !== "password"); */

/* // for loop
let employees = ["mercy", "lucy", "kiash", "evans", "njoroge"];
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
} */

/* 
//for loop to search for a string
let homelocation = "my home is located at a city called kiambu";
let city = "k";
for (let i = 0; i < homelocation.length; i++) {
    if (homelocation[i] === city) {
            console.log(homelocation[i]);
    }else {
        console.log("cannot find the string");
    }
    
} */

/* let myString = "my clothes were stolen in the hanging line";
let myStringSearch = "e";
// printing the output to get where the character string "c" is found at
for (let i = 0; i < myString.length; i++) {
    if (myString[i] === 'a' || myString[i] === 'e' || myString[i] === 'i' || myString[i] === 'o' || myString[i] === 'u') {
        console.log("The character for the search is: " + myStringSearch + " found at: " + i);
        // break;
        continue;
    }
    console.log(myString[i]);
} */

// nested loops
/* {
    for (let i = 0; i < 10; i++) {
        for (let k = 20; k < 30; k++) {
            console.log(i, k);
            
        }
        
    }
} */

// forming a pyramid using loops
{
    let d = document.getElementById("description");
    for (let i = 0; i < 10; i++) {
        for (let k = i; k >=0 ; k--) {   
            d.append(k + " ");
        }
       var br = document.createElement('br');
       d.appendChild(br);
    }
}

