# Kedai Ibu Kost

Situs katalog dan profil untuk **Kedai Ibu Kost**, kedai masakan rumahan di Pasirjengkol, Majalaya, Karawang. Situs menampilkan cerita kedai, 34 pilihan menu, detail produk, kontak, dan kotak peta Google Maps.

## Menjalankan secara lokal

Butuh Node.js 20 atau versi lebih baru.

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat lokal (biasanya `http://localhost:5173`).

Untuk memeriksa hasil produksi:

```bash
npm run build
npm run preview
```

## Halaman

- `/` — beranda, menu unggulan, cerita singkat, dan cara pesan.
- `/katalog` — pencarian, filter kategori, dan pengurutan harga.
- `/produk/:slug` — detail menu dan tombol pemesanan.
- `/tentang` — profil kedai, cerita, visi/misi, dan keunggulan.
- `/kontak` — kanal kontak, peta lokasi, dan catatan sebelum berkunjung.
- `/kredit-foto` — sumber serta lisensi foto.

## Konfigurasi kontak

Kontak dan peta diatur di `src/data/site.js`.

- Instagram dan Facebook sudah terisi.
- Nomor WhatsApp dan email **belum tersedia**. Selama belum diisi, tombol pesan diarahkan ke Instagram DM.
- Untuk mengaktifkan WhatsApp:

  ```bash
  # .env.local
  VITE_WHATSAPP_NUMBER=62812xxxxxxxx
  ```

  Gunakan angka saja dengan kode negara. Jika diisi, tombol pemesanan otomatis memakai WhatsApp.

- Untuk menampilkan email:

  ```bash
  # .env.local
  VITE_CONTACT_EMAIL=halo@contoh.com
  ```

- Jejak peta memakai koordinat di `site.mapsEmbed`, sedangkan tautan “Buka di Google Maps” memakai `site.maps`.
- Jam operasional belum diverifikasi. Situs sengaja tidak menampilkan jam buka; pengunjung diminta mengonfirmasi lewat chat.

## Catatan data dan foto

- Katalog berisi 34 menu unik dari menu yang diberikan. Harga mengikuti rentang **Rp1.000–Rp15.000**.
- Enam menu sudah memakai foto asli dari kedai (nasi pencok, nasi ayam serundeng, seblak, risoles mentai, pisang kembung tiramisu, pisang kembung coklat keju). Menu lain sengaja ditampilkan tanpa foto, bukan memakai ilustrasi.
- Foto kedai, tim, dan suasana berasal dari dokumentasi Kedai Ibu Kost serta unggahan Instagram resmi.
- Lisensi dan atribusi lengkap ada di halaman `/kredit-foto`.
- Data bisnis yang tersedia: pemilik **Ibu Ike Haryani**, berdiri **2021**, kedai fisik sejak **2024**, sertifikasi **Halal & PBBR**.

## Deploy ke Vercel

### Lewat dashboard

1. Import repositori ini di Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Tambahkan environment variable kontak jika sudah tersedia, lalu deploy.

### Lewat CLI

```bash
npx vercel
```

`vercel.json` sudah mengatur rewrite untuk React Router dan cache aset.

## Struktur utama

```text
src/
├── components/     header, footer, kartu menu, ikon, logo
├── data/           data menu dan konfigurasi situs
├── hooks/          pengatur judul/deskripsi halaman
├── pages/          halaman-halaman situs
├── styles.css      seluruh sistem tampilan dan responsif
├── App.jsx         rute aplikasi
└── main.jsx        entry point React

public/images/      foto produk dan dokumentasi kedai (WebP)
vercel.json         rewrite SPA dan cache header
```

## Teknologi

React 19, React Router 7, Vite 8, Fontsource (Fraunces + Karla), dan Lucide.
