import { Link, useLocation } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Header with dark brown styling applied
export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/corporate-loan', label: 'Mortgages' },
    { path: '/credit-line', label: 'Refinance' },
    { path: '/about', label: 'About' },
    { path: '/application', label: 'Apply' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-white border-b-2 border-vibrant-yellow sticky top-0 z-50 shadow-md">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading text-3xl font-bold text-dark-brown">
              AVS <span className="text-vibrant-yellow">Finance</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-sm font-semibold transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-vibrant-yellow'
                    : 'text-dark-brown hover:text-vibrant-yellow'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-vibrant-yellow transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link 
            to="/application"
            className="hidden lg:inline-flex items-center justify-center px-8 py-2.5 bg-vibrant-yellow text-dark-brown font-paragraph text-sm font-bold rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg hover:shadow-vibrant-yellow/40"
          >
            Get Pre-Approved
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-dark-brown"
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

        {/* Mobile Navigation */}
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
                    : 'text-dark-brown hover:text-vibrant-yellow'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/application"
              className="mt-4 px-8 py-3 bg-vibrant-yellow text-dark-brown font-paragraph text-sm font-bold rounded-lg text-center hover:bg-vibrant-yellow-dark transition-all duration-300"
            >
              Get Pre-Approved
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
