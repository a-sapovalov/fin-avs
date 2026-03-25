import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-dark-brown text-vibrant-yellow">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="font-heading mb-4 text-xl">
              avs <span className="text-vibrant-yellow">finance</span>
            </h3>
            <p className="font-paragraph text-base text-vibrant-yellow-light leading-relaxed mb-6">your partner for financing solutions.</p>
            <p className="font-paragraph text-vibrant-yellow-light mb-4 text-base">avs finance oü operates under financial institution licence ffa000503 granted by the financial intelligence unit of estonia.</p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading mb-6 text-vibrant-yellow text-xl">services</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/loans" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                loans
              </Link>
              <Link 
                to="/credit-line" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                credit lines
              </Link>
              <Link 
                to="/leases" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                leases
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading mb-6 text-vibrant-yellow text-xl">resources</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/price-list" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                price list
              </Link>
              <Link 
                to="/faq" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                faq
              </Link>
              <Link 
                to="/application" 
                className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                apply for financing
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading mb-6 text-vibrant-yellow text-xl">contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-vibrant-yellow mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@avs.ee" 
                  className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
                >
                  info@avs.ee
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-vibrant-yellow mt-1 flex-shrink-0" />
                <a 
                  href="tel:+37253066545" 
                  className="font-paragraph text-base text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
                >
                  +372 5306 6545
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-vibrant-yellow mt-1 flex-shrink-0" />
                <span className="font-paragraph text-base text-vibrant-yellow-light">
                  kentmanni tn 6, 10116 tallinn
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-brown-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-vibrant-yellow-light">
              © {new Date().getFullYear()} avs finance. all rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="font-paragraph text-sm text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                privacy policy
              </a>
              <a 
                href="#" 
                className="font-paragraph text-sm text-vibrant-yellow-light hover:text-vibrant-yellow transition-colors duration-300"
              >
                terms of service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
