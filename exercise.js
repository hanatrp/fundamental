let x = 5
let y = 3
let r = 5
let a = 80
let b = 65

// 1.Write a code to find area of rectangle
 let luas = (x*y);

console.log('1. ' + luas);

// 2.Write a code to find perimeter of rectangle.
let keliling = ( 2*x + 2*y);

console.log("2. " + keliling);

// 3.Write a code to find diameter, circumference and area of a circle.
// - Diameter (2r)
console.log('3.' )

let diameter = ('a. ' + 2*r);

console.log(diameter);

// - keliling (2.pi.r)
let kelilingLingkaran = (2*Math.PI*r);

console.log('b. ' + kelilingLingkaran);

// - luas lingkaran
let luasLingkaran = (Math.PI*r*r);

console.log('c. ' + luasLingkaran);

// 4. Write a code to find angles of triangle if two angles are given.
let sudut = (180 - (a+b));

console.log('4. ' + sudut + ' derajat');

// 5. Tent. berapa hari lagi menuju tahun 2025

const today = new Date();                                    // Tanggal saat ini
const currentYear = today.getFullYear();                     //Tahun saat ini
const targetYear = 2025;                                     // Tahun target (2025)
const newYear2025 = new Date(targetYear, 0, 1);              // Buat objek tanggal untuk Tahun Baru 2025
const timeDiff = newYear2025.getTime() - today.getTime();    // Hitung selisih waktu antara hari ini dan Tahun Baru 2025 dalam milidetik


// Hitung jumlah hari dari selisih waktu dalam milidetik
const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

console.log( '5. '+ "Jumlah hari lagi menuju tahun 2025: " + daysRemaining + " hari.");

// 6. konversi jumlah hari

function konversiHari(hari) {
    const tahun = Math.floor(hari / 365);
    const sisaHari = hari % 365;
    const bulan = Math.floor(sisaHari / 30);
    const hariSisa = sisaHari % 30;

    return {
        tahun: tahun,
        bulan: bulan,
        hari: hariSisa
    };
}
const totalHari = 999;
const hasilKonversi = konversiHari(totalHari);
console.log( '6. ' + totalHari + " hari setara dengan:");
console.log( '   ' + hasilKonversi.tahun + " tahun,");
console.log( '   ' + hasilKonversi.bulan + " bulan, dan");
console.log( '   ' + hasilKonversi.hari + " hari.");

