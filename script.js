const judul = document.getElementById('judul');
judul.style.textAlign = 'center';
judul.style.color='black';
judul.style.fontSize='50px';

// Buat element tom
const tombol = document.createElement('button');
const textTombol = document.createTextNode('Klik Untuk Ubah Warna');
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
tombol.style.paddingBottom='10px';
tombol.style.borderRadius='5px';

// mari kita tambahkan event pada tombol tersebut agar saat kursor di dekatkan dia berubah warna
tombol.setAttribute('type','button');
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
})