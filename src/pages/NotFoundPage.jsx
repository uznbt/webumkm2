import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFoundPage() {
  usePageMeta('Halaman tidak ditemukan');

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="eyebrow">404</p>
        <h1>Halaman ini tidak ada di menu.</h1>
        <p>
          Mungkin tautannya salah, atau halaman sudah dipindahkan. Kamu bisa kembali ke beranda atau
          langsung melihat katalog menu.
        </p>
        <div className="not-found__actions">
          <Link className="button button--primary" to="/">
            Kembali ke beranda
          </Link>
          <Link className="button button--outline" to="/katalog">
            Lihat katalog
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
