// ### Soal 1
/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter
- Dilarang Menggunakan Loop
*/

function angkaTerbesar(sentence) {
  if (sentence.length === 0) {
    return -1;
  }

  let max = angkaTerbesar(sentence.slice(1));
  // console.log("nilai max:", max)
  return Math.max(sentence[0], max)
}

// TEST CASES
// console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
// console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
// console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
// console.log(angkaTerbesar([])) // -1

// ### Soal 2
/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 5. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  if (data.length === 0) {
    return ""
  }

  let char = data[0];
  let angka = +char;
  if (jenis === "genap" && angka % 2 !== 0) {
    char = "x"
  } else if (jenis === "ganjil" && angka % 2 === 0) {
    char = "x"
  }

  return char + changeXRecursive(data.slice(1), jenis)
}

// console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
// console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x

// ### Soal 3
/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  if (sentences.length === 0) {
    return 0
  }

  char = sentences[0].toLowerCase();
  number = 0;

  if (char >= "a" && char <= "z" && char !== "a" && char !== "i" && char !== "u" && char !== "e" && char !== "o" && char !== " ") {
    number++
  }

  return number + consonantCounterRecursive(sentences.slice(1))
}

// console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
// console.log(consonantCounterRecursive('AziZy')) // 3
// console.log(consonantCounterRecursive('awt6an')) // 3

// ### Soal 4
/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang
 menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang
hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
- Tidak boleh membuat variable diluar function
- Tidak boleh menambahkan parameter baru
- Tidak boleh menggunakan looping while/for
*/

function dividableRecursive(array, num) {
  if (array.length === 0) {
    return "";
  }

  let char = array[0];
  let angka = +char;
  let result = "";

  if (angka % num === 0) {
    result = char;
  }

  return `${result} ${dividableRecursive(array.slice(1), num)}`.trim()
}

// // DRIVER CODE
// console.log(dividableRecursive([66, 33, 55, 44, 11], 3)) // 66 33
// console.log(dividableRecursive([123, 222, 100, 50, 32], 2)) // 222 100 50 32
// console.log(dividableRecursive([125, 500, 201, 202, 66], 5)) // 125 500
// console.log(dividableRecursive([66, 33, 55, 44, 132], 6)) // 66 132

// ### Soal 5
/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
  if (str.length === 0) {
    return ""
  }

  let char = str[0];
  let result = "";

  if (char >= "0" && char <= "9" || char >= "a" && char <= "z") {
    result = char;
  }

  return result + hapusSimbolRec(str.slice(1))
}

// console.log(hapusSimbolRec('test4@aa')); //test4aa
// console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
// console.log(hapusSimbolRec('ma@#k!an~')); // makan
// console.log(hapusSimbolRec('coding')); // coding
// console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100

// ### Soal 6
/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/


function palindromeRecursive(sentence) {
  if (sentence.length <= 1) {
    return true;
  }

  charDepan = sentence[0];
  charBelakang = sentence[sentence.length - 1]

  if (charDepan !== charBelakang) {
    return false;
  }


  return palindromeRecursive(sentence.slice(1, -1));
}

// // TEST CASES
// console.log(palindromeRecursive('katak')); // true
// console.log(palindromeRecursive('blanket')); // false
// console.log(palindromeRecursive('civic')); // true
// console.log(palindromeRecursive('kasur rusak')); // true
// console.log(palindromeRecursive('mister')); // false

// ### Soal 7
/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  char = equation.toString();
  if (char.length === 1) {
    return char;
  }

  let digit = char[0];
  for (let i = 0; i < char.length - 1; i++) {
    digit += "0"
  }

  if (Number(char.slice(1) > 0)) {
    return `${digit} + ${parseNumber(char.slice(1))}`
  }

  return digit;

};

// console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
// console.log(parseNumber(90)) // 90
// console.log(parseNumber(2333)) // 2000+300+30+3
// console.log(parseNumber(1001)) // 2000+300+30+3
// console.log(parseNumber(1000)) // 2000+300+30+3


// ### Soal 8
/*
Budi ingin menyusun batu bata dengan ukuran yang sama sampai membentuk piramid 2 dimensi
Jika piramid bertingkat 1, Budi hanya memerlukan 1 batu bata
  B
Jika piramid bertingkat 2, Budi memerlukan 3 batu bata
  B
 B B
Jika piramid bertingkat 3, Budi memerlukan 6 batu bata
  B
 B B
B B B
Jika piramid bertingkat 4, Budi memerlukan 10 batu bata
   B
  B B
 B B B
B B B B

Di setiap tingkat bertambah 1 batu bata dibanding tingkatan diatasnya

Buatlah function piramid (n) yang memberitahu berapa jumlah batu bata yang diperlukan untuk membuat piramid bertingkat n.

[RULES]
  1. Wajib menggunakan RECURSIVE.
  2. Dilarang membuat function tambahan selain function piramid.
  3. Dilarang menambah parameter function.
*/

function piramid(n) {
  if (n === 0 || n === undefined) {
    return 0;
  }
  let counter = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    counter++
  }
  sum += counter;

  return sum + piramid(n - 1);

  // if (n == 0) return 0;
  // if (n == 1) return 1;
  // return n + piramid(n - 1);
  // keep it simple stupid
}

// console.log(piramid()) // 0
// console.log(piramid(0)) // 0
// console.log(piramid(1)) // 1
// console.log(piramid(2)) // 3
// console.log(piramid(3)) // 6
// console.log(piramid(4)) // 10
// console.log(piramid(5)) // 15
// console.log(piramid(6)) // 21
// console.log(piramid(100)) // 5050
// console.log(piramid(888)) // 394716

// ### Soal 9

/**
Virus Check Recursive
---------------------
Implementasikan function `virusCheckRecursive` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `virus` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  virus: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  virus: 'h|r' ==> berarti mencari h dan r

outuput: 3


RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function virusCheckRecursive
  - Dilarang mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - Dilarang menambahkan function di luar maupun di dalam function virusCheckRecursive

*/

function virusCheckRecursive(str, viruses) {
  if (viruses === undefined || str === undefined) {
    return "There is no viruses"
  }

  if (str.length === 0) {
    return 0;
  }

  char = str[0].toLowerCase();
  checkVirus = viruses.split("|")
  // console.log(checkVirus)
  let sum = 0;

  for (let i = 0; i < checkVirus.length; i++) {
    if (checkVirus[i] === char) {
      sum++
    }
  }

  return sum + Number(virusCheckRecursive(str.slice(1), viruses))
}

// console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
// console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
// console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
// console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
// console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
// console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
// console.log(virusCheckRecursive('')); // There is no virus

// ### Soal 10

/*
===================================
Recursive Mastery : Number Iterator
===================================
Nama:________
[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.
[EXAMPLE]
input: 5
output: 012345
input: 7
output: 01234567
[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/
function numberIterator(num) {
  if (num === 0) {
    return "0";
  }

  return numberIterator(num - 1) + num.toString();
}
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'