import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CreditsPage from './pages/CreditsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Lewati ke konten
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex="-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/katalog" element={<CatalogPage />} />
          <Route path="/produk/:slug" element={<ProductPage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/kredit-foto" element={<CreditsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
