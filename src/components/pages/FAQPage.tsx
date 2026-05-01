import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  // General category - questions 1-10
  {
    id: '1g',
    category: 'general',
    question: '1. what is avs finance?',
    answer: 'avs finance is a licensed financial institution providing financing to legal persons registered in estonia. avs finance operates under financial institution licence faa000503, granted by the financial intelligence unit of estonia. avs finance is established in estonia and backed by estonian capital.'
  },
  {
    id: '2g',
    category: 'general',
    question: '2. what types of financing does avs finance offer?',
    answer: 'avs finance provides loans and credit lines. financing can be used, for example, for refinancing, investment, working capital, business development or other business-related purposes.'
  },
  {
    id: '3g',
    category: 'general',
    question: '3. who can apply for financing?',
    answer: 'financing is available to legal persons registered in estonia.'
  },
  {
    id: '4g',
    category: 'general',
    question: '4. can a newly established legal person apply for financing?',
    answer: 'yes. newly established legal persons may apply for financing.'
  },
  {
    id: '5g',
    category: 'general',
    question: '5. does submitting an application create an obligation to take financing?',
    answer: 'no. submitting an application does not create an obligation to accept financing. it allows avs finance to review the application and, where possible, provide an indicative offer. financing becomes binding only after the relevant financing documents have been signed.'
  },
  {
    id: '6g',
    category: 'general',
    question: '6. how long does the application process take?',
    answer: 'avs finance usually aim to review an application and provide an indicative offer within 48 business hours. the exact timing depends on the circumstances of the financing and the completeness of the documents submitted.'
  },
  {
    id: '7g',
    category: 'general',
    question: '7. how quickly can financing be paid out?',
    answer: 'financing is typically paid out within 24 business hours after the financing documents have been signed and all disbursement conditions have been met.'
  },
  {
    id: '8g',
    category: 'general',
    question: '8. can a legal person with unpaid debts or existing loans still apply for financing?',
    answer: 'yes. existing loans or unpaid debts do not automatically exclude the applicant from receiving financing. each application is assessed individually.'
  },
  {
    id: '9g',
    category: 'general',
    question: '9. what documents are typically required for the application?',
    answer: 'the required documents generally depend on the applicant, the circumstances of the financing and the proposed collateral. typically, avs finance may ask for the applicant\'s bank statements for the last six months, documents confirming the purpose of the financing, and information about the applicant\'s beneficial owners and representatives. avs finance may also request photos, documents and other information relating to the proposed collateral, where needed to assess its suitability and value. a valuation report is generally not required, but may be requested depending on the type, location or specific characteristics of the collateral.'
  },
  {
    id: '10g',
    category: 'general',
    question: '10. can financing be repaid early without penalties?',
    answer: 'yes. loans and credit lines can generally be repaid before the due date without penalties by giving at least three months\' prior notice.'
  },
  {
    id: '11',
    category: 'loans',
    question: '11. what can a loan be used for?',
    answer: 'loans can be used for any legitimate business purpose, including investment, working capital, business development, acquisition of assets or refinancing of existing obligations. the specific purpose of the loan is agreed in the loan agreement.'
  },
  {
    id: '12',
    category: 'loans',
    question: '12. can a loan be used for refinancing?',
    answer: 'yes. a loan can be used to refinance existing obligations.'
  },
  {
    id: '13',
    category: 'loans',
    question: '13. what loan amounts does avs finance offer?',
    answer: 'avs finance offers loans from 20 000 € to 1 000 000 €.'
  },
  {
    id: '14',
    category: 'loans',
    question: '14. what loan terms does avs finance offer?',
    answer: 'loan terms can range from 3 months to 120 months.'
  },
  {
    id: '15',
    category: 'loans',
    question: '15. can the loan term be extended?',
    answer: 'yes. the loan term may be extended by agreement between the parties.'
  },
  {
    id: '16',
    category: 'loans',
    question: '16. what types of repayment schedule does avs finance offer?',
    answer: 'avs finance offers annuity and bullet repayment schedules. under an annuity schedule, equal monthly payments are made throughout the loan term. each payment includes both principal and interest. under a bullet schedule, the principal is repaid at the end of the loan term. during the loan term, the borrower pays interest only.'
  },
  {
    id: '17',
    category: 'loans',
    question: '17. what are the self-financing requirements for loans?',
    answer: 'in most cases, the borrower is expected to contribute its own financing to the project. depending on the purpose of the loan and the collateral, the required own contribution is typically at least 20% of the project cost. the exact self-financing requirement is assessed individually for each application.'
  }
];

const categories = [
  { id: 'all', label: 'all questions' },
  { id: 'general', label: 'general' },
  { id: 'loans', label: 'loans' },
  { id: 'credit-lines', label: 'credit lines' },
  { id: 'rates', label: 'rates & fees' },
  { id: 'payments', label: 'payments' },
  { id: 'collateral', label: 'collateral' }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFAQs = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full px-6 md:px-12 py-20 bg-secondary">
        <div className="max-w-[120rem] mx-auto">
          {/* Hero Section */}
          <div className="mb-16 flex flex-col items-center justify-center text-center">
            <h1 className="font-heading text-6xl md:text-7xl text-dark-brown mb-4">
              frequently asked questions
            </h1>
            <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl">find answers to common questions below.</p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setExpandedId(null);
                  }}
                  className={`font-paragraph px-4 py-2 rounded-lg transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-dark-brown text-vibrant-yellow'
                      : 'bg-vibrant-yellow-light text-dark-brown hover:bg-vibrant-yellow'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden transition-all duration-300 border border-vibrant-yellow-light"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-vibrant-yellow-light transition-colors duration-300"
                >
                  <h3 className="font-heading text-lg text-dark-brown text-left">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-dark-brown flex-shrink-0 transition-transform duration-300 ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedId === item.id && (
                  <div className="px-6 py-4 bg-vibrant-yellow-light border-t border-vibrant-yellow">
                    <p className="font-paragraph text-base text-dark-brown leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* Contact Section - Separate Container */}
      <section className="w-full bg-dark-brown py-24 md:py-32 overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-vibrant-yellow mb-8">
              didn't find your answer?
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-vibrant-yellow-light mb-12 max-w-3xl mx-auto leading-relaxed">
              our customer support team is here to help. reach out to us with any questions.
            </p>
            <Link 
              to="/contacts"
              className="inline-flex items-center justify-center px-10 py-4 bg-vibrant-yellow text-dark-brown font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg hover:shadow-vibrant-yellow/50"
            >
              contact us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
