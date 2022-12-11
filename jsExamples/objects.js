var person ={
 fname: "Evans",
 lname: "Njoroge",
 age: 21,
 children : [' jane', 'dedan'],
 address: {
    country: "kenya",
    city: "kikuyu",
    village: "kiangotho"
 },
 fullName:function(){
    console.log(this.fname+" "+this.lname);
 }
}
// console.log(person.lname);
// console.log(person.children[0]);

/* for (let i = 0; i < person.children.length; i++) {
    console.log(person.children[i]);
} 

console.log(person.fullName());
*/
// new way to create an object
var apple = new Object;
apple.color = 'red';
apple.shape = 'round';
apple.status = 'ripe';

apple.describe = function() {
    return 'an apple is of the color, '+this.color+', it\'s of the shape '+this.shape+' it\'s of the status '+this.status+' ';
}
console.log(apple.describe());
