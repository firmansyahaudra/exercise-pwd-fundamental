// Write a code to convert celsius to fahrenheit.
// INPUT 
var celcius = 24;

// PROCESS
var f = (9/5 * 24) + 32

// Output 
console.log(f);

// Write a code to check whether the number is odd or even
// INPUT : 
var supri = 80 ;


// PROCESS:
if(supri % 2 === 0) {
    console.log("Supri memiliki angka genap");
}else{
    console.log("supri memiliki angka ganjil");
}

// Write a code to check whether the number is prime number or not
// INPUT 
var prime = 9;
var primeResult = "";

// PROCCES:
for( var x = 2; x <= prime; x++){
    if(x === prime) {
        primeResult = "Bilangan prima";
    } else if (prime % x === 0){
        primeResult = "Bukan bilangan prima"
        break;
    } else {
        primeResult = "Bilangan prima"
    }
}
console.log(primeResult)

// Write a code to find the sum of the numbers 1 to N.
// INPUT 
var q = 10;
var just = 0; 


// PROCESS
for(var x =1; x <= 5; x++){
    just = just + x
}
console.log(just)


// Write a code to find factorial of a number.
// INPUT 
var fact = 10; 
var resun = 1;

// PROCESS
for(var x = fact; 1 <= fact; fact--){
    resun = resun * fact
} 
console.log(resun)

// Write a code to print the first N fibonacci numbers.
// INPUT : bil fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
let N = 20; 
let a = 0, b = 1;
let result = "";


// PROCESS
if (N >= 1) {
  result += a;
}

if (N >= 2) {
  result += ", " + b;
}

for (let i = 2; i < N; i++) {
  let c = a + b;
  result += ", " + c;
  a = b;
  b = c;
}

console.log(result);