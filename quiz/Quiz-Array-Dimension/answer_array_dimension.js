
// ### Soal 1
/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string,
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika panjang string GENAP

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

// function doubleReverse(arr) {
//     let reverse = [];
//     if (arr.length === 0) {
//         return "Invalid input parameter"
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//         // console.log(arr[i])
//         if (arr[i].length % 2 === 0) {
//             let word = "";
//             for (let j = arr[i].length - 1; j >= 0; j--) {
//                 // console.log(arr[i][j])
//                 word += arr[i][j]
//             }
//             reverse.push(word)
//             word = "";
//         } else {
//             reverse.push(arr[i])
//         }
//     }
//     return reverse;
// }

// console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// // [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
// console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// // [ 'umak', 'gnayas', 'aku' ]
// console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
// //[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
// console.log(doubleReverse([]))
// // invalid input parameter


// ### Soal 2
/*
==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

// function findNotRelative(arr1, arr2) {
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         // console.log(arr1[i]);
//         let found = false;

//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             result.push(arr1[i])
//         }
//     }
//     return result;
// }

// console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
// console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
// console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]


// ### Soal 3

/*
Minimum Distance Between Greatest Element

Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.

Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2

Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2

Jadi minimum jarak adalah 2

Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1


Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1

Jadi minimum jarak adalah 1

RULE:
 - Dilarang menggunakan .map, .filter dan .reduce

*/

// function minDistanceBetweenGreatest(arr) {
//     let max = 0;
//     let maxIndex = [];
//     let minDistance = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i])
//         if (arr[i] > max) {
//             max = arr[i];
//             maxIndex = [i]
//         } else if (arr[i] === max) {
//             maxIndex.push(i)
//         }
//     }

//     for (let j = 0; j < maxIndex.length - 1; j++) {
//         let distance = maxIndex[j + 1] - maxIndex[j]
//         if (distance < minDistance) {
//             minDistance = distance
//         }
//         console.log("dist", distance)
//     }

//     console.log(minDistance)
// }

// console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
// console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
// console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0


// ### Soal 4
/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
    let word = words.split(" ")
    // console.log(word);

    let totalLength = 0;

    let result = []
    for (let i = 0; i < word.length; i++) {
        // console.log(word[i]);
        totalLength += word[i].length
    }


    let average = Math.round(totalLength / word.length)
    for (let i = 0; i < word.length; i++) {
        if (average === word[i].length) {
            result.push(word[i])
        }
    }

    // console.log(Math.round(average / word.length))

    return result;

    // kiss
    // const wordList = words.split(" ");
    // const totalLength = wordList.reduce((sum, word) => sum + word.length, 0);
    // const avg = Math.round(totalLength / wordList.length);

    // const result = wordList.filter(word => word.length === avg);
    // return result;
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []