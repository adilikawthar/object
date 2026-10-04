function greatPerson (name) {
    console.log('hello,'+ name +'!');
    
    
}
greatPerson('kawthar');

function double(number) {
    return number * 2;
}
let number = 25;
console.log(double(number));

function add (a,b){
    return a + b;
}
let a = 3;
let b = 4;
console.log(add(a, b));
function calculateRectangleArea(length, width) {
    return length * width;
}
let length = 5;
let width = 10;
console.log(calculateRectangleArea(length, width));

const pi = 3.14159;
function calculateCircleArea(radius) {
    return pi * radius * radius;
}
let radius = 4;
console.log(calculateCircleArea(radius));

const year = 2026;
function calculateAge(birthYear){
    return year - birthYear;    

}
let birthYear = 1990;
let birthYear1 = 2000;
let birthYear2 = 2010;
console.log(calculateAge(birthYear));
console.log(calculateAge(birthYear1));
console.log(calculateAge(birthYear2));

function calculateTotalPrice(price , tax){
    return price + tax;
}
let price = 50;
let price1 = 30;
let price2 = 40;
let tax = 0.05;
let tax1= 0.01;
console.log(calculateTotalPrice(price, tax));

function calculateBMI( weight , height){
    return weight / (height * height);
}
let weight = 70;
let height = 1.75;
console.log(calculateBMI(weight, height));
