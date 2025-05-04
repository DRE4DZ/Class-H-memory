function scrollToSection(id) {
  // Sembunyikan semua konten section dulu
  const semuaKonten = document.querySelectorAll('.konten');
  semuaKonten.forEach(sec => sec.classList.remove('active'));

  // Menampilkan section yang di klik
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Bikin Beranda tampil pertama kali dan panggil loadBiodata setelah halaman selesai di-load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("Beranda").classList.add("active");
  loadBiodata(); // Ini dia pemanggilan fungsinya!
});

// Function untuk mengambil data biodata dari biodata.json
async function loadBiodata() {
  try {
    const response = await fetch('biodata.json');

    // Check kalau responsenya tidak oke
    if (!response.ok) {
      throw new Error('Gagal memuat data, status: ' + response.status);
    }
    const data = await response.json();
    displayBiodata(data);

  } catch (error) {
    console.error('Gagal memuat data:', error);
    const container = document.getElementById('daftar-siswa');
    container.innerHTML = `
      <p>Gagal memuat data biodata siswa. Coba lagi nanti.</p>
    `;
  }
}

// Function buat menampilkan data biodata di halaman
function displayBiodata(students) {
  const container = document.getElementById('daftar-siswa');

  students.forEach(student => {
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profil-container');

    profileDiv.innerHTML = `
      <img src="${student.foto || 'link-default-foto.jpg'}" class="foto-bulat" alt="Foto ${student.nama}">
      <h3>${student.nama}</h3>
      <p>🎂 ${student.ttl ? student.ttl : 'Tanggal lahir tidak diketahui'}</p>
      <ul class="sosmed-list">
        ${student.sosmed.instagram ? `<li><a href="${student.sosmed.instagram}" target="_blank">Instagram</a></li>` : ''}
        ${student.sosmed.tiktok ? `<li><a href="${student.sosmed.tiktok}" target="_blank">Tiktok</a></li>` : ''}
      </ul>
    `;
    container.appendChild(profileDiv);
  });
}

// Toggle navbar
function toggleNavigation() {
  const nav = document.getElementById('nav-menu');
  const body = document.body;

  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  } else {
    nav.classList.add('active');
    body.classList.add('menu-open');
  }
}

function scrollToSection(id) {
  const semuaKonten = document.querySelectorAll('.konten');
  semuaKonten.forEach(sec => sec.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// about me btn
// Switch bahasa
function showIndo() {
  document.getElementById('indo').classList.add('active');
  document.getElementById('english').classList.remove('active');
}

function showEnglish() {
  document.getElementById('english').classList.add('active');
  document.getElementById('indo').classList.remove('active');
}

// Pastiin default ke Indo pas load
document.addEventListener("DOMContentLoaded", () => {
  showIndo();
});