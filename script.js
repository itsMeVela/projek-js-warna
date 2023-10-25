//https://www.youtube.com/watch?v=DLFqQ1SP8xU&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=8

const judul = document.getElementById('judul');
judul.style.textAlign = 'center';
judul.style.color='black';
judul.style.fontSize='50px';

// Buat element tom
const tombol = document.createElement('button');
const textTombol = document.createTextNode('Klik Untuk Ubah Warna');
tombol.setAttribute('type','button');
tombol.appendChild(textTombol);

// Sisipkan tombol setelah elemen judul
judul.insertAdjacentElement('afterend', tombol);

// oke disini kita dapet ilmu baru yaitu insertAdjacentElement
// dia sendiri memiliki 4 posisi yaitu :
// 1. 'beforebegin': Sisipkan elemen sebelum elemen yang dipilih itu sendiri.
// 2. 'afterbegin': Sisipkan elemen di dalam elemen yang dipilih, sebelum kontennya (di awal konten).
// 3. 'beforeend': Sisipkan elemen di dalam elemen yang dipilih, setelah kontennya (di akhir konten).
// 4. 'afterend': Sisipkan elemen setelah elemen yang dipilih itu sendiri.

// Atur margin top untuk tombol
tombol.style.marginTop = '15px'; // Sesuaikan sesuai kebutuhan
tombol.style.marginLeft='45%';
tombol.style.paddingLeft='13px';
tombol.style.paddingBottom='8px';
tombol.style.borderRadius='5px';

// mari kita tambahkan event pada tombol tersebut agar saat kursor di dekatkan dia berubah warna
tombol.addEventListener('mouseenter', function(){
    //buat metodhe nya
    tombol.style.backgroundColor='pink';
    
});
tombol.addEventListener('mouseleave', function(){
    //buat metodhe nya
    tombol.style.backgroundColor='rgb(241, 241, 241)';
});

//kita buat event agar ketika tombol di klik maka backgrond akan berubah warna dan jika di klik lagi dia kembali
tombol.addEventListener('click', function(){
    //kita pakai fungsi toggle
    document.body.classList.toggle('ubahWarna');
});

//**************************************************************************************************************** */
// mati kita buat tombol lagi, namun kali ini, tombol jika di klik akan merubah warna secara acak

//kita buat elemennya dulu
const tAcakWarna = document.createElement('button');
const textAcakWarna = document.createTextNode('Tombol Ubah Warna Acak');

// //kita rangkai elemntnya

tAcakWarna.appendChild(textAcakWarna);
tAcakWarna.setAttribute('type', 'button');
tAcakWarna.style.borderRadius='5px';
tAcakWarna.style.paddingBottom='8px';
tAcakWarna.style.paddingLeft='13px';


//kita tampilkan setelah tombol ubah warna
tombol.insertAdjacentElement('afterend', tAcakWarna);
tAcakWarna.style.marginRight='10px'; //g fungsi masih an
//kita buat agar setiap kali mouse mendekat dia berubah warna
tAcakWarna.addEventListener('mouseenter', function(){
    tAcakWarna.style.backgroundColor='pink';   
});
tAcakWarna.addEventListener('mouseleave', function(){
    tAcakWarna.style.backgroundColor='rgb(241, 241, 241)';   
});

//oke mari kita buat ketika tombol di klik dia mulai merubah warna
tAcakWarna.addEventListener('click', function(){
    //oke mari kita buat methode untuk mengacak nilai rgb, detai nya biasa liat link yt diatas
    const r = Math.round(Math.random() * 255 + 1);
    // penjelasan singkatnya math.round untuk membulatkan angka
    // math.random akan memberikan angka secara acak namun bentuknya desimal dan dengan angka acak tidak terbatas
    // berhubung rgb dimulai dari 0-255 kita bisa kalikan math.random dengan 255 dan di tambah satu. ini hasilnya masih desimal, mangkanya kita
    //tambahkan math.round agar menjadi satuan
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')'
});
// permasalahannya sekarang adalah, kenapa saat kita oprasikan tombol ubah warna acak, saat kita klik tombol ubah warna dia tidak merespon?

//********************************************************************************************************************************************* */
//oke marri kita buat user untuk mengatur sendiri latar belakangnya dengan menggunakan rumus rgb
//ingat ya jika ada pembuatan lebih dari sekali, fokus selesaikan yang pertama dulu, karena yang lainnya tinggal copy pase

//kita tangkap selidernya
const Merah = document.querySelector('input[name=sMerah]');
