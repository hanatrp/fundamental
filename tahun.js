let now = new Date ( );
let tahun_berikutnya = now + 1;
let tanggal_awal_tahun_berikutnya = Date(tahun_berikutnya, 1, 1);
let selisih_hari = tanggal_awal_tahun_berikutnya - now;

console.log( );
console.log(selisih_hari);