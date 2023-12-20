// Fungsi untuk melakukan smooth scroll
function smoothScroll(targetId) {
  document.getElementById(targetId).scrollIntoView({
    behavior: "smooth",
  });
}

// Fungsi untuk mengarahkan kembali ke halaman utama saat tombol Home diklik
document
  .querySelector('.navbar-nav a[href="#home"]')
  .addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default dari tautan
    window.location.href =
      "C:UsersMSI GAMINGOneDriveDesktopWEB ERAVAULTwebMAINPAGE.html"; // Ganti 'halaman-utama.html' dengan URL halaman utama Anda
  });
var audio = document.getElementById("myAudio");

// Memeriksa apakah audio sudah dimainkan
if (audio.played.length === 0) {
  audio
    .play()
    .then(() => {
      console.log("Pemutaran audio berhasil");
    })
    .catch((error) => {
      console.error("Pemutaran audio gagal", error);
    });
}

// Menangani peristiwa ketika tab browser diubah ke latar belakang atau diaktifkan kembali
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    // Tab browser diaktifkan kembali, cek apakah audio masih dimainkan
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          console.log("Audio dimainkan setelah tab diaktifkan kembali");
        })
        .catch((error) => {
          console.error(
            "Pemutaran audio gagal setelah tab diaktifkan kembali",
            error
          );
        });
    }
  } else {
    // Tab browser beralih ke latar belakang, jeda audio
    audio.pause();
  }
});
