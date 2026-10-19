const rawWhatsApp = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/[^\d]/g, '');

export const site = {
  name: 'Kedai Ibu Kost',
  owner: 'Ibu Ike Haryani',
  founded: 2021,
  physicalSince: 2024,
  tagline: 'Masakan rumahan dari Pasirjengkol',
  description:
    'Kedai makan rumahan di Pasirjengkol, Majalaya, Karawang. Menu terjangkau untuk anak kos, mahasiswa, pekerja, dan warga sekitar.',
  address: 'Pasirjengkol, Majalaya, Karawang, Jawa Barat',
  shortAddress: 'Pasirjengkol, Karawang',
  priceRange: 'Rp2.500–Rp15.000',
  instagram: 'https://www.instagram.com/kedai.ibukost',
  instagramHandle: '@kedai.ibukost',
  facebook: 'https://www.facebook.com/profile.php?id=61595756510491',
  facebookHandle: 'Kedai Ibu Kost',
  maps: 'https://maps.app.goo.gl/bWAMjk8BjK8WgRwX7',
  mapsPlace: 'Kedai Ibu Kost (Seblak Prasmanan)',
  mapsEmbed: 'https://www.google.com/maps?q=-6.2957545,107.3400862&z=17&hl=id&output=embed',
  whatsapp: rawWhatsApp,
  email: (import.meta.env.VITE_CONTACT_EMAIL || '').trim(),
};

export const formatRupiah = (value) => `Rp${new Intl.NumberFormat('id-ID').format(value)}`;

export const buildOrderMessage = (product) => {
  if (!product) {
    return `Halo ${site.name}, saya ingin bertanya tentang menu dan pemesanan.`;
  }

  const priceLabel = product.priceFrom
    ? `mulai ${formatRupiah(product.price)}`
    : formatRupiah(product.price);

  return `Halo ${site.name}, saya ingin pesan ${product.name} (${priceLabel}). Apakah menunya tersedia?`;
};

export const getOrderUrl = (product) => {
  const message = buildOrderMessage(product);

  if (site.whatsapp) {
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  return site.instagram;
};

export const orderChannel = site.whatsapp ? 'WhatsApp' : 'Instagram';
