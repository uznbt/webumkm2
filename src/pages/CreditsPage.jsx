import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta.js';

const wikimediaCredits = [
  { title: 'Nasi Pecel', author: 'Herryz', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Nasi_Pecel.jpg' },
  { title: 'Ayam Serundeng', author: 'Stsanto', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Ayam_Serundeng.jpg' },
  { title: 'Semangkok seblak bandung komplit', author: 'Happywu', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Semangkok_seblak_bandung_komplit.jpg' },
  { title: 'Pisang coklat', author: 'Taman Renyah', license: 'CC BY 3.0', url: 'https://commons.wikimedia.org/wiki/File:Pisang_coklat.jpg' },
  { title: 'Pisang keju 1', author: 'Salm Abdullah', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Pisang_keju_1.jpg' },
  { title: 'Pisang keju 2', author: 'Salm Abdullah', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Pisang_keju_2.jpg' },
  { title: 'Piscok 2', author: 'Gunawan Kartapranata', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Piscok_2.jpg' },
  { title: 'Sepiring Pisang Goreng', author: 'Indonesiagood', license: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:Sepiring_Pisang_Goreng.jpg' },
  { title: 'Risol Sayur', author: 'Supardisahabu', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Risol_Sayur.jpg' },
  { title: 'Cireng isi kuah', author: 'M.akbar.raf', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Cireng_isi_kuah.jpg' },
  { title: 'Tahu isi goreng plus cabe rawit', author: 'Gunawan Kartapranata', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Tahu_isi_goreng_plus_cabe_rawit.jpg' },
  { title: 'Cilok', author: 'MartinThoma', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Cilok.jpg' },
  { title: 'Ceker Ayam Pedas', author: 'Fido Cahya', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Ceker_Ayam_Pedas.jpg' },
  { title: 'Otak2 cooked', author: 'Lord Mountbatten', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Otak2_cooked.JPG' },
  { title: 'Es teler', author: 'Nola yudistira', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Es_teler.jpg' },
  { title: 'Es Pisang Ijo 1', author: 'Fitri Penyalai', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Es_Pisang_Ijo_1.jpg' },
  { title: 'Minuman Kemasan Teh Pucuk Harum', author: 'SATELITBM', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Minuman_Kemasan_Teh_Pucuk_Harum.jpg' },
  { title: 'Sari Adem Obat Panas Dalam', author: 'SATELIT BM', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Sari_Adem_Obat_Panas_Dalam.jpg' },
  { title: 'SUSU Go MILKU SR12 Rasa Original', author: 'Moh Haryanto', license: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:SUSU_Go_MILKU_SR12_Rasa_Original.jpg' },
];

const pexelsIds = [
  '37097883',
  '36853606',
  '37073149',
  '37066477',
  '17488531',
  '12596334',
  '5779487',
  '11009226',
  '14510445',
  '27860686',
  '11043663',
  '35229818',
  '38006841',
  '31699476',
  '7690201',
  '27551844',
  '11588452',
  '37134623',
];

export default function CreditsPage() {
  usePageMeta(
    'Kredit Foto',
    'Sumber dan lisensi foto yang digunakan di situs Kedai Ibu Kost.',
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
          Foto asli kedai berasal dari dokumentasi Kedai Ibu Kost. Foto menu lainnya adalah
          ilustrasi dari Pexels dan Wikimedia Commons, bukan dokumentasi langsung dari kedai.
          Sebagian gambar dipotong dan dimampatkan untuk kebutuhan situs; lisensi aslinya tetap
          berlaku.
        </p>

        <section className="credits__section" aria-labelledby="credits-documentation">
          <h2 id="credits-documentation">Dokumentasi Kedai Ibu Kost</h2>
          <p>
            Foto tampak depan kedai, tim, dan suasana kedai berasal dari dokumentasi Kedai Ibu Kost
            serta unggahan resmi Instagram @kedai.ibukost.
          </p>
        </section>

        <section className="credits__section" aria-labelledby="credits-pexels">
          <h2 id="credits-pexels">Pexels</h2>
          <p>
            Digunakan sesuai Pexels License. Atribusi tidak diwajibkan, tetapi kami cantumkan
            sebagai bentuk terima kasih. Sumber:{' '}
            {pexelsIds.map((id, index) => (
              <span key={id}>
                <a href={`https://www.pexels.com/photo/${id}/`} target="_blank" rel="noreferrer">
                  Pexels {id}
                </a>
                {index < pexelsIds.length - 1 ? ', ' : ''}
              </span>
            ))}
            .
          </p>
        </section>

        <section className="credits__section" aria-labelledby="credits-wikimedia">
          <h2 id="credits-wikimedia">Wikimedia Commons</h2>
          <ul className="credits__list">
            {wikimediaCredits.map((credit) => (
              <li key={credit.url}>
                <a href={credit.url} target="_blank" rel="noreferrer">
                  {credit.title}
                </a>
                <span>
                  {credit.author} · {credit.license}
                </span>
              </li>
            ))}
          </ul>
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
