import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore, type Language } from '@/lib/language-store';

// Header with dark brown styling applied
export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();

  const navLinks = [
    { path: '/', label: 'home' },
    { path: '/corporate-loan', label: 'loans' },
    { path: '/credit-line', label: 'credit lines' },
    { path: '/about', label: 'leases' },
    { path: '/about', label: 'contacts' },
  ];

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'eng' },
    { code: 'et', name: 'est' },
    { code: 'ru', name: 'rus' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-dark-brown border-b-2 border-dark-brown sticky top-0 z-50 shadow-md">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-4 bg-dark-brown">
        <div className="flex items-center justify-between bg-dark-brown">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
            <h1 className="font-heading text-xl font-bold text-vibrant-yellow">
              avs <span className="text-vibrant-yellow">finance</span>
            </h1>
          </Link>

          {/* Desktop Navigation - Right aligned with buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-paragraph text-sm font-semibold transition-all duration-300 relative group ${
                    isActive(link.path)
                      ? 'text-vibrant-yellow'
                      : 'text-vibrant-yellow hover:text-vibrant-yellow-light'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-vibrant-yellow transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-vibrant-yellow hover:text-vibrant-yellow-light transition-colors duration-300"
                aria-label="Change language"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase">{language}</span>
              </button>

              {languageMenuOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-40 bg-vibrant-yellow border-2 border-dark-brown rounded-lg shadow-lg z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 font-paragraph text-sm transition-colors duration-300 ${
                        language === lang.code
                          ? 'bg-vibrant-yellow text-dark-brown font-semibold'
                          : 'text-dark-brown hover:bg-vibrant-yellow-light'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* CTA Button */}
            <Link 
              to="/application"
              className="inline-flex items-center justify-center px-8 py-2.5 font-paragraph text-sm font-bold rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg hover:shadow-vibrant-yellow/40 bg-vibrant-yellow text-dark-brown"
            >
              apply
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-vibrant-yellow"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

            {mobileMenuOpen && (
          <motion.nav 
            className="lg:hidden mt-6 pb-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-paragraph text-base py-2 transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-vibrant-yellow font-semibold'
                    : 'text-vibrant-yellow hover:text-vibrant-yellow-light'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="mt-4 pt-4 border-t border-vibrant-yellow">
              <div className="flex items-center gap-2 mb-3 text-vibrant-yellow">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-semibold">Language</span>
              </div>
              <div className="flex flex-col gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-2 font-paragraph text-sm rounded transition-colors duration-300 ${
                      language === lang.code
                        ? 'bg-vibrant-yellow text-dark-brown font-semibold'
                        : 'text-vibrant-yellow hover:bg-dark-brown-light'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            <Link 
              to="/application"
              className="mt-4 px-8 py-3 bg-vibrant-yellow text-dark-brown font-paragraph text-sm font-bold rounded-lg text-center hover:bg-vibrant-yellow-dark transition-all duration-300"
            >
              apply
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
