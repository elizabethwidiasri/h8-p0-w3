var angkaBalik = '';
function angkaPalindrome(num) {

    while (true) {
        angkaBalik = '';
        num = num + 1;

        var angka = String(num);

        for (var i = angka.length - 1; i >= 0; i--) {

            angkaBalik = angkaBalik + angka[i];
        }

        if (angkaBalik === angka) {

            return num
        }
    }
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));