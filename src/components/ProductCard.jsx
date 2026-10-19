import { Link } from 'react-router-dom';
import { ArrowUpRight, Flame } from 'lucide-react';
import { getCategory } from '../data/products.js';
import { formatRupiah } from '../data/site.js';

export default function ProductCard({ product, eager = false, className = '' }) {
  const category = getCategory(product.category);

  return (
    <article className={`product-card ${className}`.trim()}>
      <Link className="product-card__link" to={`/produk/${product.slug}`}>
        <div className="product-card__media">
          <img
            src={product.image}
            alt={product.imageAlt}
            width="1200"
            height="900"
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
          {product.badge && <span className="product-card__badge">{product.badge}</span>}
          {product.spicy && (
            <span className="product-card__spicy">
              <Flame size={13} aria-hidden="true" />
              Pedas
            </span>
          )}
        </div>

        <div className="product-card__body">
          <p className="product-card__category">{category?.label}</p>
          <h3>{product.name}</h3>
          <p className="product-card__description">{product.short}</p>

          <div className="product-card__footer">
            <p className="product-card__price">
              {product.priceFrom && <span>Mulai</span>}
              <strong>{formatRupiah(product.price)}</strong>
            </p>
            <span className="product-card__cta">
              Lihat detail
              <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
