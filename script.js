//Operasi String

// 1. charAt() - Mengambil karakter pada index tertentu
let dataString = "Fine Man";
let dataChar = dataString.charAt(0);
console.log(`Character pada index 0: ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`Character pada index 1: ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`Character pada index 2: ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`Character pada index 3: ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`Character pada index 4: ${dataChar}`); //tidak ada karakter

// 2. Menyambung strring dengan concat()
let dataString1 = "Fine";
let dataString2 = "Man";
let dataConcat = dataString1.concat(" ", dataString2);
console.log(`Hasil concat: ${dataConcat}`);

// 3. Mengambil index dari karakter tertentu dengan indexOf()
console.log(`Index dari karakter 'F': ${dataString.indexOf("F")}`);
console.log(`Index dari karakter 'f': ${dataString.indexOf("f")}`);

// 4. Substring() - Mengambil sebagian string
let dataSubstring = dataString.substring(0, 4);
console.log(`Substring dari index 0 sampai 4: ${dataSubstring}`);
console.log(`Substring dari index 5 sampai 8: ${dataString.substring(5, 8)}`);

// 5. Slice() - Mengambil sebagian string
let dataSlice = dataString.slice(0, 4);
console.log(`Slice dari index 0 sampai 4: ${dataSlice}`);
console.log(`Slice dari index 5 sampai 8: ${dataString.slice(5, 8)}`);

// 6. Replace() - Mengganti karakter tertentu dengan karakter lain
let dataReplace = dataString.replace("Fine", "F***");
console.log(`Hasil replace: ${dataReplace}`);

// 7. toLowerCase() - Mengubah string menjadi huruf kecil
let dataLowerCase = dataString.toLowerCase();
console.log(`Hasil toLowerCase: ${dataLowerCase}`);

// 8. toUpperCase() - Mengubah string menjadi huruf besar
let dataUpperCase = dataString.toUpperCase();
console.log(`Hasil toUpperCase: ${dataUpperCase}`);

// 9. Extracing number
let dataNumber = "1234567890";
console.log(typeof dataNumber);
let dataNumberExtract = parseInt(dataNumber);
console.log(dataNumber);
console.log(typeof dataNumberExtract);

// 10. Extracting float
let dataFloat = "123.456";
console.log(typeof dataFloat);
let dataFloatExtract = parseFloat(dataFloat);
console.log(dataFloat);
console.log(typeof dataFloatExtract);
