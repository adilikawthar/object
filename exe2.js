let isRaining = true;
let isSunny = false;
let hasUmbrella = true
console.log(isRaining);
console.log(isSunny);
console.log(hasUmbrella)


let a = 10 > 5;
let b = 3 < 8;
let c = 7 >= 7;
let d = "hello"=== "hello";
let e ="cat"==="dog";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

function checkVotingAge(age) {
    if (age >= 18) {
        console.log("You can  vote.");
    }
}
checkVotingAge(20);
checkVotingAge(16);
checkVotingAge(18);

function checkTemperature(temperature){
    if (temperature > 32) {
        console.log("water is frozen");
    }
} 
    console.log("water is liquide");

   function checkPasswordLength(password){
   let password = "myPassword";
   console.log(password.length > 8);