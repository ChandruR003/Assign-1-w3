console.log("Session-2 of week-2")
var topic= "Java script of html"
console.log(self + "This the the javascript known as script.js in html ")
var self = "This is "
console.log(self + "Chandru")
console.log(self + "I am a student of a bot college located in some place or known as forest.")
var age=20
console.log(" My age is " + age)
var grade= 8
console.log(" My  grade is " + grade)
console.log(true)
function circle(radius)
{
    this.radius = radius;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
   var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));
var circleRadius = parseInt(prompt("Please enter the radius of circle:"));
let circumferenceOfCircle = 2 * Math.PI * circleRadius;
console.log("Circumference of circle is: " + circumferenceOfCircle);


function circle(radius)
{
    this.radius = radius;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}




