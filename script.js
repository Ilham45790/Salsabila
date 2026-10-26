/* =====================================================================
   script.js — daftar isi
   1. Data keahlian        5. Batang gelombang di hero
   2. Kategori portofolio  6. Nomor WhatsApp
   3. Daftar proyek        7. Animasi muncul saat scroll
   4. Menampilkan kartu    8. Progress bar & menu
   ===================================================================== */

/* ---------- 1. DATA KEAHLIAN (kartu di bagian "Keahlian Saya") ---------- */
const EXP = [
  ["Digital Communication", "◎", "Plan messages across digital channels."],
  ["Content Creation", "✦", "Produce posts, visuals, and video."],
  ["Social Media Management", "▤", "Schedule, publish, and engage."],
  ["Personal Branding", "◆", "Shape a consistent public identity."],
  ["Copywriting & Storytelling", "✎", "Write clear, memorable copy."],
  ["Public Relations", "☍", "Build relationships with audiences."],
  ["Creative Campaign", "✺", "Develop ideas that carry a message."],
  ["Digital Marketing", "↗", "Reach and measure audiences online."],
];

/* ---------- 2. KATEGORI PORTOFOLIO (tombol filter) ---------- */
const CATS = [
  "Social Media Content",
  "Graphic Design",
  "Video Content",
  "Branding",
  "Communication Campaign",
 
];
const HUE = [35, 265, 200, 15, 150, 320];

