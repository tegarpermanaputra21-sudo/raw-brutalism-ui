const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai input menggunakan document.getElementById
  const namaDepan = document.getElementById("nama_depan").value;
  const namaBelakang = document.getElementById("nama_belakang").value;

  // Tampilkan alert
  alert("Nama Lengkap: " + namaDepan + " " + namaBelakang);
});
