import { Link, useLocation } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/corporate-loan', label: 'Corporate Loans' },
    { path: '/credit-line', label: 'Credit Lines' },
    { path: '/about', label: 'About' },
    { path: '/application', label: 'Apply Now' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Image 
              src="https://static.wixstatic.com/media/43558d_1f58c98c522646608e11c99aed532b90~mv2.png"
              alt="AVS Finance"
              width={160}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-sm font-semibold transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link 
            to="/application"
            className="hidden lg:inline-flex items-center justify-center px-8 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-paragraph text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary"
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
                    ? 'text-primary font-semibold'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/application"
              className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-paragraph text-sm font-semibold rounded-full text-center"
            >
              Get Started
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
