import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta.js';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../components/Icons.jsx';
import { getOrderUrl, orderChannel, site } from '../data/site.js';

export default function ContactPage() {
  usePageMeta(
    'Kontak & Lokasi',
    'Hubungi Kedai Ibu Kost lewat Instagram atau Facebook. Lokasi: Pasirjengkol, Majalaya, Karawang.',
  );

  const whatsappDisplay = site.whatsapp ? `+${site.whatsapp}` : '';

  return (
    <>
      <div className="page-hero page-hero--contact">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Kontak</span>
          </nav>

          <div className="contact-hero">
            <div>
              <p className="eyebrow">Kontak &amp; lokasi</p>
              <h1>Mampir, atau sapa lewat layar.</h1>
              <p className="page-hero__lead">
                Mau pesan menu, tanya ketersediaan, atau minta petunjuk ke kedai? Pilih saluran yang
                paling nyaman. Kami membalas lewat chat.
              </p>
              <a
                className="button button--primary"
                href={getOrderUrl()}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Pesan via {orderChannel}
              </a>
            </div>

            <aside className="contact-hero__location">
              <span className="contact-hero__icon" aria-hidden="true">
                <MapPin size={24} />
              </span>
              <p className="eyebrow">Alamat kedai</p>
              <p className="contact-hero__address">{site.address}</p>
              <a className="text-link" href={site.maps} target="_blank" rel="noreferrer">
                Buka di Google Maps
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </div>

      <section className="section contact-main" aria-labelledby="contact-title">
        <div className="container contact-main__grid">
          <div className="contact-channels">
            <p className="eyebrow">Hubungi kami</p>
            <h2 id="contact-title">Pilih saluran yang paling nyaman.</h2>
            <p className="contact-channels__lead">
              Untuk pemesanan, sebutkan nama menu yang ingin dipesan. Kami akan mengonfirmasi harga
              dan ketersediaan sebelum pesanan disiapkan.
            </p>

            <div className="contact-list">
              <a
                className="contact-row"
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-row__icon" aria-hidden="true">
                  <InstagramIcon size={20} />
                </span>
                <span className="contact-row__copy">
                  <span className="contact-row__label">Instagram</span>
                  <strong>{site.instagramHandle}</strong>
                </span>
                <span className="contact-row__action">
                  Buka
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>

              <a
                className="contact-row"
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-row__icon" aria-hidden="true">
                  <FacebookIcon size={20} />
                </span>
                <span className="contact-row__copy">
                  <span className="contact-row__label">Facebook</span>
                  <strong>{site.facebookHandle}</strong>
                </span>
                <span className="contact-row__action">
                  Buka
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>

              {site.whatsapp && (
                <a
                  className="contact-row"
                  href={getOrderUrl()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-row__icon" aria-hidden="true">
                    <WhatsAppIcon size={20} />
                  </span>
                  <span className="contact-row__copy">
                    <span className="contact-row__label">WhatsApp</span>
                    <strong>{whatsappDisplay}</strong>
                  </span>
                  <span className="contact-row__action">
                    Chat
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </a>
              )}

              {site.email && (
                <a className="contact-row" href={`mailto:${site.email}`}>
                  <span className="contact-row__icon" aria-hidden="true">
                    <Mail size={20} />
                  </span>
                  <span className="contact-row__copy">
                    <span className="contact-row__label">Email</span>
                    <strong>{site.email}</strong>
                  </span>
                  <span className="contact-row__action">
                    Kirim
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </a>
              )}

              <a className="contact-row" href={site.maps} target="_blank" rel="noreferrer">
                <span className="contact-row__icon" aria-hidden="true">
                  <MapPin size={20} />
                </span>
                <span className="contact-row__copy">
                  <span className="contact-row__label">Lokasi</span>
                  <strong>{site.shortAddress}</strong>
                </span>
                <span className="contact-row__action">
                  Peta
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          <aside className="contact-photo">
            <img
              src="/images/site/storefront.webp"
              alt="Tampak depan Kedai Ibu Kost di Pasirjengkol"
              width="1000"
              height="1250"
              fetchPriority="high"
            />
            <div className="contact-photo__caption">
              <p className="eyebrow">Kedai Ibu Kost</p>
              <p>
                {site.shortAddress}
                <br />
                {site.owner}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="map-section" aria-labelledby="map-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Peta lokasi</p>
              <h2 id="map-title">Kedai Ibu Kost di peta.</h2>
            </div>
            <a className="text-link section-head__link" href={site.maps} target="_blank" rel="noreferrer">
              Buka di Google Maps
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="map-embed">
            <iframe
              src={site.mapsEmbed}
              title={`Peta lokasi ${site.name}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="map-note">
            Kotak peta di atas menampilkan lokasi “{site.mapsPlace}” dari Google Maps.
          </p>
        </div>
      </section>

      <section className="visit" aria-labelledby="visit-title">
        <div className="container visit__grid">
          <div>
            <p className="eyebrow">Sebelum mampir</p>
            <h2 id="visit-title">Pastikan dulu, biar tidak bolak-balik.</h2>
          </div>
          <div className="visit__notes">
            <div>
              <span className="visit__icon" aria-hidden="true">
                <Clock3 size={20} />
              </span>
              <h3>Waktu kunjungan</h3>
              <p>
                Konfirmasi waktu buka lewat chat sebelum datang, terutama untuk pesanan dalam jumlah
                banyak.
              </p>
            </div>
            <div>
              <span className="visit__icon" aria-hidden="true">
                <MessageCircle size={20} />
              </span>
              <h3>Ketersediaan menu</h3>
              <p>
                Menu dapat habis lebih cepat pada jam ramai. Tanyakan stok lewat {orderChannel}
                sebelum berangkat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
