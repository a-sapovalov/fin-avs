import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatEuropeanNumber, formatEuropeanPercent } from '@/lib/format-number';

interface PriceItem {
  title: string;
  price: string;
}

interface PriceSection {
  name: string;
  items: PriceItem[];
}

const priceSections: PriceSection[] = [
  {
    name: 'agreement fees',
    items: [
      { title: 'entry into contract fee', price: '1% of the credit amount, minimum €200' },
      { title: 'credit linecommitment fee', price: '2% per annum on the undrawn amount' },
    ],
  },
  {
    name: 'changes to the agreement',
    items: [
      { title: 'increase of the credit amount', price: '1% of the additional credit amount, minimum €100' },
      { title: 'change of payment date', price: '€20' },
      { title: 'payment holiday or restructuring due to payment difficulties', price: '0,1% of credit balance, minimum €100' },
      { title: 'partial or full early repayment', price: 'free of charge if notice is given at least 3 months in advance; otherwise, interest calculated on the credit amount repaid early for the portion of the 3-month notice period not observed' },
      { title: 'early termination of a credit line or reduction of a credit line limit', price: 'free of charge if notice is given at least 3 months in advance; otherwise, a commitment fee will be charged on the reduced amount or, in the case of early termination, on the undrawn credit line balance, for the portion of the 3-month notice period not observed' },
      { title: 'other amendments to the agreement (for example, change of term or replacement of collateral)', price: '1% of the credit balance, minimum €100' },
    ],
  },
  {
    name: 'other services',
    items: [
      { title: 'notarial transactions - new mortgage', price: 'free of charge' },
      { title: 'notarial transactions - other reasons', price: '€100' },
    ],
  },
  {
    name: 'debt collection costs',
    items: [
      { title: 'reminder letter or debt notice', price: 'first free of charge, from the second onwards €10' },
      { title: 'notice of termination', price: '€20' },
      { title: 'termination letter', price: '€40' },
    ],
  },
  {
    name: 'additional services',
    items: [
      { title: 'confirmation letter', price: '€10' },
      { title: 'confirmation letter for an auditor', price: '€20' },
      { title: 'special information request', price: '€30 per hour, minimum €30' },
    ],
  },
  {
    name: 'default interest',
    items: [
      { title: 'rate of penalty for late payment', price: '0,1% per day (36,5% per annum)' },
    ],
  },
];

export default function PriceListPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full max-w-[120rem] mx-auto px-6 md:px-12 py-20 bg-secondary">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="font-heading text-6xl md:text-7xl text-dark-brown mb-4">
            price list
          </h1>
          <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl">transparent pricing for all our financial services.</p>
        </div>

        {/* Effective Date Notice */}
        <div className="mb-12 py-4 px-0 border-b border-dark-brown-light">
          <p className="font-paragraph text-sm text-dark-brown-light">
            effective from 27 march 2026
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {priceSections.map((section, idx) => (
            <div key={idx} className="bg-vibrant-yellow-light rounded-lg p-8 border-l-4 border-dark-brown">
              <h2 className="font-heading text-2xl text-dark-brown mb-6">
                {section.name}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="pb-4 border-b border-dark-brown-light last:border-b-0">
                    <h3 className="font-paragraph font-bold text-sm text-dark-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-sm text-dark-brown-light">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* VAT Notice */}
        <div className="py-4 px-0 border-t border-dark-brown-light">
          <p className="font-paragraph text-sm text-dark-brown-light">
            <span className="font-heading text-dark-brown">note:</span> value added tax (vat) may be added to service fees in accordance with applicable law.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
