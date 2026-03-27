import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatEuropeanNumber, formatEuropeanPercent } from '@/lib/format-number';

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
        <div className="mb-12 p-6 bg-dark-brown rounded-lg">
          <p className="font-heading text-lg text-vibrant-yellow">
            effective from 27 march 2026
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="space-y-16">
          {/* Agreement Fees Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              agreement fees
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">entry into contract fee</h3>
                <p className="font-paragraph text-dark-brown">1% of the credit amount, minimum {formatEuropeanNumber(200)}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">commitment fee</h3>
                <p className="font-paragraph text-dark-brown">credit line commitment fee – 1% per annum on the undrawn amount</p>
              </div>
            </div>
          </div>

          {/* Changes to Agreement Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              changes to the agreement
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">increase of the credit amount</h3>
                <p className="font-paragraph text-dark-brown">1% of the additional credit amount, minimum {formatEuropeanNumber(100)}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">change of payment date</h3>
                <p className="font-paragraph text-dark-brown">{formatEuropeanNumber(20)}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">payment holiday or restructuring due to payment difficulties</h3>
                <p className="font-paragraph text-dark-brown">0,1% of credit balance, minimum {formatEuropeanNumber(100)}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">partial or full early repayment</h3>
                <p className="font-paragraph text-dark-brown">free of charge if notice is given at least 3 months in advance; otherwise, interest calculated on the credit amount repaid early for the portion of the 3-month notice period not observed</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">early termination of a credit line or reduction of a credit line limit</h3>
                <p className="font-paragraph text-dark-brown">free of charge if notice is given at least 3 months in advance; otherwise, a commitment fee will be charged on the reduced amount or, in the case of early termination, on the undrawn credit line balance, for the portion of the 3-month notice period not observed</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">other amendments to the agreement</h3>
                <p className="font-paragraph text-dark-brown">for example, change of term or replacement of collateral – 1% of the credit balance, minimum {formatEuropeanNumber(100)}</p>
              </div>
            </div>
          </div>

          {/* Other Services Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              other services
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">notarial transactions</h3>
                <ul className="space-y-3 ml-4">
                  <li className="font-paragraph text-dark-brown">
                    • attendance at a notarial transaction for the creation of a mortgage on entry into a new credit agreement, upon full repayment of the credit amount, or for the creation of an additional mortgage – free of charge
                  </li>
                  <li className="font-paragraph text-dark-brown">
                    • attendance at a notarial transaction for any other reason – {formatEuropeanNumber(100)}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Debt Collection Costs Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              debt collection costs
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">reminder letter or debt notice</h3>
                <p className="font-paragraph text-dark-brown">first free of charge, from the second onwards {formatEuropeanNumber(10)}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">notice of termination</h3>
                <p className="font-paragraph text-dark-brown">{formatEuropeanNumber(20)}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">termination letter</h3>
                <p className="font-paragraph text-dark-brown">{formatEuropeanNumber(40)}</p>
              </div>
            </div>
          </div>

          {/* Additional Services Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              additional services
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">confirmation letter</h3>
                <p className="font-paragraph text-dark-brown">{formatEuropeanNumber(10)}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">confirmation letter for an auditor</h3>
                <p className="font-paragraph text-dark-brown">{formatEuropeanNumber(20)}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">bespoke information request</h3>
                <p className="font-paragraph text-dark-brown">{formatEuropeanNumber(30)} per hour, minimum {formatEuropeanNumber(30)}</p>
              </div>
            </div>
          </div>

          {/* Default Interest Section */}
          <div className="bg-vibrant-yellow-light rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-8">
              default interest
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-3">delay in repayment</h3>
                <p className="font-paragraph text-dark-brown">default interest for delay in repayment of the credit amount, or in reimbursing debt collection costs or any other contractual costs – 0,1% per day (36,5% per annum)</p>
              </div>
            </div>
          </div>
        </div>

        {/* VAT Notice */}
        <div className="mt-16 p-6 bg-dark-brown-light rounded-lg">
          <p className="font-paragraph text-sm text-vibrant-yellow-light">
            <span className="font-heading text-vibrant-yellow">note:</span> value added tax (vat) may be added to service fees in accordance with applicable law.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
