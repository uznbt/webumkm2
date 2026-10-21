import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  MapPin,
  Store,
  Users,
  Wallet,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta.js';
import { products } from '../data/products.js';
import { getOrderUrl, orderChannel, site } from '../data/site.js';

const missions = [
  'Menyajikan makanan rumahan dengan rasa yang konsisten dan bahan yang layak.',
  'Menjaga harga tetap ramah untuk anak kos, mahasiswa, dan pekerja.',
  'Melayani pelanggan dengan ramah, cepat, dan menjaga kebersihan kedai.',
  'Menghadirkan pilihan menu yang dekat dengan selera pelanggan sehari-hari.',
];

const advantages = [
  {
    title: 'Nasi Pencok sebagai menu andalan',
    text: 'Pencok sayur, telor dadar, dan sambal menjadi kombinasi yang paling dikenal pelanggan.',
    icon: Store,
  },
  {
    title: 'Harga ramah untuk makan sehari-hari',
    text: 'Semua menu berada di rentang Rp1.000–Rp15.000, termasuk pilihan topping seblak.',
    icon: Wallet,
  },
  {
    title: 'Lengkap dari makan berat sampai minuman',
    text: `Ada ${products.length} pilihan menu yang dibagi ke dalam makanan, cemilan, dan minuman.`,
    icon: Users,
  },
  {
    title: 'Legalitas yang menunjang kepercayaan',
    text: 'Kedai Ibu Kost telah memiliki sertifikasi halal dan PBBR.',
    icon: BadgeCheck,
  },
];

export default function AboutPage() {
  usePageMeta(
    'Tentang Kami',
    'Kenali Kedai Ibu Kost: usaha kuliner rumahan Ibu Ike Haryani di Pasirjengkol, Majalaya, Karawang, sejak 2021.',
  );

  return (
    <>
      <div className="page-hero page-hero--about">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Tentang Kami</span>
          </nav>

          <div className="about-hero">
            <div className="about-hero__copy">
              <p className="eyebrow">Tentang kami</p>
              <h1>Masakan rumahan dari dapur kecil di Pasirjengkol.</h1>
              <p className="page-hero__lead">
                Kedai Ibu Kost adalah usaha kuliner rumahan yang dikelola langsung oleh Ibu Ike
                Haryani. Menyajikan makanan sehari-hari untuk mahasiswa, anak kos, pekerja, dan
                warga sekitar.
              </p>
              <div className="about-hero__actions">
                <Link className="button button--primary" to="/katalog">
                  Lihat menu
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link className="text-link" to="/kontak">
                  Mampir ke kedai
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="about-hero__media">
              <img
                src="/images/site/kedai-ibu-kost-team.webp"
                alt="Tim Kedai Ibu Kost di depan kedai"
                width="900"
                height="1200"
                fetchPriority="high"
              />
              <div className="about-hero__caption">
                <MapPin size={16} aria-hidden="true" />
                <span>{site.address}</span>
              </div>
            </div>
          </div>

          <dl className="about-facts">
            <div>
              <dt>Dikelola oleh</dt>
              <dd>{site.owner}</dd>
            </div>
            <div>
              <dt>Berdiri</dt>
              <dd>{site.founded}</dd>
            </div>
            <div>
              <dt>Kedai fisik</dt>
              <dd>{site.physicalSince}</dd>
            </div>
            <div>
              <dt>Pilihan menu</dt>
              <dd>{products.length} menu</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="section about-story" aria-labelledby="about-story-title">
        <div className="container about-story__grid">
          <div className="about-story__media">
            <img
              src="/images/site/storefront-side.webp"
              alt="Suasana pelayanan di Kedai Ibu Kost, Pasirjengkol"
              width="900"
              height="1200"
              loading="lazy"
              decoding="async"
            />
            <p>Suasana pelayanan di kedai, Pasirjengkol.</p>
          </div>

          <div className="about-story__copy">
            <p className="eyebrow">Cerita kami</p>
            <h2 id="about-story-title">Dimulai dari dapur, tumbuh dari pelanggan.</h2>
            <p>
              Kedai Ibu Kost mulai berjualan pada 2021. Saat itu, promosi dilakukan lewat media
              sosial dan informasi dari pelanggan ke pelanggan. Menu rumahan dengan harga yang
              terjangkau membuat kedai ini dikenal di kalangan anak kos dan pekerja sekitar.
            </p>
            <p>
              Pada 2024, kedai fisik dibuka di Pasirjengkol, Majalaya, Karawang. Kehadiran kedai
              membuat pelanggan bisa mampir langsung, melihat pilihan menu, dan memesan tanpa harus
              menunggu terlalu lama.
            </p>
            <p>
              Sampai sekarang, dapur Kedai Ibu Kost tetap berpegang pada hal yang sederhana: rasa
              rumahan, porsi yang mengenyangkan, dan harga yang masuk akal untuk makan setiap hari.
            </p>

            <ol className="about-timeline" aria-label="Perjalanan Kedai Ibu Kost">
              <li>
                <span>2021</span>
                <div>
                  <strong>Mulai berjualan</strong>
                  <p>Menu rumahan diperkenalkan lewat media sosial dan mulut ke mulut.</p>
                </div>
              </li>
              <li>
                <span>2024</span>
                <div>
                  <strong>Kedai fisik dibuka</strong>
                  <p>Pelanggan bisa mampir langsung ke Pasirjengkol.</p>
                </div>
              </li>
              <li>
                <span>Sekarang</span>
                <div>
                  <strong>{products.length} pilihan menu</strong>
                  <p>Makanan, cemilan, dan minuman untuk kebutuhan sehari-hari.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section about-purpose" aria-labelledby="purpose-title">
        <div className="container about-purpose__grid">
          <div className="about-purpose__intro">
            <p className="eyebrow">Arah kami</p>
            <h2 id="purpose-title">Visi</h2>
            <p>
              Menjadi kedai makan rumahan yang dekat dan bisa diandalkan warga Pasirjengkol serta
              sekitarnya, dengan rasa yang konsisten dan harga yang tetap terjangkau.
            </p>
          </div>

          <div className="about-purpose__mission">
            <h3>Misi kami</h3>
            <ol className="mission-list">
              {missions.map((mission, index) => (
                <li key={mission}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <p>{mission}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section about-advantages" aria-labelledby="advantages-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Kenapa Kedai Ibu Kost</p>
              <h2 id="advantages-title">Hal-hal yang kami jaga setiap hari.</h2>
            </div>
            <Link className="text-link section-head__link" to="/katalog">
              Cek menunya
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <ul className="advantage-list">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title}>
                  <span className="advantage-list__icon" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <Check size={20} className="advantage-list__check" aria-hidden="true" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="about-closing" aria-labelledby="about-closing-title">
        <div className="container about-closing__grid">
          <img
            src="/images/site/food-spread.webp"
            alt="Suasana meja prasmanan dan rak camilan di Kedai Ibu Kost"
            width="1000"
            height="750"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="eyebrow eyebrow--light">Mampir, yuk</p>
            <h2 id="about-closing-title">Kenalan langsung lebih enak.</h2>
            <p>
              Kalau penasaran dengan Nasi Pencok atau ingin melihat pilihan menu lain, sapa kami
              dulu lewat {orderChannel} atau langsung datang ke kedai.
            </p>
            <div className="about-closing__actions">
              <a
                className="button button--mustard"
                href={getOrderUrl()}
                target="_blank"
                rel="noreferrer"
              >
                Chat via {orderChannel}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <Link className="button button--outline-light" to="/kontak">
                Lihat lokasi
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
