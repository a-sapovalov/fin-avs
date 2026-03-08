import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-dark-brown text-vibrant-yellow">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl mb-4">
              AVS <span className="text-vibrant-yellow">Finance</span>
            </h3>
            <p className="font-paragraph text-base text-vibrant-yellow-light leading-relaxed mb-6">
              Your trusted partner for business financing solutions in Estonia.
            </p>
            <p className="font-paragraph text-sm text-vibrant-yellow-light leading-relaxed mb-4">
              AVS Finance operates under financial institution licence FFA000503 granted by the Financial Intelligence Unit of Estonia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-vibrant-yellow hover:text-vibrant-yellow-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-vibrant-yellow hover:text-vibrant-yellow-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-vibrant-yellow">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/corporate-loan" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                Business Loans
              </Link>
              <Link 
                to="/credit-line" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                Credit Lines
              </Link>
              <Link 
                to="/about" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                About Us
              </Link>
              <Link 
                to="/application" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                Apply Now
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-vibrant-yellow">Resources</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300">
                Blog
              </a>
              <a href="#" className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300">
                FAQ
              </a>
              <a href="#" className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300">
                Guides
              </a>
              <a href="#" className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300">
                Support
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-vibrant-yellow">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-vibrant-yellow mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@avsfinance.ee" 
                  className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
                >
                  info@avsfinance.ee
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-vibrant-yellow mt-1 flex-shrink-0" />
                <a 
                  href="tel:+3726234567" 
                  className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
                >
                  +372 623 4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-vibrant-yellow mt-1 flex-shrink-0" />
                <span className="font-paragraph text-base text-vibrant-yellow-light">
                  Tallinn, Estonia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-brown-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-vibrant-yellow-light">
              © {new Date().getFullYear()} AVS Finance. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="font-paragraph text-sm text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="font-paragraph text-sm text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
