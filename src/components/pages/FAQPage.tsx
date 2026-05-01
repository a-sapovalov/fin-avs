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
  },
  // Credit Lines category - questions 18-25
  {
    id: '18',
    category: 'credit-lines',
    question: '18. what is a credit line and how does it work?',
    answer: 'a credit line is a flexible financing limit that the borrower can use when needed, up to the agreed credit limit. the borrower may draw funds within the available limit, repay the used amount and use the repaid amount again during the credit line term.'
  },
  {
    id: '19',
    category: 'credit-lines',
    question: '19. when is a credit line a better option than a loan?',
    answer: 'a credit line may be a better option where the borrower needs flexible access to funds rather than a fixed one-time loan amount. it is commonly used for working capital, seasonal liquidity needs, short-term business expenses, bridge financing or situations where the exact timing or amount of funding need may vary.'
  },
  {
    id: '20',
    category: 'credit-lines',
    question: '20. is the full credit line amount paid out immediately?',
    answer: 'a credit line gives the borrower access to an agreed credit limit. the borrower may draw funds when needed, up to the agreed limit and, if necessary, draw funds in full.'
  },
  {
    id: '21',
    category: 'credit-lines',
    question: '21. is interest paid only on the outstanding drawn balance?',
    answer: 'yes. interest is calculated only on the part of the credit line that has been drawn and remains unpaid. however, a commitment fee applies to the undrawn part of the credit limit. the commitment fee is lower than the interest rate applicable to the amount in use.'
  },
  {
    id: '22',
    category: 'credit-lines',
    question: '22. can the credit line be reused after repayment?',
    answer: 'yes, unless otherwise agreed. amounts repaid under the credit line may be used again during the credit line term.'
  },
  {
    id: '23',
    category: 'credit-lines',
    question: '23. what can a credit line be used for?',
    answer: 'a credit line can be used for legitimate business purposes, including working capital, temporary liquidity needs, purchase of goods or equipment, covering short-term expenses, or financing business projects where the need for funds may arise in stages.'
  },
  {
    id: '24',
    category: 'credit-lines',
    question: '24. what credit line amounts does avs finance offer?',
    answer: 'avs finance offers credit lines from 20 000 € to 500 000 €.'
  },
  {
    id: '25',
    category: 'credit-lines',
    question: '25. can the credit limit be increased?',
    answer: 'yes. the credit limit may be increased up to 500 000 € by agreement between the parties.'
  },
  // Rates & Fees category - questions 26-30
  {
    id: '26',
    category: 'rates',
    question: '26. what interest rates apply?',
    answer: 'avs finance offers annual interest rates starting from 9.5%. the interest rate is assessed individually.'
  },
  {
    id: '27',
    category: 'rates',
    question: '27. how is the interest rate determined?',
    answer: 'the interest rate depends on several factors, including the financing product, loan term, repayment schedule, repayment capacity, collateral, risk profile and market conditions. depending on the product and agreed terms, the interest rate may be fixed or linked to a reference rate, such as 6-month euribor.'
  },
  {
    id: '28',
    category: 'rates',
    question: '28. how is the interest calculated?',
    answer: 'interest is calculated on the outstanding balance of the financing, not on the original financing amount. for example, if 100 000 € was paid out and the outstanding balance has been reduced to 80 000 €, interest is calculated on 80 000 €.'
  },
  {
    id: '29',
    category: 'rates',
    question: '29. what is the difference between interest and a commitment fee?',
    answer: 'interest applies to the part of the credit line that has been drawn and remains unpaid. a commitment fee applies to the undrawn part of the credit line, because avs finance keeps that amount available for the borrower.'
  },
  {
    id: '30',
    category: 'rates',
    question: '30. what fees may apply besides interest?',
    answer: 'the full list of potentially applicable fees is available in the price list on the avs finance website.'
  },
  // Payments category - questions 31-36
  {
    id: '31',
    category: 'payments',
    question: '31. when do repayments start?',
    answer: 'repayments start on the date agreed in the agreement. if a grace period has been agreed, principal repayments usually start after the grace period ends.'
  },
  {
    id: '32',
    category: 'payments',
    question: '32. what happens if the borrower is unable to repay the loan?',
    answer: 'if the borrower is unable to make a payment on time, avs finance should be contacted as soon as possible. payment difficulties should not be ignored, as early communication often makes it possible to find a solution that is suitable and less costly for both parties. late payments may result in default interest, contractual penalties and debt recovery costs. payment defaults may also affect the borrower\'s reputation and creditworthiness, which may make it more difficult to obtain financing from other lenders in the future. if the default is not resolved, avs finance may terminate the financing agreement. this may be followed by enforcement proceedings and, where the financing is secured by collateral, the collateral may be sold in enforcement proceedings. our aim is not to punish borrowers for payment difficulties. however, it is important that the borrower informs avs finance immediately if payment problems arise, so that possible solutions can be considered before the situation becomes more serious.'
  },
  {
    id: '33',
    category: 'payments',
    question: '33. how should payments be made?',
    answer: 'payments must be made by bank transfer to the following bank account: recipient: avs finance oü, iban: ee24 2200 2210 9204 0000, bic / swift code: ekrdee22.'
  },
  {
    id: '34',
    category: 'payments',
    question: '34. can the payment date be changed?',
    answer: 'yes. the payment date may be changed by agreement between the parties.'
  },
  {
    id: '35',
    category: 'payments',
    question: '35. what is a grace period?',
    answer: 'a grace period, also known as a payment holiday, is a period during which the borrower is not required to make principal repayments. during the grace period, the borrower continues to pay interest. a grace period can help where the financed project needs time to start generating income or where the borrower\'s cash flow is temporarily lower.'
  },
  {
    id: '36',
    category: 'payments',
    question: '36. does avs finance offer a grace period?',
    answer: 'yes. a grace period is optional and may be agreed for up to 12 months.'
  },
  // Collateral category - questions 37-47
  {
    id: '37',
    category: 'collateral',
    question: '37. is collateral required?',
    answer: 'yes. collateral is required for financing provided by avs finance.'
  },
  {
    id: '38',
    category: 'collateral',
    question: '38. what collateral does avs finance accept?',
    answer: 'the main form of collateral accepted by avs finance is a mortgage over real estate, such as an apartment, building or land. depending on the project and the borrower\'s risk profile, additional collateral may also be required, such as a commercial pledge, a guarantee from another legal person or a personal surety from a natural person.'
  },
  {
    id: '39',
    category: 'collateral',
    question: '39. can collateral be provided by another legal or natural person?',
    answer: 'yes. although the borrower must be a legal person, the collateral may be provided by another legal or natural person. for example, if real estate belongs to a natural person, a mortgage may be established over that real estate to secure financing granted to the borrower.'
  },
  {
    id: '40',
    category: 'collateral',
    question: '40. is a surety required?',
    answer: 'a surety is not always required.'
  },
  {
    id: '41',
    category: 'collateral',
    question: '41. how is collateral value assessed?',
    answer: 'collateral value is assessed based on its estimated market value. in many cases, avs finance can assess the collateral internally based on available market data and documents provided by the borrower. however, a valuation report may be requested if the collateral is unusual, the value is uncertain or the specific circumstances of the collateral require it.'
  },
  {
    id: '42',
    category: 'collateral',
    question: '42. is it possible to get financing if a mortgage is already registered on the property?',
    answer: 'yes. an existing mortgage does not automatically prevent the property from being accepted as collateral. in such a case, avs finance may accept a mortgage in the next available ranking position, provided that the remaining collateral value is sufficient.'
  },
  {
    id: '43',
    category: 'collateral',
    question: '43. what is ltv?',
    answer: 'ltv means loan-to-value ratio. it shows the relationship between the financing amount and the value of the collateral. for example, if the loan amount is 80 000 € and the collateral value is 100 000 €, the ltv is 80%. the lower the ltv, the stronger the collateral position generally is.'
  },
  {
    id: '44',
    category: 'collateral',
    question: '44. what ltv does avs finance accept?',
    answer: 'as a general rule, avs finance may provide financing up to 80% of the collateral value, but the exact acceptable ltv ratio is assessed individually.'
  },
  {
    id: '45',
    category: 'collateral',
    question: '45. who pays the costs related to collateral?',
    answer: 'costs related to establishing, amending or releasing collateral are usually borne by the borrower. this may include notary fees, state fees, valuation costs, insurance costs and other costs related to the collateral, where applicable.'
  },
  {
    id: '46',
    category: 'collateral',
    question: '46. is collateral insurance required?',
    answer: 'insurance may be required if the financing is secured by a mortgage over real estate or other insurable asset. the exact insurance requirements depend on the collateral and are agreed as part of the financing terms.'
  },
  {
    id: '47',
    category: 'collateral',
    question: '47. can collateral be released before the financing is fully repaid?',
    answer: 'collateral is generally released after all secured obligations have been fully repaid and no further obligations remain. partial release of collateral may be possible by agreement, for example if the outstanding financing amount has been reduced and the remaining collateral is sufficient.'
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
