import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { InstagramIcon } from './Icons.jsx';
import { getOrderUrl, orderChannel, site } from '../data/site.js';

const navigation = [
  { label: 'Beranda', to: '/' },
  { label: 'Katalog', to: '/katalog' },
  { label: 'Tentang Kami', to: '/tentang' },
  { label: 'Kontak', to: '/kontak' },
];

function isActive(pathname, to) {
  if (to === '/') return pathname === '/';
  if (to === '/katalog') return pathname.startsWith('/katalog') || pathname.startsWith('/produk');
  return pathname.startsWith(to);
}

export default function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <Logo />

          <nav className="nav-desktop" aria-label="Navigasi utama">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link${isActive(pathname, item.to) ? ' is-active' : ''}`}
                aria-current={isActive(pathname, item.to) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              className="button button--primary button--small header-cta"
              href={getOrderUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <span>Chat via {orderChannel}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              className="menu-toggle"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu" id="mobile-menu">
            <div className="container">
              <nav className="mobile-menu__nav" aria-label="Navigasi seluler">
                {navigation.map((item, index) => {
                  const active = isActive(pathname, item.to);

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`mobile-menu__link${active ? ' is-active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mobile-menu__index" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="mobile-menu__label">{item.label}</span>
                      {active && <span className="mobile-menu__current">Halaman ini</span>}
                    </Link>
                  );
                })}
              </nav>
              <div className="mobile-menu__footer">
                <p className="mobile-menu__address">{site.shortAddress}</p>
                <a
                  className="button button--primary button--small"
                  href={getOrderUrl()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Pesan via {orderChannel}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {isOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
