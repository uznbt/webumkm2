import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Flame, MessageCircle, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { getCategory, getProductBySlug, getRelatedProducts } from '../data/products.js';
import { buildOrderMessage, formatRupiah, getOrderUrl, orderChannel, site } from '../data/site.js';
import NotFoundPage from './NotFoundPage.jsx';

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    return false;
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(textarea);
    return copied;
  } catch {
    return false;
  }
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [toast, setToast] = useState('');

  usePageMeta(
    product ? product.name : 'Menu tidak ditemukan',
    product ? `${product.name} di Kedai Ibu Kost. ${product.short}` : undefined,
  );

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(''), 4500);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const relatedProducts = useMemo(() => (product ? getRelatedProducts(product) : []), [product]);

  if (!product) {
    return <NotFoundPage />;
  }

  const category = getCategory(product.category);
  const orderUrl = getOrderUrl(product);
  const message = buildOrderMessage(product);

  const handleOrderClick = (event) => {
    if (site.whatsapp) return;

    event.preventDefault();
    window.open(site.instagram, '_blank', 'noopener,noreferrer');
    copyToClipboard(message).then((copied) => {
      setToast(
        copied
          ? 'Teks pesanan disalin. Tempel di DM Instagram Kedai Ibu Kost.'
          : 'Tulis nama menu di DM Instagram Kedai Ibu Kost, ya.',
      );
    });
  };

  return (
    <>
      <article className="product-page">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <Link to="/katalog">Katalog</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="product-detail">
            <div className="product-media">
              <img
                src={product.image}
                alt={product.imageAlt}
                width="1200"
                height="900"
                fetchPriority="high"
              />
              <p>Foto ilustrasi menu.</p>
            </div>

            <div className="product-info">
              <div className="product-info__tags">
                <span className="tag tag--category">{category?.label}</span>
                {product.badge && <span className="tag tag--badge">{product.badge}</span>}
                {product.spicy && (
                  <span className="tag tag--spicy">
                    <Flame size={14} aria-hidden="true" />
                    Pedas
                  </span>
                )}
              </div>

              <h1>{product.name}</h1>

              <p className="product-info__price">
                {product.priceFrom && <span>Mulai dari</span>}
                <strong>{formatRupiah(product.price)}</strong>
              </p>

              <p className="product-info__description">{product.description}</p>

              <dl className="product-meta">
                <div>
                  <dt>Kategori</dt>
                  <dd>{category?.label}</dd>
                </div>
                <div>
                  <dt>Pemesanan</dt>
                  <dd>Via {orderChannel}</dd>
                </div>
                <div>
                  <dt>Ketersediaan</dt>
                  <dd>Dikonfirmasi lewat chat</dd>
                </div>
              </dl>

              {product.notes?.length > 0 && (
                <ul className="product-notes">
                  {product.notes.map((note) => (
                    <li key={note}>
                      <ShieldCheck size={17} aria-hidden="true" />
                      {note}
                    </li>
                  ))}
                </ul>
              )}

              <div className="product-actions">
                <a
                  className="button button--primary button--wide"
                  href={orderUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleOrderClick}
                >
                  <MessageCircle size={19} aria-hidden="true" />
                  Pesan via {orderChannel}
                </a>
                <p className="product-actions__hint">
                  {site.whatsapp
                    ? 'Pesan otomatis terisi nama menu saat WhatsApp terbuka.'
                    : 'Kami salin nama menu ke clipboard supaya kamu bisa langsung menempelkannya di DM Instagram.'}
                </p>
                <div className="product-actions__links">
                  <Link className="text-link" to="/katalog">
                    <ArrowLeft size={16} aria-hidden="true" />
                    Kembali ke katalog
                  </Link>
                  <Link className="text-link" to="/kontak">
                    Lihat kontak
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <p className="product-info__disclaimer">
                Harga dan ketersediaan dapat berubah. Pastikan pesanan dikonfirmasi lewat chat
                sebelum datang ke kedai.
              </p>
            </div>
          </div>
        </div>
      </article>

      {relatedProducts.length > 0 && (
        <section className="section related" aria-labelledby="related-title">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Masih dari {category?.label.toLowerCase()}</p>
                <h2 id="related-title">Pilihan lain yang bisa dicoba.</h2>
              </div>
              <Link className="text-link section-head__link" to={`/katalog?kategori=${product.category}`}>
                Lihat kategori ini
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="product-grid product-grid--related">
              {relatedProducts.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </>
  );
}
