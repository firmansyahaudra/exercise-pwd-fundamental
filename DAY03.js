
// 1. Write a code to display the multiplication table of a given integer.
// INPUT : a = 9; b = 10;
var a = 9;
var b = 10; 
result = "";

// PROCESS
for ( var i = 1; i <= b; i++) {
    result += `${a}` + "x" + `${i}` ;
    result += "= "
    result += `${9 * i}` 
    result += "\n"

}
// OUTPUT
console.log(result);


// 2. Write a code to check whether a string is a palindrome or not.
// INPUT : var = Malam
var data = "Malam";
var dataReverse ="";
var resum = "";

console.log(
    data.charAt(4),
    data.charAt(3),
    data.charAt(2),
    data.charAt(1),
    data.charAt(0),
);

for(var i = data.length - 1; i >= 0; i--){
    dataReverse += data.charAt(i);
}
console.log(dataReverse);
if(data.toLowerCase() === dataReverse.toLowerCase() ){
    resum = "Palindrome";
} else {
    resum = " Non-Palindrome";
}

console.log(resum);










// 3. Write a code to convert centimeter to kilometer
// INPUT : 
var cm = 100;
var km = 100000;

// PR0CESS
kiloMeter = cm / km;
    

// OUTPUT 
console.log(kiloMeter);


// 4. Write a code to format number as currency (IDR)
//INPUT : 20000 
var uang = 20000;

// Process :
mataUang = uang.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

// Output : Menjadikan 20000 menjadi nilai mata uang indonesia 
console.log(mataUang)

// 5. Write a code to remove the first occurrence of a given “search string” from a string
// INPUT : variabel kalimatUtama = hello world, huruf = ello
var kalimatUtama = "hello world";
var huruf = "ell";

// PROCESS
        // 1. mencari tahu kode nomer huruf apt pada kalimat captain america 
var oke = kalimatUtama.indexOf(huruf);
console.log(oke)
        // 2. melakukan pemotongan huruf 
if(kalimatUtama !== 1 ||  kalimatUtama !== 2 || kalimatUtama !== 3) {
    bagianBaru = kalimatUtama.slice(0,oke); 
    bagianBaru1 = kalimatUtama.slice(4)

    hasil = bagianBaru + bagianBaru1;
} else {
    kalimatUtama; 
}

// OUTPUT
console.log(hasil)


// 6. Write a code to capitalize the first letter of each word in a string
// INPUT : variabel kukang = hello world, var hurufkapital = "", var kapital = true
var iron = "hello word";
var hurufKapital = "";
var kapital = true;

// PROCCES    
  
for (var i = 0; i < iron.length; i++) {
     hulk = iron.charAt(i);
    if (kapital && hulk >= "a" && hulk <= "w" ) {
    hulk = hulk.toUpperCase();
    kapital = false;
  } else if (hulk === ' ') {
    kapital = true;
  }
    hurufKapital += hulk;
}
console.log(hurufKapital);






// 7. Write a code to reverse a string.
// INPUT : var name = Bruno Fernandes; 
var name = "Bruno Fernandes";
var glory = "";

// PROCESS  
var name1 = name.length

for (let i = name1 - 1; i >= 0; i--) {
  glory += name.charAt(i);  
}

console.log(glory);



// 8. Write a code to swap the case of each character from string 
// INPUT : var : The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX
var s = "The QuiCk BrOwN Fox";
var hrfKapital = ""; 
var resup = "";

// PROCESS
for( var b = 0; b <= s.length; b++) {
    hrfKapital = s.charAt(b);
    if(hrfKapital == hrfKapital.toLowerCase()){
        resup += hrfKapital.toUpperCase();
    } else {
        resup += hrfKapital.toLowerCase();
    }
}
console.log(resup);





// 9. Write a code to find the largest of two given integers
// INPUT : var bilangan1 = 25, bilangan2 = 75, bilanganTerbesar
var bilangan1 = 25;
var bilangan2 = 75; 
var bilanganTerbesar;

// PROCESS
if(bilangan1 > bilangan2) {
    bilanganTerbesar = bilangan1 
} else {
    bilanganTerbesar = bilangan2
} 

// OUTPUT
console.log(bilanganTerbesar)





// 10. Write a conditional statement to sort three numbers
// INPUT : var angsa1 = 69, angka2 = 96, angka3 = 54
var angsa1 = 69; 
var angsa2 = 96;
var angsa3 = 54; 


var kecil, sedang, besar; 


// PROCESS
if(angsa1 >= angsa2 && angsa1 >= angsa3) {
    besar = angsa1; 
    if(angsa2 >= angsa3){
        sedang = angsa2;
        kecil = angsa3
    } else {
        sedang = angsa3;
        kecil = angsa2
    }
} else if(angsa2 >= angsa1 && angsa2 >= angsa3) {
    besar = angsa2;
    if(angsa1 >= angsa3) {
        sedang = angsa1;
        kecil = angsa3;
    } else {
        sedang = angsa3;
        kecil = angsa1
    }
} else {
    besar = angsa3;
    if(angsa2 >= angsa1){
        sedang = angsa2;
        kecil = angsa1
    } else {
        sedang = angsa1;
        kecil = angsa2
    }
}

// OUTPUT
console.log("Angsa yang diurutkan dari :", besar, ",",  sedang, ",",  kecil);





// 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data tipe.
// INPUT : var ahay = Bruno Fernandes


// PROCESS
var ahay = "Bruno Fernandes";
var hsl = "";

if(typeof ahay === "string"){
    hsl = "Ini tipe data string";
} else if (typeof ahay === "number") {
    hsl = "Ini tipe data number";
} else {
    hsl = "Tipe data lain"
}

// OUTPUT
console.log(hsl);




// 12. Write a code to change every letter a into * from a string of input
// INPUT : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y
var b = "An apple a day keeps the doctor away";
var v = "";

// PROCESS
b = b.toLowerCase()
console.log(b);

for(var z = 0; z <= b.length; z++) {
    if(b.charAt(z) === "a") {
        v += "*";
    } else {
        v += b.charAt(z);
    }
}

// OUTPUT
console.log(v);





