function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("addressError").textContent = "";

  if (name === "" || email === "" || address === "") {
    alert("Anda Harus Mengisi Data Dengan Lengkap.");
    return;
  }

  // Validasi Nama (minimal 3 karakter)
  if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Nama Harus Memiliki Minimal 3 Karakter";
    return;
  }

  // Validasi Email
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Email Tidak Valid!";
    return;
  }

  // Validasi Alamat (minimal 5 karakter)
  if (address.length < 5) {
    document.getElementById("addressError").textContent =
      "Alamat Harus Memiliki Minimal 5 Karakter";
    return;
  }

  // Jika semua validasi berhasil
  alert("Pendaftaran Sukses!");
  // Anda dapat menambahkan kode di sini untuk mengirim data ke server atau melakukan tindakan lain yang diperlukan.
}
