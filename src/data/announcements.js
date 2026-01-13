import img from "../assets/img/maintenance_berkah.jpg";

const announcements = [
  {
    id: 1,
    title: "Pengumuman Libur Nasional & Penyesuaian Jam Operasional",
    slug: "libur-nasional-penyesuaian-jam-operasional",
    date: "15 Januari 2026",
    image: img,
    important: true,
    content: `
Sehubungan dengan adanya hari libur nasional, kami informasikan bahwa
jam operasional perusahaan akan mengalami penyesuaian.

Operasional akan kembali normal pada hari kerja berikutnya.
Terima kasih atas perhatian dan kerja samanya.
    `,
  },
  {
    id: 2,
    title: "Rekrutmen Tenaga Proyek Baru",
    slug: "rekrutmen-tenaga-proyek-baru",
    date: "10 Januari 2026",
    important: false,
    content: `
Kami membuka kesempatan bagi tenaga profesional untuk bergabung
dalam beberapa proyek konstruksi yang sedang berjalan.
    `,
  },
];

export default announcements;