/* ---------- 3. DAFTAR PROYEK ----------
   Tambah proyek: salin satu blok { ... }, lalu isi datanya.
   c   = harus sama persis dengan salah satu nama di CATS
   img = lokasi foto, misalnya "assets/nama-foto.jpg" (hapus baris img jika belum ada foto)
*/
const PR = [
  {
  t: "Social Media Management",
  c: "Social Media Content",
  r: "Digital Marketing Intern",
  d: "Mengelola akun instagram Life at Valbury Jogja sebagai bagian dari aktivitas digital marketing selama magang.",
  img: "./Sosial Media Konten.png",
  bg: "Membuat Konten pada akun Life at Valbury yang mencakup informasi seputar dunia kerja, edukasi trading, dan aktivitas magang di Valbury",
  goal: "Pengelolaan konten instagram",
  strategy: "mengelola akun instagram Life at Valbury",
  results: "Membuat konten yang mengudukasi dan informatif",
  docs: "",
  },

 {
  t: "Project Film Pendek",
  c: "Graphic Design",
  r: "ART DEPARTEMEN",
  d: "Melakukan riset, pemilihan, mencari properti dan perlengkapan . Mengatur dan mendesain tata letak ruangan dan menyusun dan menata seluruh properti dan elemen visual yang di gunakan",
  img: "./Grapich Desaign.png",
  bg: "Kebutuhan akan identitas visual yang kuat dan konsisten menjadi kunci utama dalam penyampaian pesan suatu proyek visual. Proyek ini dilatarbelakangi oleh pentingnya membangun komunikasi visual yang menarik, relevan dengan target audiens, serta mampu memperkuat konsep artistik secara menyeluruh.",
  goal: "menyusun konsep estetika yang mendukung gagasan utama proyek, menghasilkan elemen grafis berkualitas tinggi, serta meningkatkan daya tarik visual yang komunikatif dan efektif.",
  strategy: "proses pengerjaannya dimulai dari tahap riset visual, pembuatan moodboard, dan penentuan tipografi, dilanjutkan dengan perancangan draf tata letak, eksekusi digital menggunakan perangkat lunak desain, hingga finalisasi aset agar sesuai dengan spesifikasi proyek",
  results: "terciptanya identitas dan aset visual yang konsisten, peningkatan daya tarik serta keterlibatan audiens, serta penyelesaian seluruh kebutuhan elemen grafis tepat waktu sesuai tenggat yang ditentukan.",
  docs: "https://youtu.be/jOjEi9HJ9xg",
  },

  {
  t: "Project Music Video",
  c: "Video Content",
  r: "Scriptwriter",
  d: "Menciptakan dan menulis naskah yang berkaitan dengan lagu berjudul “rasakno “ yang di bawakan oleh Guyon Waton.",
  img: "./Video Konten.png",
  bg: "Proyek video musik yang mengangkat cerita dan emosi di balik lagu “Rasakno”, dengan pendekatan penceritaan visual untuk menyampaikan pesan lagu kepada penonton.",
  goal: "Mengembangkan naskah video musik yang mampu menerjemahkan makna dan emosi lagu ke dalam alur cerita yang menarik, relevan, serta mudah dipahami oleh penonton.",
  strategy: "Menyusun konsep cerita berdasarkan tema lagu, mengembangkan alur narasi, serta merancang adegan yang selaras dengan suasana dan pesan lagu agar tercipta kesinambungan antara musik dan visual.",
  results: "Menghasilkan naskah sebagai panduan dalam proses produksi video musik, dengan fokus pada penyampaian cerita yang mendukung pesan dan suasana lagu “Rasakno",
  docs: "https://youtu.be/Rix-aq0VNzg",
  },

  {
  t: "Project Iklan Jersey ",
  c: "Branding",
  r: "Sutradara,Asisten Cameramen",
  d: "Terlibat dalam proses produksi konten branding dengan berkontribusi pada pengarahan konsep visual dan mendukung kebutuhan teknis pengambilan gambar.",
  img: "./Branding.png",
  bg: "Proyek branding ini berfokus pada penyampaian identitas dan pesan melalui konten visual yang menarik, terarah, serta sesuai dengan konsep yang telah direncanakan.",
  goal: "Menghasilkan konten branding yang mampu membangun citra positif, memperkuat identitas, dan menyampaikan pesan kepada target audiens secara efektif.",
  strategy: "Mendukung proses produksi melalui pengarahan adegan, koordinasi pengambilan gambar, serta membantu pengoperasian dan pengaturan kamera untuk memastikan visual sesuai dengan konsep kreatif.",
  results: "Mendukung proses produksi konten branding melalui kolaborasi tim, penerapan konsep visual, dan pelaksanaan pengambilan gambar sesuai kebutuhan proyek.",
  docs: "https://www.instagram.com/reel/C8wlQYovZLt /?igsh=MXhmeWJhODFwYXhxMQ==",
  },

  {
  t: "Proyek Sosial",
  c: "Communication Campaign",
  r: "Ketua Pelaksana",
  d: "Minat baca anak-anak di Dusun Sempol masih rendah, dan mereka lebih sering menghabiskan waktu di media sosial. Melalui kegiatan ini, kami berharap dapat menanamkan budaya literasi yang positif sejak dini",
  img: "./Communication-Campaign.png",
  bg: "Dalam kegiatan yang diikuti oleh 13 mahasiswa ini, berbagai aktivitas menarik dilakukan. Mulai dari membaca bersama, mendongeng interaktif, permainan edukasi, hingga mendirikan perpustakaan kecil untuk anak-anak. ",
  goal: "Program ini bertujuan untuk meningkatkan minat baca anak-anak melalui pendekatan yang edukatif dan interaktif, sekaligus memberikan solusi atas minimnya akses bahan bacaan di wilayah tersebut.",
  strategy: "Dukungan dari berbagai pihak, seperti tokoh masyarakat Dusun Sempol dan Universitas AMIKOM Yogyakarta, menjadi salah satu faktor keberhasilan program ini. ",
  results: "Program ini sangat bermanfaat bagi anak-anak di Dusun Sempol. Dengan adanya kegiatan literasi seperti ini, kami berharap minat baca anak-anak meningkat, dan mereka memiliki kebiasaan belajar yang lebih baik di masa depan. Terima kasih kepada mahasiswa Universitas AMIKOM Yogyakarta atas kepedulian dan kerja kerasnya untuk dusun kami",
  docs: "https://www.krajan.id/mahasiswa-amikom-galakkan-budaya-literasi-sejak-dini-di-dusun-sempol/",
  },

  {
  t: "Berpartisipasi Volunter Yogya Berbakti",
  c: "Communication Campaign",
  r: "Volunter",
  d: "Kegiatan pengabdian masyarakat dan kampanye komunikasi sosial untuk meningkatkan kesadaran serta partisipasi publik terhadap isu-isu sosial di Yogyakarta.",
  img: "./Volunter.png",
  bg: "Kurangnya kesadaran masyarakat terhadap isu sosial tertentu di lingkungan lokal mendorong perlunya aksi nyata dan gerakan komunikasi yang masif. Kegiatan 'Yogya Berbakti' hadir sebagai wadah kolaborasi untuk menggerakkan kepedulian sosial melalui pendekatan kampanye komunikasi yang terarah.",
  goal: "Meningkatkan kesadaran publik, memperluas jangkauan pesan sosial kampanye, serta mengajak masyarakat luas dan komunitas lokal untuk aktif berpartisipasi dalam aksi kepedulian sosial yang diselenggarakan.",
  strategy: "Merancang pesan kampanye yang komunikatif dan persuasif, memanfaatkan media digital serta jejaring sosial untuk publikasi, serta berkolaborasi langsung dengan tim relawan dan masyarakat dalam eksekusi program lapangan.",
  results: "Berhasil meningkatkan keterlibatan (*engagement*) audiens pada platform digital, memperluas jangkauan informasi kampanye sosial kepada masyarakat, serta sukses menyelenggarakan rangkaian kegiatan relawan secara kolaboratif dan tepat sasaran.",
  docs: "",
  },
  

  {
  t: "Event Seminar",
  c: "Communication Campaign",
  r: "Sie Lokasi",
  d: "Mencari dan menentukan lokasi yang di gunakan untuk acara seminar, Melakukan survei dan memastikan lokasi yang strategis, sesuai dengan kapasitas,fasilitas,dan tema acara seminar dan melakukan negosiasi dengan pihak venue, menentukan tata letak acara",
  img: "./Seminar.png",
  bg: "Proyek penyelenggaraan event seminar ini dilatarbelakangi oleh kebutuhan akan pemilihan tempat yang strategis, kondusif, serta mampu menampung seluruh peserta dan rangkaian acara secara nyaman dan terstruktur.",
  goal: "ntuk memastikan ketersediaan, kelayakan, serta penataan lokasi acara yang sesuai dengan kapasitas, fasilitas, dan tema seminar yang diusung.",
  strategy: "proses pengerjaannya meliputi survei dan pemilihan lokasi potensial, perizinan tempat, koordinasi tata letak (layout) ruangan, serta pengaturan logistik dan fasilitas penunjang di lokasi acara.",
  results: "Hasil akhir dari pengerjaan ini adalah suksesnya pengadaan tempat yang representatif, terciptanya kelancaran mobilitas peserta dan panitia selama acara berlangsung, serta terjaganya kenyamanan dan ketertiban area seminar dari awal hingga selesai.",
  docs: "https://www.instagram.com/eksploragigs? igsh=bWE2cWpxcWwxNXh5",
},

];

