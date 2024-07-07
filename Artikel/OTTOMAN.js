// Fungsi untuk melakukan smooth scroll
function smoothScroll(targetId) {
  document.getElementById(targetId).scrollIntoView({
    behavior: "smooth",
  });
}

// Fungsi untuk mengarahkan kembali ke halaman utama saat tombol Home diklik
document.querySelector('.navbar-nav a[href="#home"]'),
  '.navbar-nav a[href="#story telling"]'.addEventListener(
    "click",
    function (e) {
      e.preventDefault(); // Mencegah perilaku default dari tautan
      window.location.href =
        "C:UsersMSI GAMINGOneDriveDesktopWEB ERAVAULTwebMAINPAGE.html"; // Ganti 'halaman-utama.html' dengan URL halaman utama Anda
    }
  );
