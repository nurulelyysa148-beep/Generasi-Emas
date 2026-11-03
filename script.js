// =================================
// FORM KONTAK
// =================================

document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Mencegah halaman refresh
    event.preventDefault();

    // Mengambil nama
    let nama = document.getElementById("nama").value;

    // Menampilkan pesan
    document.getElementById("formMessage").innerHTML =
        "Terima kasih " + nama + "! Pesan berhasil diisi.";

    // Mengosongkan formulir
    this.reset();

});


// =================================
// NAVBAR OTOMATIS TERTUTUP
// SETELAH MENU DIKLIK DI HP
// =================================

document.querySelectorAll(".navbar-nav .nav-link").forEach(function(link) {

    link.addEventListener("click", function() {

        let menu = document.getElementById("menuNavbar");

        if (menu.classList.contains("show")) {

            let navbar = bootstrap.Collapse.getOrCreateInstance(menu);

            navbar.hide();

        }

    });

});