/* ---------- 4. MENAMPILKAN KARTU KEAHLIAN & PROYEK ---------- */
const $ = (s) => document.querySelector(s);
$("#exp").innerHTML = EXP.map(
  (x) =>
    `<div class="card"><div class="ico" aria-hidden="true">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p></div>`,
).join("");
let cur = "All",
  first = true;
function draw() {
  $("#flt").innerHTML = ["All", ...CATS]
    .map((c) => `<button aria-pressed="${c === cur}" data-c="${c}">${c}</button>`)
    .join("");
  $("#pg").innerHTML = PR.map((p, i) => ({ p, i }))
    .filter((o) => cur === "All" || o.p.c === cur)
    .map(
      ({ p, i }, k) =>
        `<button class="card proj${first ? "" : " pin"}" style="--d:${k * 0.06}s" data-i="${i}">
        <div class="thumb" style="position:relative;overflow:hidden;background:linear-gradient(${135 + i * 20}deg,#60424D,#29252A)">${p.img ? `<img src="${p.img}" alt="${p.t}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onerror="this.parentNode.innerHTML='Tidak ditemukan:<br>'+this.getAttribute('src')" />` : "PLACEHOLDER IMAGE"}</div>
        <div class="b"><span class="cat">${p.c}</span><h3>${p.t}</h3><p>${p.d}</p><span class="view">View Project</span></div></button>`,
    )
    .join("");
}
draw();
first = false;
$("#flt").onclick = (e) => {
  const b = e.target.closest("button");
  if (b) {
    cur = b.dataset.c;
    draw();
  }
};
/* Ubah alamat (https://...) di dalam teks menjadi link yang bisa diklik */
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const linkify = (s) =>
  esc(s).replace(
    /(https?:\/\/[^\s<]+[^\s<.,;:!?)])/g,
    '<a href="$1" target="_blank" rel="noopener">$1</a>',
  );
/* ---------- Popup proyek: buka & tutup ---------- */
const dlg = $("#dlg");

$("#pg").onclick = (e) => {
  const b = e.target.closest(".proj");
  if (!b) return;
  const p = PR[b.dataset.i];
  const set = (id, v) => {
  const el = $(id);
  if (el) el.innerHTML = linkify(v || "—");
  };
  set("#dc", p.c);
  set("#dt", p.t);
  set("#dr", p.r);
  set("#dbg", p.bg);
  set("#dgl", p.goal);
  set("#dst", p.strategy);
  set("#drs", p.results);
  set("#ddc", p.docs);
  dlg.showModal();
};

/* tutup: tombol Close, klik area gelap di luar popup, atau tombol Esc */
dlg.addEventListener("click", (e) => {
  if (e.target === dlg || e.target.closest(".x")) dlg.close();
});

/* ---------- 5. BATANG GELOMBANG DI HERO ---------- */
$(".bars").innerHTML = Array.from(
  { length: 24 },
  (_, i) =>
    `<i style="height:${20 + Math.abs(Math.sin(i * 1.3)) * 80}%;animation-delay:${i * 0.07}s"></i>`,
).join("");

/* ---------- 6. NOMOR WHATSAPP ----------
   Pakai kode negara, tanpa +, tanpa 0 di depan. Contoh: 6281234567890 */
const WA = "";
$("#wa").href =
  "https://wa.me/" +
  WA +
  "?text=" +
  encodeURIComponent(
    "Halo, saya menemukan portofolio Anda dan ingin mendiskusikan kemungkinan kerja sama. Apakah Anda bersedia untuk berbincang?",
  );
$("#yr").textContent = new Date().getFullYear();

/* ---------- 7. ANIMASI MUNCUL SAAT SCROLL ---------- */
document
  .querySelectorAll("h2,.lead,.about>*,.card,.tl>div,.steps>div,.contact>*,.filters")
  .forEach((e) => {
    e.classList.add("rv");
    e.style.setProperty(
      "--d",
      (Array.prototype.indexOf.call(e.parentNode.children, e) % 6) * 0.08 + "s",
    );
  });
const io = new IntersectionObserver(
  (es) =>
    es.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        io.unobserve(x.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".rv").forEach((e) => io.observe(e));

/* ---------- 8. PROGRESS BAR, MENU AKTIF, MENU PONSEL ---------- */
const pb = $("#pb"),
  secs = [...document.querySelectorAll("main section[id]")],
  nl = [...document.querySelectorAll(".links a:not(.btn)")];
function sc() {
  const h = document.documentElement;
  document.querySelector("header").classList.toggle("sc", scrollY > 8);
  pb.style.transform = "scaleX(" + scrollY / (h.scrollHeight - innerHeight || 1) + ")";
  let id = "home";
  secs.forEach((s) => {
    if (s.getBoundingClientRect().top < innerHeight * 0.4) id = s.id;
  });
  nl.forEach((a) => a.classList.toggle("act", a.getAttribute("href") === "#" + id));
}
addEventListener("scroll", sc, { passive: true });
sc();
$("#bg").onclick = () => {
  const o = $("#lk").classList.toggle("open");
  $("#bg").setAttribute("aria-expanded", o);
};
$("#lk").onclick = (e) => {
  if (e.target.tagName === "A") $("#lk").classList.remove("open");
};

/* ===== Animasi scroll berulang (ulang setiap masuk layar) ===== */
window.addEventListener("load", () => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  /* 1. Section, judul, kartu, timeline: muncul lagi setiap masuk layar */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add("in");
        else en.target.classList.remove("in");
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".rv").forEach((el) => io.observe(el));

  /* 2. Hero: animasi teks dan foto diulang saat kembali ke atas */
  const hero = document.querySelector(".hero");
  const heroEls = document.querySelectorAll(".hero .wrap > div:first-child > *, .hero .photo");
  if (hero) {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          heroEls.forEach((el) => {
            el.style.animation = "none";
            if (en.isIntersecting) {
              void el.offsetHeight;
              el.style.animation = "";
            }
          });
        });
      },
      { threshold: 0.15 }
    ).observe(hero);
  }
});
