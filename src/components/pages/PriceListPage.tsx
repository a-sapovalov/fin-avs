import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatEuropeanNumber, formatEuropeanPercent } from '@/lib/format-number';

export default function PriceListPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 w-full max-w-[120rem] mx-auto px-6 md:px-12 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="font-heading text-6xl md:text-7xl text-dark-brown mb-4">
            price list
          </h1>
          <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl">
            transparent pricing for all our financial services. our rates are competitive and designed to meet your needs.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="space-y-16">
          {/* Loans Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              loans
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-dark-brown">
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">loan type</th>
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">interest rate</th>
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">term</th>
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">min amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dark-brown-light hover:bg-white transition-colors">
                    <td className="font-paragraph py-4 px-4 text-dark-brown">personal loan</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">from 8,5%</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">12-60 months</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">{formatEuropeanNumber(500)}</td>
                  </tr>
                  <tr className="border-b border-dark-brown-light hover:bg-white transition-colors">
                    <td className="font-paragraph py-4 px-4 text-dark-brown">business loan</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">from 7,5%</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">12-84 months</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">{formatEuropeanNumber(1000)}</td>
                  </tr>
                  <tr className="border-b border-dark-brown-light hover:bg-white transition-colors">
                    <td className="font-paragraph py-4 px-4 text-dark-brown">auto loan</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">from 6,5%</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">24-72 months</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">{formatEuropeanNumber(2000)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Credit Lines Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              credit lines
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-dark-brown">
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">credit line type</th>
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">interest rate</th>
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">credit limit</th>
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">annual fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dark-brown-light hover:bg-white transition-colors">
                    <td className="font-paragraph py-4 px-4 text-dark-brown">standard credit line</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">from 9,5%</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">up to {formatEuropeanNumber(10000)}</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">{formatEuropeanNumber(0)}</td>
                  </tr>
                  <tr className="border-b border-dark-brown-light hover:bg-white transition-colors">
                    <td className="font-paragraph py-4 px-4 text-dark-brown">premium credit line</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">from 7,5%</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">up to {formatEuropeanNumber(50000)}</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">{formatEuropeanNumber(50)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Leases Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              leases
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-dark-brown">
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">lease type</th>
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">interest rate</th>
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">term</th>
                    <th className="font-heading text-left py-4 px-4 text-dark-brown">min amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dark-brown-light hover:bg-white transition-colors">
                    <td className="font-paragraph py-4 px-4 text-dark-brown">equipment lease</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">from 5,5%</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">24-60 months</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">{formatEuropeanNumber(1000)}</td>
                  </tr>
                  <tr className="border-b border-dark-brown-light hover:bg-white transition-colors">
                    <td className="font-paragraph py-4 px-4 text-dark-brown">vehicle lease</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">from 4,5%</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">36-72 months</td>
                    <td className="font-paragraph py-4 px-4 text-dark-brown">{formatEuropeanNumber(5000)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Fees Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              additional fees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-4">processing fees</h3>
                <ul className="space-y-3">
                  <li className="font-paragraph text-dark-brown">
                    <span className="font-heading">application fee:</span> {formatEuropeanNumber(0)} (free)
                  </li>
                  <li className="font-paragraph text-dark-brown">
                    <span className="font-heading">processing fee:</span> 1-2% of loan amount
                  </li>
                  <li className="font-paragraph text-dark-brown">
                    <span className="font-heading">early repayment fee:</span> {formatEuropeanNumber(0)} (no penalty)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-4">other fees</h3>
                <ul className="space-y-3">
                  <li className="font-paragraph text-dark-brown">
                    <span className="font-heading">late payment fee:</span> {formatEuropeanNumber(10)}-{formatEuropeanNumber(25)} per occurrence
                  </li>
                  <li className="font-paragraph text-dark-brown">
                    <span className="font-heading">document fee:</span> {formatEuropeanNumber(5)} per document
                  </li>
                  <li className="font-paragraph text-dark-brown">
                    <span className="font-heading">account maintenance:</span> {formatEuropeanNumber(0)} (free)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-dark-brown-light rounded-lg">
          <p className="font-paragraph text-sm text-vibrant-yellow-light">
            <span className="font-heading text-vibrant-yellow">disclaimer:</span> prices and rates shown are indicative and may vary based on individual circumstances, creditworthiness, and market conditions. please contact us for a personalized quote.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
