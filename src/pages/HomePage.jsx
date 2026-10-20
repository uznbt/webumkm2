import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BadgeCheck, Coffee, Cookie, MapPin, UtensilsCrossed } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { categories, countByCategory, featuredProducts, products } from '../data/products.js';
import { getOrderUrl, orderChannel, site } from '../data/site.js';

const categoryIcons = {
  makanan: UtensilsCrossed,
  cemilan: Cookie,
  minuman: Coffee,
};

export default function HomePage() {
  usePageMeta(null, site.description);

  const heroProduct = products.find((product) => product.slug === 'nasi-pencok-telor-dadar');

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__rule" aria-hidden="true" />
              Sejak 2021 · Pasirjengkol, Karawang
            </p>
            <h1 id="hero-title">
              Nasi hangat.
              <br />
              Sambal segar.
              <br />
              Harga <em>akrab</em> anak kost.
            </h1>
            <p className="hero__lead">
              Kedai Ibu Kost menyajikan menu rumahan dari Pasirjengkol, Karawang. Mulai dari Nasi
              Pencok sampai camilan pedas, semuanya disiapkan untuk makan yang mengenyangkan tanpa
              bikin kantong bolong.
            </p>

            <div className="hero__actions">
              <Link className="button button--primary" to="/katalog">
                Lihat katalog
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="text-link" to="/tentang">
                Kenali kedai
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <dl className="hero__facts">
              <div>
                <dt>Berdiri</dt>
                <dd>2021</dd>
              </div>
              <div>
                <dt>Lokasi</dt>
                <dd>Pasirjengkol</dd>
              </div>
              <div>
                <dt>Harga menu</dt>
                <dd>{site.priceRange}</dd>
              </div>
            </dl>
          </div>

          <div className="hero__visual">
            <div className="hero__arch">
              <img
                src="/images/site/hero-nasi.webp"
                alt="Ilustrasi nasi dengan ayam, sambal, dan lalapan"
                width="1100"
                height="1375"
                fetchPriority="high"
              />
            </div>

            {heroProduct && (
              <Link className="hero__tag" to={`/produk/${heroProduct.slug}`}>
                <span>Menu khas</span>
                <strong>Nasi Pencok</strong>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            )}

            <figure className="hero__store">
              <img
                src="/images/site/storefront.webp"
                alt="Tampak depan kedai Ibu Kost di Pasirjengkol"
                width="1000"
                height="1250"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Kedai fisik sejak 2024</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section home-featured" aria-labelledby="featured-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Pilihan dulu</p>
              <h2 id="featured-title">Kalau bingung, mulai dari yang ini.</h2>
            </div>
            <Link className="text-link section-head__link" to="/katalog">
              Lihat semua menu
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                eager={index === 0}
              />
            ))}
          </div>

          <p className="illustration-note">
            Foto menu pada katalog ini merupakan ilustrasi. Foto asli dapat ditanyakan langsung ke
            kedai.
          </p>
        </div>
      </section>

      <section className="section category-band" aria-labelledby="category-title">
        <div className="container category-band__grid">
          <div className="category-band__intro">
            <p className="eyebrow eyebrow--light">Jelajahi menu</p>
            <h2 id="category-title">Tiga kelompok menu, satu dapur.</h2>
            <p>
              Mau makan berat, ngemil sore, atau cari minuman dingin? Kami pisahkan katalognya supaya
              lebih cepat menemukan yang kamu butuhkan.
            </p>
            <Link className="button button--mustard" to="/katalog">
              Buka katalog lengkap
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="category-list">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id] ?? UtensilsCrossed;

              return (
                <Link
                  className="category-row"
                  key={category.id}
                  to={`/katalog?kategori=${category.id}`}
                >
                  <span className="category-row__number">{category.number}</span>
                  <img
                    className="category-row__image"
                    src={category.image}
                    alt=""
                    width="72"
                    height="72"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="category-row__content">
                    <span className="category-row__name">
                      <Icon size={18} aria-hidden="true" />
                      {category.label}
                    </span>
                    <span className="category-row__description">{category.description}</span>
                  </span>
                  <span className="category-row__count">{countByCategory(category.id)} menu</span>
                  <span className="category-row__arrow" aria-hidden="true">
                    <ArrowUpRight size={20} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section story" aria-labelledby="story-title">
        <div className="container story__grid">
          <div className="story__media">
            <img
              src="/images/site/storefront.webp"
              alt="Dokumentasi Kedai Ibu Kost bersama pelanggan di Pasirjengkol"
              width="1000"
              height="1250"
              loading="lazy"
              decoding="async"
            />
            <p className="story__caption">Dokumentasi Kedai Ibu Kost, Pasirjengkol.</p>
          </div>

          <div className="story__copy">
            <p className="eyebrow">Cerita kedai</p>
            <h2 id="story-title">Dari jualan online ke kedai fisik.</h2>
            <p>
              Kedai Ibu Kost dikelola oleh Ibu Ike Haryani. Usahanya dimulai pada 2021 dengan
              promosi dari mulut ke mulut dan media sosial. Pada 2024, kedai fisik dibuka di
              Pasirjengkol supaya pelanggan bisa mampir langsung.
            </p>
            <p>
              Pelanggan kami kebanyakan mahasiswa, anak kos, pekerja, dan warga sekitar. Karena itu,
              porsi, rasa, dan harga dijaga tetap ramah untuk makan sehari-hari.
            </p>

            <ul className="fact-list">
              <li>
                <span aria-hidden="true">01</span>
                <div>
                  <strong>Menu khas Nasi Pencok</strong>
                  <p>Pencok sayur, telor dadar, dan sambal dalam satu porsi.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">02</span>
                <div>
                  <strong>{products.length} pilihan menu</strong>
                  <p>Dari makanan berat, camilan, sampai minuman.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">03</span>
                <div>
                  <strong>Halal &amp; PBBR</strong>
                  <p>Legalitas usaha yang menunjang kepercayaan pelanggan.</p>
                </div>
              </li>
            </ul>

            <Link className="text-link" to="/tentang">
              Baca cerita lengkap
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section how" aria-labelledby="how-title">
        <div className="container how__grid">
          <div className="how__intro">
            <p className="eyebrow">Cara pesan</p>
            <h2 id="how-title">Tiga langkah, tanpa ribet.</h2>
            <p>
              Belum ada aplikasi pesan antar. Untuk sementara, pesanan dan konfirmasi ketersediaan
              dilayani lewat chat.
            </p>
            <p className="how__location">
              <MapPin size={18} aria-hidden="true" />
              {site.address}
            </p>
          </div>

          <ol className="how__list">
            <li>
              <span className="how__number" aria-hidden="true">
                01
              </span>
              <div>
                <h3>Pilih menu</h3>
                <p>Buka katalog, cari menu favoritmu, lalu catat nama menunya.</p>
              </div>
            </li>
            <li>
              <span className="how__number" aria-hidden="true">
                02
              </span>
              <div>
                <h3>Chat lewat {orderChannel}</h3>
                <p>
                  Kirim pesanan lewat {orderChannel}. Kami akan mengonfirmasi ketersediaan dan total
                  harga.
                </p>
              </div>
            </li>
            <li>
              <span className="how__number" aria-hidden="true">
                03
              </span>
              <div>
                <h3>Atur pengambilan</h3>
                <p>Setelah pesanan dikonfirmasi, atur waktu pengambilan di kedai.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="home-cta" aria-labelledby="cta-title">
        <div className="container home-cta__inner">
          <div>
            <p className="eyebrow">
              <BadgeCheck size={15} aria-hidden="true" />
              Kedai Ibu Kost
            </p>
            <h2 id="cta-title">Sudah lapar? Mampir, atau chat dulu.</h2>
            <p>
              Lihat katalog, pilih menu, lalu kirim pesananmu lewat {orderChannel}. Kami bantu
              siapkan sebelum kamu sampai.
            </p>
          </div>
          <div className="home-cta__actions">
            <a
              className="button button--primary"
              href={getOrderUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Pesan via {orderChannel}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <Link className="button button--ghost-dark" to="/kontak">
              Lihat kontak &amp; lokasi
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
