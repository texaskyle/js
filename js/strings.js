/* {
    let name = "Evans \n njoroge"; //this is primitive
    let myName = "Kiarie"; //this is an object
    console.log(name);
    
    console.log('my name is ' +name );
    console.log(name.length);
} */


/* 
// using some string functions
let myName = "njoroge evans";
console.log(myName.length);
console.log(myName.charAt(5));
console.log(myName.concat(" is in forth year")); */

// using the search functions
var story = "i joined  the university in 2019,  i was stil 17 years and yet to take an id card. which was to be issued by the government";
var search1 = "university";
console.log(story.includes(search1));
console.log(story.includes(search1, 40)); //40 is to search from where the search will start from
var search2 = "kyle";
console.log(story.includes(search2));

// to search where the string is in statement
console.log(story.indexOf(search1));
console.log(story.indexOf(search2)); //this will give a negative one meaning thata the search was not found

// using substring
console.log(story.substr(14, 10));
console.log(story.substring(14, 25));

// modifying the a string
console.log(story.toUpperCase(story));
console.log(story.toLowerCase(story));

// using trim to trim the whitespaces at the beging and at the end of the string...yuo can use it to make sure thata the users of the website are not using whitespace at the begining and at the nd of their username
var story2 = "            i joined  the university in 2019,  i         was stil 17 years and yet to take an id card. which was to be issued by the government        ";
console.log(story2.trim());
console.log(story2);


// using split to split the string into sub parts
console.log(story.split(" "));

// using search
console.log(story.search("university"));
// using replace
console.log(story.replace("university", "college"));



