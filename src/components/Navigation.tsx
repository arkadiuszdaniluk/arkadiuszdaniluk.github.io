import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'pl' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 px-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            ITPROG.EU
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-light rounded text-sm font-semibold hover:bg-gray-200 transition"
            >
              {i18n.language === 'en' ? 'PL' : 'EN'}
            </button>
            <button
              onClick={toggleMenu}
              className="text-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">
              {t('navigation.home')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition">
              {t('navigation.about')}
            </Link>
            {/* <Link to="/portfolio" className="text-gray-700 hover:text-primary transition">
              {t('navigation.portfolio')}
            </Link> */}
            <Link to="/services" className="text-gray-700 hover:text-primary transition">
              {t('navigation.services')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition">
              {t('navigation.contact')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              {i18n.language === 'en' ? 'PL' : 'EN'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 px-4 border-t">
            <Link to="/" className="block py-2 text-gray-700 hover:text-primary transition">
              {t('navigation.home')}
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-primary transition">
              {t('navigation.about')}
            </Link>
            <Link to="/portfolio" className="block py-2 text-gray-700 hover:text-primary transition">
              {t('navigation.portfolio')}
            </Link>
            <Link to="/services" className="block py-2 text-gray-700 hover:text-primary transition">
              {t('navigation.services')}
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary transition">
              {t('navigation.contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
