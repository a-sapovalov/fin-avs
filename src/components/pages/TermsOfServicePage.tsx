import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, FileText } from 'lucide-react';

interface PDFDocument {
  id: string;
  title: string;
  description: string;
  fileName: string;
  url: string;
}

const documents: PDFDocument[] = [
  {
    id: 'website-terms',
    title: 'Website Terms of Use',
    description: 'Terms and conditions governing the use of the AVS Finance website and services.',
    fileName: 'AVS-Finance-Website-Terms-of-Use.pdf',
    url: '#'
  },
  {
    id: 'price-list',
    title: 'Price List',
    description: 'Complete pricing information for all AVS Finance products and services.',
    fileName: 'AVS-Finance-Price-List.pdf',
    url: '#'
  },
  {
    id: 'financing-terms',
    title: 'General Terms and Conditions of Financing for Legal Persons',
    description: 'Comprehensive terms and conditions applicable to financing agreements for legal entities.',
    fileName: 'AVS-Finance-Financing-Terms-Legal-Persons.pdf',
    url: '#'
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full px-6 md:px-12 py-20 bg-secondary">
        <div className="max-w-[120rem] mx-auto">
          {/* Hero Section */}
          <div className="mb-16 flex flex-col items-center justify-center text-center">
            <h1 className="font-heading text-6xl md:text-7xl text-dark-brown mb-4">
              terms of service
            </h1>
            <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl">download and review our legal documents.</p>
          </div>
          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {documents.map(doc => (
              <div
                key={doc.id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl text-dark-brown mb-2">
                      {doc.title}
                    </h3>
                  </div>
                  <FileText className="h-8 w-8 text-dark-brown flex-shrink-0 ml-3" />
                </div>

                <p className="font-paragraph text-base text-dark-brown-light mb-6 flex-grow">
                  {doc.description}
                </p>

                <a
                  href={doc.url}
                  download={doc.fileName}
                  className="inline-flex items-center justify-center px-6 py-3 bg-dark-brown text-vibrant-yellow font-paragraph font-bold text-base rounded-lg hover:bg-dark-brown-light transition-all duration-300 w-full"
                >
                  <Download className="h-5 w-5 mr-2" />
                  download pdf
                </a>
              </div>
            ))}
          </div>
          {/* Info Section */}

        </div>
      </main>
      {/* Contact Section */}
      <section className="w-full bg-dark-brown py-24 md:py-32 overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-vibrant-yellow mb-8">
              questions about our terms?
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-vibrant-yellow-light mb-12 max-w-3xl mx-auto leading-relaxed">
              our customer support team is here to help. reach out to us with any questions or concerns.
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center justify-center px-10 py-4 bg-vibrant-yellow text-dark-brown font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300"
            >
              contact us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
