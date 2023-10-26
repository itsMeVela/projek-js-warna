//https://www.youtube.com/watch?v=DLFqQ1SP8xU&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=8


//BIASAKAN GUNAKAN CARA YANG SIMPEL, AGAR CODE LEBIH PENDEK NAMUN TETAP EFISIEN, OKE?

const judul = document.getElementById("judul");
judul.style.textAlign = "center";
judul.style.color = "black";
judul.style.fontSize = "50px";

// Buat element tom
const tombol = document.createElement("button");
const textTombol = document.createTextNode("Klik Untuk Ubah Warna");
tombol.setAttribute("type", "button");
tombol.appendChild(textTombol);

// Sisipkan tombol setelah elemen judul
judul.insertAdjacentElement("afterend", tombol);

// oke disini kita dapet ilmu baru yaitu insertAdjacentElement
// dia sendiri memiliki 4 posisi yaitu :
// 1. 'beforebegin': Sisipkan elemen sebelum elemen yang dipilih itu sendiri.
// 2. 'afterbegin': Sisipkan elemen di dalam elemen yang dipilih, sebelum kontennya (di awal konten).
// 3. 'beforeend': Sisipkan elemen di dalam elemen yang dipilih, setelah kontennya (di akhir konten).
// 4. 'afterend': Sisipkan elemen setelah elemen yang dipilih itu sendiri.

// Atur margin top untuk tombol
tombol.style.marginTop = "15px"; // Sesuaikan sesuai kebutuhan
tombol.style.marginLeft = "45%";
tombol.style.paddingLeft = "13px";
tombol.style.paddingBottom = "8px";
tombol.style.borderRadius = "5px";

// mari kita tambahkan event pada tombol tersebut agar saat kursor di dekatkan dia berubah warna
tombol.addEventListener("mouseenter", function () {
  //buat metodhe nya
  tombol.style.backgroundColor = "pink";
});
tombol.addEventListener("mouseleave", function () {
  //buat metodhe nya
  tombol.style.backgroundColor = "rgb(241, 241, 241)";
});

//kita buat event agar ketika tombol di klik maka backgrond akan berubah warna dan jika di klik lagi dia kembali
tombol.addEventListener("click", function () {
  //kita pakai fungsi toggle
  document.body.classList.toggle("ubahWarna");
});

//**************************************************************************************************************** */
// mati kita buat tombol lagi, namun kali ini, tombol jika di klik akan merubah warna secara acak

//kita buat elemennya dulu
const tAcakWarna = document.createElement("button");
const textAcakWarna = document.createTextNode("Tombol Ubah Warna Acak");

// //kita rangkai elemntnya

tAcakWarna.appendChild(textAcakWarna);
tAcakWarna.setAttribute("type", "button");
tAcakWarna.style.borderRadius = "5px";
tAcakWarna.style.paddingBottom = "8px";
tAcakWarna.style.paddingLeft = "13px";

//kita tampilkan setelah tombol ubah warna
tombol.insertAdjacentElement("afterend", tAcakWarna);
tAcakWarna.style.marginRight = "10px"; //g fungsi masih an
//kita buat agar setiap kali mouse mendekat dia berubah warna
tAcakWarna.addEventListener("mouseenter", function () {
  tAcakWarna.style.backgroundColor = "pink";
});
tAcakWarna.addEventListener("mouseleave", function () {
  tAcakWarna.style.backgroundColor = "rgb(241, 241, 241)";
});

//oke mari kita buat ketika tombol di klik dia mulai merubah warna
tAcakWarna.addEventListener("click", function () {
  //oke mari kita buat methode untuk mengacak nilai rgb, detai nya biasa liat link yt diatas
  const r = Math.round(Math.random() * 255 + 1);
  // penjelasan singkatnya math.round untuk membulatkan angka
  // math.random akan memberikan angka secara acak namun bentuknya desimal dan dengan angka acak tidak terbatas
  // berhubung rgb dimulai dari 0-255 kita bisa kalikan math.random dengan 255 dan di tambah satu. ini hasilnya masih desimal, mangkanya kita
  //tambahkan math.round agar menjadi satuan
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // atau bisa 'rgb('+ r2 +','+ g2 +','+ b2 +')'
  
});
// permasalahannya sekarang adalah, kenapa saat kita oprasikan tombol ubah warna acak, saat kita klik tombol ubah warna dia tidak merespon?

//********************************************************************************************************************************************* */
//oke marri kita buat user untuk mengatur sendiri latar belakangnya dengan menggunakan rumus rgb
//ingat ya jika ada pembuatan lebih dari sekali, fokus selesaikan yang pertama dulu, karena yang lainnya tinggal copy pase

