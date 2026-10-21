import { Coffee, Cookie, UtensilsCrossed } from 'lucide-react';

const categoryIcons = {
  makanan: UtensilsCrossed,
  cemilan: Cookie,
  minuman: Coffee,
};

export default function ProductPlaceholder({ category, name, className = '' }) {
  const Icon = categoryIcons[category] ?? UtensilsCrossed;

  return (
    <div
      className={`product-placeholder ${className}`.trim()}
      role="img"
      aria-label={`Belum ada foto untuk ${name}`}
    >
      <Icon size={38} strokeWidth={1.3} aria-hidden="true" />
      <span>Foto menyusul</span>
    </div>
  );
}
