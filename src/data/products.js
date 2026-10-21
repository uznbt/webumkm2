export const categories = [
  {
    id: 'makanan',
    label: 'Makanan',
    number: '01',
    kicker: 'Buat makan siang',
    description: 'Nasi hangat, lauk rumahan, dan menu khas yang bikin kenyang.',
    image: '/images/products/nasi-ayam-serundeng.webp',
  },
  {
    id: 'cemilan',
    label: 'Cemilan',
    number: '02',
    kicker: 'Buat ngemil',
    description: 'Gorengan, camilan pedas, dan pisang olahan untuk teman santai.',
    image: '/images/products/pisang-kembung-coklat-keju.webp',
  },
  {
    id: 'minuman',
    label: 'Minuman',
    number: '03',
    kicker: 'Buat melepas dahaga',
    description: 'Dari es teler sampai minuman kemasan dingin.',
  },
];

export const products = [
  {
    slug: 'nasi-pencok-telor-dadar',
    name: 'Nasi Pencok Telor Dadar',
    category: 'makanan',
    price: 10000,
    image: '/images/products/nasi-pencok-telor-dadar.webp',
    imageAlt: 'Nasi pencok telor dadar dengan dadar jagung, tahu, ikan asin, dan tumis buncis',
    short: 'Nasi hangat dengan pencok khas, telor dadar, dan sambal.',
    description:
      'Menu andalan Kedai Ibu Kost. Nasi hangat disajikan bersama pencok sayur khas Sunda, telor dadar, dan sambal. Rasa rumahan yang pas untuk makan siang.',
    badge: 'Menu khas',
    featured: true,
    notes: ['Disajikan sebagai satu porsi nasi.'],
  },
  {
    slug: 'nasi-pencok-telor-dadar-ikan-asin',
    name: 'Nasi Pencok Telor Dadar Ikan Asin',
    category: 'makanan',
    price: 13000,
    short: 'Nasi pencok, telor dadar, plus ikan asin yang gurih.',
    description:
      'Versi lebih lengkap dari nasi pencok favorit: nasi hangat, pencok, telor dadar, sambal, dan ikan asin gurih.',
    notes: ['Disajikan sebagai satu porsi nasi.'],
  },
  {
    slug: 'nasi-ayam-serundeng',
    name: 'Nasi Ayam Serundeng + Sambal + Lalap',
    category: 'makanan',
    price: 15000,
    image: '/images/products/nasi-ayam-serundeng.webp',
    imageAlt: 'Nasi ayam serundeng dengan sambal, tahu, tempe, dan lalapan',
    short: 'Ayam serundeng, sambal, dan lalap segar dalam satu piring.',
    description:
      'Nasi dengan ayam serundeng berbumbu, sambal, dan lalapan segar. Pilihan lengkap untuk makan siang yang mengenyangkan.',
    featured: true,
    notes: ['Disajikan sebagai satu porsi nasi.'],
  },
  {
    slug: 'seblak-prasmanan',
    name: 'Seblak Prasmanan',
    category: 'makanan',
    price: 1000,
    priceFrom: true,
    image: '/images/products/seblak-prasmanan.webp',
    imageAlt: 'Semangkuk seblak dengan kerupuk, tahu, sayur, dan irisan jeruk nipis',
    short: 'Racik topping seblak sendiri. Mulai dari Rp1.000 per topping.',
    description:
      'Ambil topping seblak sesuai selera, lalu biarkan dapur Ibu Kost yang meraciknya. Harga menyesuaikan topping yang dipilih, mulai dari Rp1.000.',
    spicy: true,
    badge: 'Pilih topping',
    featured: true,
    notes: ['Harga akhir mengikuti topping yang dipilih.', 'Toping mulai Rp1.000.'],
  },
  {
    slug: 'topping-lauk-nasi',
    name: 'Topping Lauk Nasi',
    category: 'makanan',
    price: 2000,
    priceFrom: true,
    short: 'Tambahan lauk untuk nasi. Mulai dari Rp2.000.',
    description:
      'Ingin porsi lebih lengkap? Tambahkan lauk pilihan ke nasi kamu. Harga lauk mulai dari Rp2.000 dan menyesuaikan jenis lauk.',
    notes: ['Harga akhir mengikuti jenis lauk yang dipilih.', 'Toping lauk mulai Rp2.000.'],
  },
  {
    slug: 'pisang-kembung-coklat',
    name: 'Pisang Kembung Coklat',
    category: 'cemilan',
    price: 7000,
    short: 'Pisang goreng manis dengan lapisan coklat.',
    description:
      'Pisang kembung goreng dengan lapisan coklat manis. Camilan hangat yang pas untuk sore atau teman ngobrol.',
  },
  {
    slug: 'pisang-kembung-keju',
    name: 'Pisang Kembung Keju',
    category: 'cemilan',
    price: 7000,
    short: 'Pisang kembung goreng dengan taburan keju gurih.',
    description:
      'Pisang kembung goreng dengan taburan keju gurih. Manis dan asin dalam satu gigitan.',
  },
  {
    slug: 'pisang-kembung-keju-susu',
    name: 'Pisang Kembung Keju Susu',
    category: 'cemilan',
    price: 10000,
    short: 'Perpaduan keju dan susu di atas pisang kembung goreng.',
    description:
      'Pisang kembung goreng dengan topping keju dan susu. Pilihan yang lebih creamy untuk pencinta camilan manis.',
  },
  {
    slug: 'pisang-kembung-coklat-keju',
    name: 'Pisang Kembung Coklat Keju',
    category: 'cemilan',
    price: 10000,
    image: '/images/products/pisang-kembung-coklat-keju.webp',
    imageAlt: 'Pisang kembung dengan topping coklat dan keju parut',
    short: 'Coklat manis dan keju gurih dalam satu porsi.',
    description:
      'Dua rasa favorit dalam satu porsi: pisang kembung goreng dengan topping coklat manis dan keju gurih.',
    featured: true,
    badge: 'Dua rasa',
  },
  {
    slug: 'pisang-kembung-tiramisu',
    name: 'Pisang Kembung Tiramisu',
    category: 'cemilan',
    price: 7000,
    image: '/images/products/pisang-kembung-tiramisu.webp',
    imageAlt: 'Pisang kembung dengan topping tiramisu dan matcha',
    short: 'Pisang kembung dengan rasa tiramisu yang creamy.',
    description:
      'Pisang kembung goreng dengan rasa tiramisu. Camilan manis dengan aroma khas untuk variasi waktu santai.',
  },
  {
    slug: 'risoles-mentai',
    name: 'Risoles Mentai',
    category: 'cemilan',
    price: 2500,
    image: '/images/products/risoles-mentai.webp',
    imageAlt: 'Dua risoles mentai goreng dengan lapisan tepung renyah',
    short: 'Risoles goreng dengan saus mentai yang creamy.',
    description:
      'Risoles renyah dengan saus mentai creamy. Camilan gurih berukuran pas untuk satu gigitan.',
    notes: ['Harga sesuai menu.'],
  },
  {
    slug: 'cireng-isi',
    name: 'Cireng Isi',
    category: 'cemilan',
    price: 1000,
    short: 'Cireng kenyal dengan isian gurih.',
    description:
      'Cireng kenyal dengan isian gurih, cocok disantap bersama saus favorit.',
  },
  {
    slug: 'cireng-chili-oil',
    name: 'Cireng Chili Oil',
    category: 'cemilan',
    price: 10000,
    short: 'Cireng renyah dengan siraman chili oil pedas.',
    description:
      'Cireng renyah dengan siraman chili oil pedas. Untuk kamu yang suka camilan gurih dengan sentuhan pedas.',
    spicy: true,
  },
  {
    slug: 'cireng-banjur-kuah-seblak',
    name: 'Cireng Banjur Kuah Seblak',
    category: 'cemilan',
    price: 10000,
    short: 'Cireng berbalut dengan kuah seblak yang pedas.',
    description:
      'Cireng goreng yang dibanjur kuah seblak. Kenyal, hangat, dan pedas dalam satu mangkuk.',
    spicy: true,
  },
  {
    slug: 'tahu-jeletot',
    name: 'Tahu Jeletot',
    category: 'cemilan',
    price: 2500,
    short: 'Tahu isi cabai yang pedasnya bikin ketagihan.',
    description:
      'Tahu goreng dengan isian cabai yang pedas. Camilan kecil dengan rasa yang berani.',
    spicy: true,
    notes: ['Harga sesuai menu.'],
  },
  {
    slug: 'cilok-bumbu-seblak',
    name: 'Cilok Bumbu Seblak',
    category: 'cemilan',
    price: 10000,
    short: 'Cilok kenyal dengan bumbu seblak khas.',
    description:
      'Cilok kenyal yang disajikan dengan bumbu seblak. Camilan gurih dan sedikit pedas untuk teman santai.',
    spicy: true,
    badge: 'Bumbu seblak',
  },
  {
    slug: 'kentang',
    name: 'Kentang',
    category: 'cemilan',
    price: 10000,
    short: 'Kentang goreng renyah untuk teman ngobrol.',
    description:
      'Kentang goreng renyah dengan rasa gurih. Simpel, hangat, dan enak buat dinikmati bersama.',
  },
  {
    slug: 'ceker-mercon',
    name: 'Ceker Mercon',
    category: 'cemilan',
    price: 10000,
    short: 'Ceker ayam dengan bumbu pedas mercon.',
    description:
      'Ceker ayam berbumbu pedas. Nikmati selagi hangat untuk sensasi pedas yang nagih.',
    spicy: true,
  },
  {
    slug: 'otak-otak-mercon',
    name: 'Otak-Otak Mercon',
    category: 'cemilan',
    price: 10000,
    short: 'Otak-otak dengan sambal mercon yang pedas.',
    description:
      'Otak-otak yang disajikan dengan sambal pedas. Camilan gurih dengan rasa pedas yang kuat.',
    spicy: true,
  },
  {
    slug: 'es-teler',
    name: 'Es Teler',
    category: 'minuman',
    price: 10000,
    short: 'Es serut dengan buah, kelapa, dan susu.',
    description:
      'Es teler dingin dengan aneka topping buah, kelapa, dan susu. Pilihan segar untuk cuaca panas.',
  },
  {
    slug: 'es-pisjo',
    name: 'Es Pisjo',
    category: 'minuman',
    price: 10000,
    short: 'Es pisang ijo yang manis, dingin, dan menyegarkan.',
    description:
      'Es pisang ijo dengan kuah manis dan es serut. Hidangan penutup sekaligus minuman yang menyegarkan.',
  },
  {
    slug: 'es-teh-manis',
    name: 'Es Teh Manis',
    category: 'minuman',
    price: 6000,
    short: 'Teh dingin dengan gula. Simpel dan selalu pas.',
    description:
      'Teh seduh dingin dengan gula. Teman makan yang sederhana dan tidak pernah salah.',
  },
  {
    slug: 'tea-jus-jas-jus',
    name: 'Tea Jus / Jas Jus',
    category: 'minuman',
    price: 5000,
    short: 'Minuman jus teh segar untuk melepas dahaga.',
    description:
      'Pilihan minuman jus teh yang segar. Cocok diminum dingin bersama menu makan atau camilan.',
  },
  {
    slug: 'gooday-freeze',
    name: 'Gooday Freeze',
    category: 'minuman',
    price: 2000,
    short: 'Minuman dingin manis, teman santai di tanggal tua.',
    description:
      'Gooday Freeze disajikan dingin. Pilihan minuman manis dengan harga ramah untuk menemani waktu santai.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
  {
    slug: 'max-tea',
    name: 'Max Tea',
    category: 'minuman',
    price: 5000,
    short: 'Teh instan dengan rasa manis dan creamy.',
    description:
      'Max Tea dengan rasa teh yang manis dan creamy. Disajikan sesuai ketersediaan di kedai.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
  {
    slug: 'drink-beng-beng',
    name: 'Drink Beng-Beng',
    category: 'minuman',
    price: 5000,
    short: 'Minuman coklat manis dan creamy.',
    description:
      'Drink Beng-Beng dengan rasa coklat manis dan creamy. Pilihan buat pencinta minuman coklat.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
  {
    slug: 'chocolatos',
    name: 'Chocolatos',
    category: 'minuman',
    price: 5000,
    short: 'Minuman coklat Chocolatos yang nikmat.',
    description:
      'Minuman coklat Chocolatos. Bisa dinikmati hangat atau dingin sesuai selera.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
  {
    slug: 'kopi-seduh',
    name: 'Kopi Seduh',
    category: 'minuman',
    price: 5000,
    short: 'Kopi seduh hangat dengan aroma khas.',
    description:
      'Kopi seduh hangat. Sederhana, pekat, dan pas untuk menemani makan atau mengerjakan tugas.',
  },
  {
    slug: 'air-mineral',
    name: 'Air Mineral',
    category: 'minuman',
    price: 4000,
    short: 'Air mineral botol untuk teman makan.',
    description:
      'Air mineral dalam kemasan botol. Pilihan netral untuk menemani makan di kedai.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
  {
    slug: 'teh-pucuk',
    name: 'Teh Pucuk',
    category: 'minuman',
    price: 5000,
    short: 'Teh Pucuk Harum dingin dalam kemasan botol.',
    description:
      'Teh Pucuk Harum dingin dalam kemasan botol. Pilihan praktis untuk melepas dahaga.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
  {
    slug: 'floridina',
    name: 'Floridina',
    category: 'minuman',
    price: 4000,
    short: 'Minuman jeruk kemasan yang segar.',
    description:
      'Minuman rasa jeruk dalam kemasan. Segar dan ringan untuk diminum dingin.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
  {
    slug: 'pocari-sweat',
    name: 'Pocari Sweat',
    category: 'minuman',
    price: 8000,
    short: 'Minuman isotonik untuk mengganti cairan.',
    description:
      'Pocari Sweat dalam kemasan. Minuman isotonik untuk membantu mengganti cairan tubuh.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
  {
    slug: 'adem-sari-botol',
    name: 'Adem Sari Botol',
    category: 'minuman',
    price: 8000,
    short: 'Minuman herbal penyegar dalam kemasan botol.',
    description:
      'Adem Sari botol, minuman herbal penyegar. Disajikan dingin sesuai ketersediaan di kedai.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
  {
    slug: 'milku',
    name: 'Milku',
    category: 'minuman',
    price: 4000,
    short: 'Minuman susu Milku yang creamy.',
    description:
      'Milku, minuman susu dalam kemasan. Manis dan creamy untuk menemani camilan.',
    notes: ['Produk kemasan. Stok mengikuti ketersediaan di kedai.'],
  },
];

export const getCategory = (id) => categories.find((category) => category.id === id);

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug);

export const countByCategory = (categoryId) =>
  products.filter((product) => product.category === categoryId).length;

export const featuredProducts = products.filter((product) => product.featured);

export const getRelatedProducts = (product, limit = 3) =>
  products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, limit);
