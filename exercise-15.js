/*
Mengelompokkan Hewan

Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya.
Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.
Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/

function groupAnimals(hewan) {
    var group = [];
    var indeks = 0;
    hewan.sort();
    for (var i = 0; i < hewan.length; i++) {
        if (group.length === 0) {
            group.push([hewan[i]]);
        } else if (group[indeks][0][0] === hewan[i][0]) {
            group[indeks].push(hewan[i]);
        } else {
            group.push([hewan[i]]);
            indeks = indeks + 1;
        }
    }
    return group;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]