//kita tangkap selidernya
// const Merah = document.querySelector('input[name=sMerah]');
// const Hijau = document.querySelector('input[name=sHijau]');
// const Biru = document.querySelector('input[name=sBiru]');
// //entah lah ya ini ilmu baru buat gw, karena  wajib di tambahkan attribute tittel di teks html agar seleksi yang kita buat di pahami oleh js
// //nggak sih, bisa" aja dengan cara ini, namun terdapat perringatan "Form elements must have labels: Element has no title attribute Element has no
// //  placeholder attribute".
// // dengan penjelasan sebagai berikut:
// // Peringatan "Form elements must have labels: Element has no title attribute Element has no
// //  placeholder attribute" adalah peringatan dari beberapa alat pengujian aksesibilitas atau
// //  validator HTML yang menyarankan atau memerlukan adanya atribut title atau placeholder
// // pada elemen formulir tertentu untuk meningkatkan aksesibilitas. lebih jelasnya bis cek cchat gpt

// // mari kita buat event nya, event kali ini saya menggunakan input (untuk event geser)
// Merah.addEventListener('input', function(){
//    //jangan lupa atur nilai min dan max pada html sesuai kadar rgb
//    const r2 = Merah.value;
//    const g2 = Hijau.value;
//    const b2 = Biru.value;
//     document.body.style.backgroundColor='rgb('+ r2 +','+ g2 +','+ b2 +')';
// });

// Hijau.addEventListener('input', function(){
//     //jangan lupa atur nilai min dan max pada html sesuai kadar rgb
//     const r2 = Merah.value;
//     const g2 = Hijau.value;
//     const b2 = Biru.value;
//      document.body.style.backgroundColor='rgb('+ r2 +','+ g2 +','+ b2 +')';
//  });

//  Biru.addEventListener('input', function(){
//     //jangan lupa atur nilai min dan max pada html sesuai kadar rgb
//     const r2 = Merah.value;
//     const g2 = Hijau.value;
//     const b2 = Biru.value;
//      document.body.style.backgroundColor='rgb('+ r2 +','+ g2 +','+ b2 +')';
//  });
//******************************************************************************************************************************************************** */
//oke evnt satu sudah selesai, mulai dari sini karena per ulangan kita tinggal lakukan forEach

//disini saya tangkap slaidernya menggunakan type=range karena pada html ke 3 element memilikinya
const range = document.querySelectorAll('input[type="range"]');

// // range.forEach(function(input){
// //     input.addEventListener('input', function(){
// //         //untuk menangkap valuenya, ada 2 cara yang saya tau sampai sejauh ini, pertama cara klasik seperti di bawah
// //         const r2  = range[0].value;
// //         const g2  = range[1].value;
// //         const b2  = range[2].value;
// //         document.body.style.backgroundColor = 'rgb('+ r2 +','+ g2 +','+ b2 +')';
// //     })
// // });

// for(let i = 0; i<range.length; i++){
//     range[i].addEventListener('input', function() {
//         //yang kedua, dengan menangkap nilainya secara langsung seperti di bawah. sumpah si ini simpel bgt gw suka
//         const color = `rgb(${range[0].value}, ${range[1].value}, ${range[2].value})`;
//         document.body.style.backgroundColor=color;
//     });
    
// };

// oke gw dapet ilmu baru yaitu penggunan () => atau bissa disebut  fungsi panjang nol (arrow function) untuk menggantikan syntax "function ()", untuk materi ini bisa didapatkan di js lanjutan

range.forEach(function(input){
    input.addEventListener('input', () => {
        const color = `rgb(${range[0].value}, ${range[1].value}, ${range[2].value})`;
        document.body.style.backgroundColor = color;
    })
});

//************************************************************************************************************************** */
//oke sekarang yang terakhir, saya ingin merubah warna bg ketika kursor saya gerakkan di dalam dokumen (body);

//oke kita bisa gunakan ambil nilai x dan y dengan menggunakan method client x dan y

// pertama kita tangkap sumbu x terlebih dahulu untuk mengatur warna merah (berhubung kita hanya menggunakan 2 warna saja bisa pilih dari ke 3 warna tersebut)

//kita tangkap element yang kita maksud
// biasanya kan kita menggunakan function anonim, namun untuk mengakses method client, funsi tersebut harus memuat parameter evnt / e didalamnya
document.addEventListener('mousemove', function(event){
    //oke disini saya akan menjelaskan menggunakan window.innerWidth/Hight
    // console.log(innerWidth);//untuk ngecek aja
    //untuk melihat seberapa lebar layar window user
 const posX = Math.round((event.clientX/window.innerWidth)*255);
 const posY = Math.round((event.clientY/window.innerHeight)*255);

 document.body.style.backgroundColor='rgb('+ posX+', '+ posY+', 100)';
})