import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { categories, products } from '../data/products.js';
import { site } from '../data/site.js';

const sortOptions = [
  { value: 'default', label: 'Sesuai menu' },
  { value: 'harga-rendah', label: 'Harga terendah' },
  { value: 'harga-tinggi', label: 'Harga tertinggi' },
  { value: 'nama', label: 'Nama A–Z' },
];

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export default function CatalogPage() {
  usePageMeta(
    'Katalog Menu',
    'Cari dan filter menu Kedai Ibu Kost: makanan, cemilan, dan minuman dengan harga Rp1.000–Rp15.000.',
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';
  const rawCategory = searchParams.get('kategori') ?? 'semua';
  const category = categories.some((item) => item.id === rawCategory) ? rawCategory : 'semua';
  const rawSort = searchParams.get('urut') ?? 'default';
  const sort = sortOptions.some((option) => option.value === rawSort) ? rawSort : 'default';

  const updateParams = (updates) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
    });
    setSearchParams(next, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);

    let result = products.filter((product) => {
      const matchCategory = category === 'semua' || product.category === category;
      if (!matchCategory) return false;

      if (terms.length === 0) return true;

      const haystack = normalize(`${product.name} ${product.short} ${product.description}`);
      return terms.every((term) => haystack.includes(term));
    });

    if (sort === 'harga-rendah') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === 'harga-tinggi') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === 'nama') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name, 'id'));
    }

    return result;
  }, [category, query, sort]);

  const activeFilterLabel =
    category === 'semua' ? 'semua kategori' : `kategori ${categories.find((item) => item.id === category)?.label.toLowerCase()}`;

  return (
    <>
      <div className="page-hero page-hero--catalog">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Katalog</span>
          </nav>

          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Menu lengkap</p>
              <h1>Katalog menu</h1>
              <p className="page-hero__lead">
                Cari berdasarkan nama, saring berdasarkan kategori, atau urutkan sesuai harga.
                Semua menu di halaman ini tersedia di kedai selama stok masih ada.
              </p>
            </div>

            <div className="catalog-total">
              <span className="catalog-total__number" aria-hidden="true">
                {products.length}
              </span>
              <p>
                pilihan menu
                <br />
                dari satu dapur
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="catalog-main" aria-labelledby="catalog-list-title">
        <div className="container">
          <div className="catalog-tools">
            <div className="catalog-tools__row">
              <div className="search-field">
                <Search size={19} aria-hidden="true" />
                <label className="sr-only" htmlFor="menu-search">
                  Cari menu
                </label>
                <input
                  id="menu-search"
                  type="search"
                  value={query}
                  placeholder="Cari nasi, seblak, es teler..."
                  onChange={(event) => updateParams({ q: event.target.value })}
                />
                {query && (
                  <button
                    type="button"
                    className="search-field__clear"
                    onClick={() => updateParams({ q: '' })}
                    aria-label="Hapus pencarian"
                  >
                    <X size={17} aria-hidden="true" />
                  </button>
                )}
              </div>

              <div className="select-field">
                <SlidersHorizontal size={17} aria-hidden="true" />
                <label className="sr-only" htmlFor="menu-sort">
                  Urutkan menu
                </label>
                <select
                  id="menu-sort"
                  value={sort}
                  onChange={(event) =>
                    updateParams({ urut: event.target.value === 'default' ? '' : event.target.value })
                  }
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} aria-hidden="true" />
              </div>
            </div>

            <div className="catalog-tools__row catalog-tools__row--filters">
              <div className="filter-chips" role="group" aria-label="Filter kategori menu">
                <button
                  type="button"
                  className={`chip${category === 'semua' ? ' is-active' : ''}`}
                  aria-pressed={category === 'semua'}
                  onClick={() => updateParams({ kategori: '' })}
                >
                  Semua
                  <span>{products.length}</span>
                </button>
                {categories.map((item) => {
                  const count = products.filter((product) => product.category === item.id).length;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      className={`chip${category === item.id ? ' is-active' : ''}`}
                      aria-pressed={category === item.id}
                      onClick={() => updateParams({ kategori: item.id })}
                    >
                      {item.label}
                      <span>{count}</span>
                    </button>
                  );
                })}
              </div>

              <p className="catalog-count" aria-live="polite">
                {filteredProducts.length} menu ditemukan
                {query.trim() && ` untuk “${query.trim()}”`}
                {category !== 'semua' && ` di ${activeFilterLabel}`}
              </p>
            </div>
          </div>

          <h2 className="sr-only" id="catalog-list-title">
            Daftar menu
          </h2>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-state__icon" aria-hidden="true">
                <Search size={26} />
              </span>
              <h2>Menu tidak ditemukan.</h2>
              <p>
                Coba kata kunci lain, ubah kategori, atau lihat kembali semua menu yang tersedia.
              </p>
              <button
                type="button"
                className="button button--primary"
                onClick={() => setSearchParams(new URLSearchParams(), { replace: true })}
              >
                Lihat semua menu
              </button>
            </div>
          )}

          <p className="illustration-note illustration-note--catalog">
            Foto menu yang tampil adalah foto asli kedai; sebagian menu belum memiliki foto. Harga
            dapat berubah sewaktu-waktu dan ketersediaan dikonfirmasi lewat{' '}
            {site.whatsapp ? 'WhatsApp' : 'Instagram'}.
          </p>
        </div>
      </section>
    </>
  );
}
