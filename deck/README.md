# Deck “Pemasaran Digital + Website” — Kedai Ibu Kost

Sumber presentasi versi upgrade (Kelompok 4 / Kelas 3F). Berkas PDF final ada di root proyek:

```
PPT Kelompok 4 Kelas 3F.pdf
```

## Isi deck (12 slide)

| # | Slide | Keterangan |
|---|-------|------------|
| 1 | Cover | Pemasaran Digital + Website (upgrade) |
| 2 | Anggota Kelompok | 5 anggota + NIM |
| 3 | Profil Usaha | data Kedai Ibu Kost |
| 4 | Kondisi Awal & Perkembangan | TikTok → IG & FB → Website |
| 5 | Instagram | alasan singkat + screenshot + **QR profil** |
| 6 | Facebook | alasan singkat + screenshot + **QR halaman** |
| 7 | Website | katalog + fitur utama + **QR situs** |
| 8 | Peran Masing-masing Platform | tabel IG vs FB vs Website |
| 9 | Alur Pemesanan Digital | funnel 4 tahap |
| 10 | Dampak & Kesimpulan | evaluasi singkat + angka kunci |
| 11 | Dokumentasi | 4 foto kedai & tim |
| 12 | Terima Kasih | penutup |

## Cara mengubah isi

Semua teks ada di `deck/deck.html` (satu file, CSS inline). Gambar di `deck/assets/img/`,
font di `deck/assets/fonts/` (Pacifico, Caveat, Fraunces, Karla — sudah lokal, tidak butuh internet).

Ukuran tiap slide: **1920 × 1080 px**, dicetak ke halaman **1440 × 810 pt** (16:9, sama seperti PDF Canva asli).

## Regenerasi PDF

Dari root proyek:

```bash
./buat-pdf.sh
```

Skrip merender `deck/deck.html` dengan Chromium, lalu meratakan tiap halaman menjadi gambar
JPEG (19 halaman, ±5 MB). Butuh Chromium/Chrome dan PyMuPDF (`pip install pymupdf`).

Variabel opsional:

| Variabel | Default | Efek |
|----------|---------|------|
| `SCALE` | `1.5` | Resolusi render (naikkan ke `2` untuk lebih tajam) |
| `QUALITY` | `85` | Kualitas JPEG |
| `OUT` | nama PDF di root | Nama/lokasi berkas hasil |
| `CHROME` | dicari otomatis | Path Chromium/Chrome |

Contoh: `SCALE=2 QUALITY=90 ./buat-pdf.sh`

Teks di PDF hasil ratatan tidak bisa dipilih/dicari.

Catatan teknis:

- Jangan memakai `position:absolute` untuk konten bergambar — rasterizer print Chromium
  melewatkan gambar di dalam grid/absolute. Layout deck ini memakai flex flow.
- Nama domain di mockup browser memakai `kedaiibukost.vercel.app` (situs live).
  Ganti bila alamat deploy final berbeda.
- Data situs (menu, harga, kontak) mengikuti `src/data/site.js` dan `src/data/products.js`.
- Foto website diambil ulang dari situs setelah pembaruan foto asli (lihat `deck/assets/img/site-*.jpg`).
- Foto menu asli hanya tersedia untuk 6 menu; menu lain sengaja tampil tanpa foto
  (placeholder “Foto menyusul”) sesuai arahan pemilik. Karena itu slide 7 dan 10
  menyebutkan jumlah foto yang tersedia.
- Slide dokumentasi memakai 4 foto dari pemilik: tim, tampak depan, meja prasmanan, dan
  suasana pelayanan (`doc-team`, `doc-front`, `doc-counter`, `doc-side`).
- QR code ada di `deck/assets/img/qr-instagram.png`, `qr-facebook.png`, `qr-website.png`
  (dibuat dengan Segno dari URL di `src/data/site.js`). Ganti dengan
  `python3 -c "import segno; segno.make('URL').save('deck/assets/img/qr-baru.png', scale=14, border=3, dark='#5a1c14', light='#fffdf8')"`.
