alert("hello kyle this is my first javascript project");
 document.getElementById("button").onclick = function (){
    document.getElementById("confirm").innerHTML = "Order placed. check the email for confirmation";
    document.getElementById("button").style.display="none";
} 


                      // variables
var username = prompt();
// alert(username);
console.log(username);

var age;
age = 21;
console.log(age);
 var newAge = 30;
 console.log(newAge);

 var message = "happy birthday, " + username + " i am now age: " + newAge;
 console.log(message);