# .wildanrizkii

```text
    ┌─┐┬─┐┌─┐┌─┐┬┬  ┌─┐  ┌─┐┌─┐┬─┐┌┬┐┌─┐┌─┐┬  ┬┌─┐
    ├─┘├┬┘│ │├┤ ││  ├┤───├─┘│ │├┬┘ │ ├┤ │ ││  ││ │
    ┴  ┴└─└─┘└  ┴┴─┘└─┘  ┴  └─┘┴└─ ┴ └  └─┘┴─┘┴└─┘
    [ Three Aesthetics. Zero Slop. Full-Stack Reality. ]
```

Portofolio personal berbasis **Next.js 16 (App Router)** dan **React 19**, dibangun dengan **TypeScript** end-to-end. Bukan sekadar kartu nama digital atau template portofolio standar, repositori ini mengimplementasikan sistem multi-estetika dinamis yang dapat beralih runtime tanpa reload halaman.

---

## 1. Tri-Aesthetic Engine

Proyek ini memiliki tiga kepribadian visual yang hidup berdampingan dalam satu basis kode. Setiap mode bukan hanya mengganti variabel warna, tetapi mengubah perilaku kursor, geometri komponen, tipografi, dan ritme ruang:

```text
+-------------------+---------------------------------------------------------+
| Mode              | DNA Desain & Karakteristik                              |
+-------------------+---------------------------------------------------------+
| Broadsheet        | Estetika cetak risograph koran klasik. Menggunakan      |
| (Riso Edition)    | crop marks sudut, registration bullseye, dan chromatic  |
|                   | aberration offset vermilion-teal (#ba3524 / #3b7c80).   |
+-------------------+---------------------------------------------------------+
| Hallmark          | Blueprint arsitektural presisi tinggi. Garis rambut     |
| (Grid Edition)    | 1px border-collapse, font serif editorial, sudut siku  |
|                   | kaku (0px radius), serta kursor persegi mekanik.        |
+-------------------+---------------------------------------------------------+
| Fluid             | Interaksi modern berbasis fisika pegas. Sudut lengkung  |
| (Original)        | rounded-2xl, kartu 3D tilt yang bereaksi terhadap kursor,|
|                   | serta radial spotlight illumination.                    |
+-------------------+---------------------------------------------------------+
```

Peralihan estetika dikelola melalui `AestheticContext` dan disimpan pada `localStorage`, terintegrasi langsung dengan transisi DOM class di `document.documentElement`.

---

## 2. Detail Interaksi & Rekayasa UX

- **Radial Ripple Theme Switcher:** Penggantian tema terang dan gelap memanfaatkan browser-native View Transitions API. Posisi klik mouse ($x, y$) dihitung secara geometris terhadap sudut terpanjang layar ($\sqrt{\Delta x^2 + \Delta y^2}$) untuk menghasilkan animasi sweep lingkaran $360^\circ$ tanpa lag render.
- **Adaptive Kinematics Cursor:** Kursor custom yang membaca status DOM secara real-time. Berubah menjadi i-beam vertikal saat melintasi form teks, membesar saat melintasi elemen interaktif, dan bertransformasi geometris mengikuti mode estetika yang aktif.
- **Inertial Momentum Scroll:** Didukung oleh Lenis Scroll untuk interpolasi scroll yang halus, dilengkapi deteksi otomatis penonaktifan scroll pada transisi rute dan menu overlay.
- **Accessible Semantics (WCAG AA):** Kontras warna diuji secara matematis di atas rasio 4.5:1, dukungan keyboard komprehensif, focus-visible terdefinisi, dan penanganan ramah bagi pengguna dengan `prefers-reduced-motion`.

---

## 3. Direktori Proyek Unggulan

Portofolio ini menampilkan studi kasus nyata dari sistem web yang telah di-deploy dan beroperasi:

1. **Adora SaaS (2026)**
   Platform ERP apotek multi-tenant cloud-native. Dibangun menggunakan Next.js 16, NestJS, React 19, dan Shadcn UI. Mengelola resep dokter digital, inventaris obat multi-cabang, kontrol akses berbasis peran (RBAC), dan POS kasir dengan optimisasi server-state via TanStack Query.

2. **Cash Flow Tracking Application (2025)**
   Dashboard pelacak keuangan personal dan operasional dengan analitik real-time. Memvisualisasikan rasio pendapatan vs pengeluaran, distribusi kategori, serta tren bulanan via Recharts dan PostgreSQL (Supabase).

3. **Adora Pharmacy Management System (2024)**
   Sistem manajemen internal sentral untuk PT Adora Cipta Medika. Menangani operasional apotek fisik mulai dari pengadaan obat, validasi batch kedaluwarsa, hingga pelaporan berkas kasir.

4. **Spare Part Information System (2025)**
   Katalog sales engineering terstruktur untuk katalog 500+ suku cadang industri, navigasi pohon relasi komponen bertingkat, dan generator ekspor dokumen penawaran Excel.

---

## 4. Stack Teknologi

```text
Core Runtime       : Next.js 16 (App Router + Turbopack)
UI Library         : React 19
Type System        : TypeScript 5
CSS Framework      : Tailwind CSS v4
Motion Engine      : Framer Motion
Scroll Physics     : Lenis
Icons              : Lucide React, React Icons
Theme Primitives   : next-themes, View Transitions API
```

---

## 5. Struktur Repositori

```text
src/
├── app/                  # Next.js App Router (pages, layouts, metadata)
│   ├── about/            # Halaman biografi & milestone
│   ├── projects/         # Katalog proyek & rute studi kasus
│   ├── globals.css       # Design tokens & variabel estetika
│   └── layout.tsx        # Shell dokumen, font Google, theme bootstrap
├── components/           # Komponen UI modular
│   ├── About/            # Varian tampilan profil per-estetika
│   ├── Home/             # Hero, value proposition, dan bento showcase
│   ├── Navbar/           # Navigasi responsif & switcher switchboard
│   ├── Parallax/         # Sertifikasi & dokumentasi visual
│   ├── Projects/         # Tampilan katalog & detail studi kasus
│   ├── TechTools/        # Matriks kompetensi & skillsets
│   └── ThemeToggle/      # Ripple transition button
├── context/              # AestheticContext & state provider
└── hooks/                # useDebounce, useHover, useScrollPosition, useWindowSize
```

---

## 6. Menjalankan Secara Lokal

Pastikan Node.js (versi 18+ atau lebih tinggi) terpasang di sistem.

```bash
# 1. Clone repositori
git clone https://github.com/wildanrizkii/profile-portfolio.git
cd profile-portfolio

# 2. Pasang dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

Untuk memverifikasi build produksi dan tipe data:

```bash
# Typecheck TypeScript
npx tsc --noEmit

# Production Build
npm run build
```

---

## Lisensi & Hak Cipta

Didesain dan dikembangkan secara independen oleh **Wildan Rizki Nurfauzi**.
Seluruh konten studi kasus apotek dan industri dilindungi oleh hak cipta pemilik proyek masing-masing.

