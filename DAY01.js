// write a codde to find area of rectangel
// INPUT : length, width 
var length = "12"; 
var width = "20";

// PROCESS 
// formula area : length*width
var luas = length * width;  

// output 
console.log("Rectangel area >>", luas);

// write a code to find perimeter of rectangel 
// INPUT : length, width 
var panjang = "12"; 
var lebar = "20";

// PROCESS 
var hasil = 2*(panjang + lebar)

// output 
console.log("Rectangel perimeter >>", hasil);

// Write a code to find diameter, circumference and area of a circle.
// DIAMETER
// INPUT : jari-jari 
let jari2 = 7;

// PROCESS 
let diameter = 2* jari2;

// OUTPUT 
console.log(diameter);

// KELILING
// INPUT : jari-jari 
 jari2 = 7;

// PROCESS 
let keliling = 2* 3.14* jari2;

// OUTPUT 
console.log(keliling);

// LUAS
// INPUT : jari-jari 
 jari2 = 7;

// PROCESS 
let area = 2* jari2* jari2;

// OUTPUT 
console.log(area);

// Write a code to find angles of triangle if two angles are given.
// INPUT : jumlah sudut segitiga 180
let sudutA = 70; 
let sudutC = 30 

// PROCESS 
let segitiga = 180 - (sudutA + sudutC);

// OUTPUT 
console.log(segitiga)

// Write a code to get difference between dates in days.
// INPUT : 
let date1 = new Date ("2023/9/10");
let date2 = new Date ("2023/9/25");

// PROCESS
let selisih = date2 - date1;
let perbedaanhari = selisih / (1000*60*60*24);

// OUTPUT 
console.log(perbedaanhari);

// Write a code to convert days to years, months and days.
// INPUT : 400 days
let hari = 400;


// PROCESS 
let tahun = (Math.floor(hari/365))
let bulan = (Math.floor(hari % 365 /30));  
let days = hari % 365 % 30;



// OUTPUT
console.log(tahun)
console.log(bulan)
console.log(days)