import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Logo from './Logo.jsx';
import { FacebookIcon, InstagramIcon } from './Icons.jsx';
import { site } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo light />
          <p>
            Masakan rumahan dari Pasirjengkol, Karawang. Dibuat untuk makan siang yang mengenyangkan
            tanpa bikin kantong bolong.
          </p>
          <div className="footer__badges" aria-label="Informasi kedai">
            <span>Sejak 2021</span>
            <span>Halal &amp; PBBR</span>
          </div>
          <div className="footer__socials">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Kedai Ibu Kost">
              <InstagramIcon size={18} />
            </a>
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook Kedai Ibu Kost">
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Menu katalog">
          <p className="footer__heading">Menu</p>
          <Link to="/katalog">Semua menu</Link>
          <Link to="/katalog?kategori=makanan">Makanan</Link>
          <Link to="/katalog?kategori=cemilan">Cemilan</Link>
          <Link to="/katalog?kategori=minuman">Minuman</Link>
        </nav>

        <nav className="footer__nav" aria-label="Tentang kedai">
          <p className="footer__heading">Kedai</p>
          <Link to="/tentang">Tentang kami</Link>
          <Link to="/kontak">Kontak &amp; lokasi</Link>
          <Link to="/kredit-foto">Kredit foto</Link>
        </nav>

        <div className="footer__contact">
          <p className="footer__heading">Mampir</p>
          <p className="footer__address">
            <MapPin size={18} aria-hidden="true" />
            <span>{site.address}</span>
          </p>
          <div className="footer__map">
            <iframe
              src={site.mapsEmbed}
              title={`Peta lokasi ${site.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a className="footer__maps" href={site.maps} target="_blank" rel="noreferrer">
            Buka di Google Maps
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {site.name}. Semua hak dilindungi.
        </p>
        <p className="footer__note">
          Foto menu berasal dari dokumentasi kedai; sebagian menu belum memiliki foto. Harga dan
          ketersediaan dapat berubah.
        </p>
      </div>
    </footer>
  );
}
