// MEMUAT FOOTER DARI FILE FOOTER.HTML
document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");

  fetch("footer.html")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Footer tidak berhasil dimuat.");
      }

      return response.text();
    })
    .then(function (data) {
      footerContainer.innerHTML = data;
    })
    .catch(function (error) {
      console.error("Terjadi kesalahan:", error);

      footerContainer.innerHTML =
        "<footer class='site-footer text-center'>" +
        "<p>© 2026 Generasi Bersih.</p>" +
        "</footer>";
    });
});

// FORM KONTAK
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;

    alert(
      "Terima kasih, " + nama +
      "! Pesan kamu berhasil diterima."
    );

    contactForm.reset();
  });
}

// EFEK NAVBAR SAAT LINK DIKLIK DI HP
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const menu = document.querySelector(".navbar-collapse");

    if (menu && menu.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menu);
      bsCollapse.hide();
    }
  });
});
