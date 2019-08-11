
/* 
==============
Bilangan Prima
==============
​
Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat algoritma DAN pseudocode untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */
​
// Tulis algoritma di sini
 
1. Input sembarang angka pada variabel ​'number'
2. Input sembarang angka pada variabel 'count'
3. Moduluskan 'number' dengan angka 1 sampai 'number'
4. Catat berapa kali hasil modulus tersebut adalah nol pada variabel 'count'
5. Bila hasil pencatatan 'count' berjumlah 2, maka tampilkan 'number' is PRIME 
6. Bila hasil pencatatan tidak berjumlah 2, maka tampilkan 'number' is NOT PRIME 
7. Pengecekan bilangan prima selesai
***catatan: sebuah bilangan prima hanya akan mengalami "modulus sama dengan nol" sebanyak dua kali seumur hidupnya, yaitu saat di moduluskan dengan angka 1 dan angka bilangan itu sendiri

// // // Tulis pseudocode di sini

STORE 'number' with any value
STORE 'count' with any value
CALCULATE for 'number' modulus 1 up to 'number'
COUNT for if each 'number\'s' modulus equals to 0
IF COUNT equals to 2 THEN 
    DISPLAY number is prime
    ELSE IF count is not equals to 2 THEN
        DISPLAY number is not prime
    END IF
END IF

// Javascript


var number = 5;
var count = 0;

for (i=1; i<=number; i++) {
    count = '';
    if (number%i === 0) {
        count = count + 1;
    } else {
        count = count;
    }
}

if (count === 2) {
    console.log(number + ' is PRIME');
} else if (count !== 2) {
    console.log(number + ' is NOT PRIME');
}
    