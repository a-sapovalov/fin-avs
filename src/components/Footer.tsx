import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">AVS Finance</h3>
            <p className="font-paragraph text-base text-gray-300 leading-relaxed mb-6">
              Empowering Estonian businesses with trusted corporate loans and flexible credit lines.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-white">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/corporate-loan" 
                className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Corporate Loans
              </Link>
              <Link 
                to="/credit-line" 
                className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Credit Lines
              </Link>
              <Link 
                to="/about" 
                className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link 
                to="/application" 
                className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Apply Now
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-white">Resources</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Blog
              </a>
              <a href="#" className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300">
                FAQ
              </a>
              <a href="#" className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Guides
              </a>
              <a href="#" className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Support
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-white">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@avsfinance.ee" 
                  className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  info@avsfinance.ee
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <a 
                  href="tel:+3726234567" 
                  className="font-paragraph text-base text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  +372 623 4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="font-paragraph text-base text-gray-300">
                  Tallinn, Estonia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-gray-400">
              © {new Date().getFullYear()} AVS Finance. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="font-paragraph text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="font-paragraph text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
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
