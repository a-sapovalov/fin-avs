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
  {
    id: '1',
    category: 'general',
    question: 'what is avs finance?',
    answer: 'avs finance is an estonia-based licensed financial institution providing loans, credit lines and leasing solutions to companies, non-profit associations and sole proprietors registered in estonia. we operate under financial institution licence faa000503, granted by the financial intelligence unit of estonia. avs finance is established in estonia and backed by estonian capital.'
  },
  {
    id: '2',
    category: 'general',
    question: 'how long does the application process take?',
    answer: 'we aim to review credit applications and provide an indicative offer within 48 business hours. in simpler cases, an indicative offer may be provided within a few hours.'
  },
  {
    id: '3',
    category: 'general',
    question: 'what documents do i need to apply?',
    answer: 'required documents typically include: valid ID, proof of income (last 3 months of payslips or tax returns), bank statements, and proof of residence. additional documents may be requested based on your application.'
  },
  {
    id: '4',
    category: 'loans',
    question: 'what is the maximum loan amount i can get?',
    answer: 'the maximum loan amount depends on your income, credit history, and employment status. personal loans typically range from €500 to €25,000, while business loans can be higher. contact us for a personalized assessment.'
  },
  {
    id: '5',
    category: 'loans',
    question: 'can i repay my loan early without penalties?',
    answer: 'yes! we offer penalty-free early repayment. you can pay off your loan at any time without additional fees. this can help you save on interest charges.'
  },
  {
    id: '6',
    category: 'loans',
    question: 'what credit score do i need?',
    answer: 'while we consider applicants with various credit histories, a higher credit score generally improves your chances of approval and may result in better interest rates. we evaluate each application individually.'
  },
  {
    id: '7',
    category: 'credit-lines',
    question: 'how does a credit line differ from a loan?',
    answer: 'a credit line is a flexible borrowing arrangement where you can draw funds as needed, up to your approved limit. you only pay interest on the amount you use, not the entire limit. loans provide a lump sum upfront.'
  },
  {
    id: '8',
    category: 'credit-lines',
    question: 'can i increase my credit limit?',
    answer: 'yes, you can request a credit limit increase after maintaining a good payment history for at least 6 months. contact our customer service team to discuss your options.'
  },
  {
    id: '9',
    category: 'leases',
    question: 'what can i lease?',
    answer: 'we offer leasing for equipment, vehicles, machinery, and other business assets. equipment leases are ideal for businesses that need flexibility without the commitment of ownership.'
  },
  {
    id: '10',
    category: 'leases',
    question: 'what happens at the end of a lease?',
    answer: 'at the end of your lease term, you have several options: return the asset, purchase it at a residual value, or lease a new asset. the specific terms depend on your lease agreement.'
  },
  {
    id: '11',
    category: 'rates',
    question: 'how are interest rates determined?',
    answer: 'interest rates are based on several factors including: your credit score, income stability, loan amount, loan term, current market conditions, and the type of financing. we offer competitive rates tailored to your profile.'
  },
  {
    id: '12',
    category: 'rates',
    question: 'are your rates fixed or variable?',
    answer: 'we primarily offer fixed-rate financing, which means your interest rate remains constant throughout the loan term. this provides predictability and protection against rate increases.'
  },
  {
    id: '13',
    category: 'payment',
    question: 'what payment methods do you accept?',
    answer: 'we accept bank transfers and automatic payments from your bank account. you can set up automatic monthly payments for convenience, or make manual payments at any time.'
  },
  {
    id: '14',
    category: 'payment',
    question: 'what if i miss a payment?',
    answer: 'if you miss a payment, we will contact you to arrange payment. late payments may incur a fee (€10-25) and could affect your credit score. we recommend setting up automatic payments to avoid missed payments.'
  },
  {
    id: '15',
    category: 'security',
    question: 'is my personal information secure?',
    answer: 'yes, we take data security very seriously. all personal information is encrypted and stored securely. we comply with all applicable data protection regulations and never share your information with third parties without consent.'
  }
];

const categories = [
  { id: 'all', label: 'all questions' },
  { id: 'general', label: 'general' },
  { id: 'loans', label: 'loans' },
  { id: 'credit-lines', label: 'credit lines' },
  { id: 'leases', label: 'leases' },
  { id: 'rates', label: 'rates & fees' },
  { id: 'payment', label: 'payments' },
  { id: 'security', label: 'security' }
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
                className="bg-vibrant-yellow-light rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-vibrant-yellow transition-colors duration-300"
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
                  <div className="px-6 py-4 bg-white border-t border-dark-brown-light">
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
