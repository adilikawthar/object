 
  var person = {
  id: "kawthar",
  age: 35,
  city: "ghardimaou"
};
person.age ;
console.log(person)

var dog = {
  name:"Scooby Doo",
  age: 7,
  breed: "Great Dane"
};
dog.name;
console.log(dog)

var book = {
title:"The Great Gatsby" ,
author:"F.ScottFitzgerald",
year: 1925,
pages: 180,
};
book.name;
console.log(book)
 var car = {
  make: "Toyota",
model:"Camry",
year: 2020
 };
 console.log(car)

 var user ={
username: "john_doe",
email: "john@example.com",

isActive: true
 };
 console.log(user)

 var movie ={
  title: "Inception",
director: "Christopher Nolan",
year: 2010,
rating: 8.8,

 };
 console.log(movie)

 var student = {
firstName: "Alice",
lastName: "Johnson",
grade: 11,
gpa: 3.8,
 };
 
 let fullname =student.firstName + " " +  student.lastName;
 console.log(fullname);

 var product = {
name: "Laptop",
price: 999.99,
inStock: true,
category: "Electronics",
 }
 console.log(product);
let ch = product.name  +" costs"+ product.price  +" and is in the category"+ product.category ;
console.log(ch);

var poppy = {
name: "Gatsby",
age: 1,
breed: "Corgi",
}
console.log(poppy);
poppy.name = "Gatsby The Great";
poppy.age = 2;

console.log(poppy);

var phone ={
brand: "Apple",
model: "iPhone 12",
}
console.log(phone);
phone.color ="Black" ,
phone.storage= "128GB",
phone.price = 799
console.log(phone);

//Exercise 2.3: Bracket Notation with Variables
var person ={
name: "Sarah",
age: 30,
job:"Engineer",
}
console.log(person);
const prop ="age";
const res = (person[prop]);
console.log(person(prop));

//Exercise 2.4: Update Product Inventory
var inventory = {
apples: 50,
oranges: 30,
bananas: 40,
}
console.log(inventory);
a=inventory.apples+20;
b=inventory.oranges-10;
c=inventory.bananas=0;
console.log(a,b,c);

//Exercise 2.5: Property Checker
var settings = {
darkMode: true,
resolution:undefined,
notifications: true,
language: "English",
}
if (settings.darkMode !== undefined);{
console.log(settings.darkMode);
}
if(settings.resolution == undefined);
console.log("do not exist");


//Exercise 2.6: Object Keys and Values
var scores = {
math: 95,
english: 88,
science: 92,
}
const v1 =Object.keys(scores);
const v2 =Object.values(scores);
const v3 =Object.entries(scores);
console.log(v1);
console.log(v2);
console.log(v3);
 //exercice2.7
 var expenses= {
rent: 1200,
groceries: 300,
utilities: 150,
entertainment: 100,
 }
 function getTotalExpenses(expenses) {
  const v=Object.values(expenses);
const total = v.reduce((sum, v) => {
return sum + v;
},0);
 
console.log(total)
}
