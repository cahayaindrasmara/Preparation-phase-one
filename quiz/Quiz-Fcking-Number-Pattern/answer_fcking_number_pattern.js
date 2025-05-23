// ### Soal 1
/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT =
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' ']
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

// function missingNum(arr) {
//     let knownNumbers = [];
//     let missingNumbers = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] !== " ") {
//                 knownNumbers.push(arr[i][j])
//             }
//         }
//     }

//     let max = knownNumbers[0];
//     let min = knownNumbers[0];
//     for (let i = 0; i < knownNumbers.length; i++) {
//         if (knownNumbers[i] > max) {
//             max = knownNumbers[i]
//         }

//         if (knownNumbers[i] < min) {
//             min = knownNumbers[i]
//         }
//     }

//     for (let i = min; i <= max; i++) {
//         // console.log("loop 1:", i)
//         let found = false;

//         for (let j = 0; j < knownNumbers.length; j++) {

//             if (i === knownNumbers[j]) {
//                 found = true;
//             }
//             // console.log("loop 2:", knownNumbers[j])
//         }

//         if (!found) {
//             missingNumbers.push(i)
//         }
//     }

//     // console.log(`list: ${knownNumbers}, max: ${max}, min: ${min}, miss: ${missingNumbers}`)
//     return missingNumbers;
// }


// console.log(missingNum([
//     [3, ' ', 5],
//     [1, ' ', 7],
//     [9, ' ', ' ']
// ])) // [ 2, 4, 6, 8 ]
// console.log(missingNum([
//     [2, ' '],
//     [' ', 5]
// ])) // [ 3, 4 ]
// console.log(missingNum([
//     [11, ' ', 13],
//     [17, ' ', 19],
//     [' ', 16, ' ']
// ])) // [ 12, 14, 15, 18 ]
// console.log(missingNum([
//     [3, ' ', 5, 15],
//     [1, ' ', 7, 13],
//     [9, ' ', ' ', 12],
//     [' ', 16, ' ', ' ']
// ])) // [ 2, 4, 6, 8, 10, 11, 14 ]
// console.log(missingNum([])) // []


// ### Soal 2
/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/


// function squareNumber(num) {
//     if (num < 3) {
//         return `Minimal input adalah 3`
//     }

//     let multiArray = [];
//     let counter = 1;
//     for (let i = 0; i < num; i++) {
//         let row = []

//         for (let j = 0; j < num; j++) {
//             row.push(counter++)
//         }

//         if (i % 2 === 1) {
//             row.reverse()
//         }
//         multiArray.push(row)
//     }
//     console.log(multiArray)

//     for (let i = 0; i < multiArray.length; i++) {
//         for (let j = 0; j < multiArray[i].length; j++) {
//             // console.log(multiArray[i][j])
//             if (multiArray[i][j] % 4 === 0) {
//                 multiArray[i][j] = "#"
//             } else if (multiArray[i][j] % 2 === 0) {
//                 multiArray[i][j] = "o"
//             } else {
//                 multiArray[i][j] = "x"
//             }
//         }
//     }

//     return multiArray;
// }

// console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

// console.log(squareNumber(4));
// // [ [ x, o, x, # ],
// //   [ #, x, o, x ],
// //   [ x, o, x, # ],
// //   [ #, x, o, x ] ]

// console.log(squareNumber(5));
// // [
// //   [ x, o, x, #, x ],
// //   [ o, x, #, x, o ],
// //   [ x, o, x, #, x ],
// //   [ #, x, o, x, # ],
// //   [ x, o, x, #, x ]
// // ]

// console.log(squareNumber(2)); // Minimal input adalah 3


// ### Soal 3

/**
  Square Number
  Diberikan sebuah function squareNumber dimana menerima inputan berupa angka.
  Function ini akan mengembalikan array multidimensi angka x angka yang isi value
  dari array multidimensi tersebut menyerupai `board snakes and ladders`
  Contoh 1:
  input: 3
  output:
      [
        [7, 8, 9],
        [6, 5, 4],
        [1, 2, 3]
      ]
  Contoh 2:
  input: 4
  output:
      [
        [ 16, 15, 14, 13 ],
        [ 9, 10, 11, 12 ],
        [ 8, 7, 6, 5 ],
        [ 1, 2, 3, 4 ]
      ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
 - NILAI FULL(100) AKAN DIBERIKAN JIKA BERHASIL MENYELESAIKAN KASUS DIATAS
 - NILAI 80 AKAN DIBERIKAN JIKA value angka di dalam array tersebut tidak persis
   menyerupai snakes and ladders TAPI angka 1 harus tetap berada di kolom paling bawah!
   CONTOH:
     [
       [ 13, 14, 15, 16 ],
       [ 9, 10, 11, 12 ],
       [ 5, 6, 7, 8 ],
       [ 1, 2, 3, 4 ]
     ]
**/

function squareNumber(num) {
  if (num < 3) {
    return "Minimal input adalah 3";
  }

  let multiArray = [];
  let counter = 1;

  for (let i = 0; i < num; i++) {
    let row = [];

    for (let j = 0; j < num; j++) {
      row.push(counter++)
    }

    if (i % 2 === 1) {
      row.reverse();
    }
    multiArray.push(row)
  }

  return multiArray.reverse();
}

console.log(squareNumber(3));
// [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]

console.log(squareNumber(4));
// // [ [ 16, 15, 14, 13 ],
// //   [ 9, 10, 11, 12 ],
// //   [ 8, 7, 6, 5 ],
// //   [ 1, 2, 3, 4 ] ]

console.log(squareNumber(5));
// // [ [ 21, 22, 23, 24, 25 ],
// //   [ 20, 19, 18, 17, 16 ],
// //   [ 11, 12, 13, 14, 15 ],
// //   [ 10, 9, 8, 7, 6 ],
// //   [ 1, 2, 3, 4, 5 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3

