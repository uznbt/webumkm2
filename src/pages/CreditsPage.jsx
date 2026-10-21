import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta.js';

export default function CreditsPage() {
  usePageMeta(
    'Kredit Foto',
    'Sumber foto yang digunakan di situs Kedai Ibu Kost.',
  );

  return (
    <div className="page-hero page-hero--credits">
      <div className="container credits">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Beranda</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Kredit Foto</span>
        </nav>

        <p className="eyebrow">Kredit &amp; lisensi</p>
        <h1>Kredit foto</h1>
        <p className="page-hero__lead">
          Semua foto yang tampil di situs ini berasal dari dokumentasi Kedai Ibu Kost. Sebagian
          gambar dipotong dan dimampatkan untuk kebutuhan situs. Menu yang belum memiliki foto
          ditampilkan tanpa gambar.
        </p>

        <section className="credits__section" aria-labelledby="credits-documentation">
          <h2 id="credits-documentation">Dokumentasi Kedai Ibu Kost</h2>
          <p>
            Foto tampak depan kedai, tim, suasana kedai, serta foto menu nasi pencok, nasi ayam
            serundeng, seblak, risoles mentai, pisang kembung tiramisu, dan pisang kembung coklat
            keju berasal dari dokumentasi Kedai Ibu Kost serta unggahan resmi Instagram
            @kedai.ibukost.
          </p>
        </section>

        <section className="credits__section" aria-labelledby="credits-fonts">
          <h2 id="credits-fonts">Jenis huruf</h2>
          <p>
            Fraunces dan Karla, dilisensikan di bawah SIL Open Font License, disajikan secara lokal
            melalui Fontsource.
          </p>
        </section>

        <Link className="text-link" to="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Kembali ke beranda
        </Link>
      </div>
    </div>
  );
}
