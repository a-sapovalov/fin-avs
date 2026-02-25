import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-heading text-2xl mb-6">AVS Finance</h3>
            <p className="font-paragraph text-base text-primary-foreground/90 leading-relaxed mb-6">
              Empowering Estonian businesses with trusted corporate loans and flexible credit lines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 md:col-span-4">
            <h4 className="font-heading text-xl mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="font-paragraph text-base text-primary-foreground/90 hover:text-accent-gold transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/corporate-loan" 
                className="font-paragraph text-base text-primary-foreground/90 hover:text-accent-gold transition-colors duration-300"
              >
                Corporate Loans
              </Link>
              <Link 
                to="/credit-line" 
                className="font-paragraph text-base text-primary-foreground/90 hover:text-accent-gold transition-colors duration-300"
              >
                Credit Lines
              </Link>
              <Link 
                to="/about" 
                className="font-paragraph text-base text-primary-foreground/90 hover:text-accent-gold transition-colors duration-300"
              >
                About Us
              </Link>
              <Link 
                to="/application" 
                className="font-paragraph text-base text-primary-foreground/90 hover:text-accent-gold transition-colors duration-300"
              >
                Apply Now
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="col-span-12 md:col-span-4">
            <h4 className="font-heading text-xl mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent-gold mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@avsfinance.ee" 
                  className="font-paragraph text-base text-primary-foreground/90 hover:text-accent-gold transition-colors duration-300"
                >
                  info@avsfinance.ee
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent-gold mt-1 flex-shrink-0" />
                <a 
                  href="tel:+3726234567" 
                  className="font-paragraph text-base text-primary-foreground/90 hover:text-accent-gold transition-colors duration-300"
                >
                  +372 623 4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-gold mt-1 flex-shrink-0" />
                <span className="font-paragraph text-base text-primary-foreground/90">
                  Tallinn, Estonia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} AVS Finance. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/privacy" 
                className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
