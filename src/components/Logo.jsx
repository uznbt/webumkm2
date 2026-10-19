import { Link } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      className={`brand${light ? ' brand--light' : ''}`}
      aria-label="Kedai Ibu Kost, kembali ke beranda"
    >
      <span className="brand__mark" aria-hidden="true">
        <img
          src="/images/site/logo.webp"
          alt="Logo Kedai Ibu Kost"
          width="48"
          height="48"
          className="brand__logo-img"
        />
      </span>
      <span className="brand__words">
        <span className="brand__name">Kedai Ibu Kost</span>
        <span className="brand__place">Pasirjengkol · Karawang</span>
      </span>
    </Link>
  );
}
