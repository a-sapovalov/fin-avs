import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Shield } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoanCalculator from '@/components/LoanCalculator';

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function CorporateLoanPage() {
  const benefits = [
    'Competitive interest rates tailored to your business',
    'Flexible repayment terms up to 10 years',
    'Loan amounts from €50,000 to €5,000,000',
    'Fast approval process within 5-7 business days',
    'No hidden fees or prepayment penalties',
    'Dedicated account manager for personalized support',
  ];

  const eligibility = [
    'Registered business operating in Estonia',
    'Minimum 2 years of operational history',
    'Positive cash flow and financial statements',
    'Clear business plan and purpose for funds',
    'Good credit history and no outstanding defaults',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-24 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-12 gap-12 items-center">
            <motion.div 
              className="col-span-12 lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 rounded-full">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="font-paragraph text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Corporate Financing
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
                Corporate Loans for Strategic <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Growth</span>
              </h1>
              <p className="font-paragraph text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                Secure the capital you need to expand operations, invest in equipment, acquire assets, or fund major business initiatives with our competitive corporate loan solutions.
              </p>
              <Link 
                to="/application"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-paragraph font-semibold text-base rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Apply for a Corporate Loan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="col-span-12 lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:p-10 rounded-2xl text-white shadow-2xl">
                <h3 className="font-heading text-3xl mb-8">
                  Loan Overview
                </h3>
                <div className="space-y-8">
                  <div>
                    <p className="font-paragraph text-sm text-white/70 mb-2">Loan Amount</p>
                    <p className="font-heading text-2xl">€50,000 - €5,000,000</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-white/70 mb-2">Interest Rate</p>
                    <p className="font-heading text-2xl">From 9.5% per annum</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-white/70 mb-2">Repayment Period</p>
                    <p className="font-heading text-2xl">Up to 10 years</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-white/70 mb-2">Approval Time</p>
                    <p className="font-heading text-2xl">5-7 business days</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="w-full bg-gray-50 py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="font-paragraph text-lg text-gray-600 max-w-2xl mx-auto">
              Our corporate loans are designed to provide maximum value and flexibility
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="flex items-start gap-4 bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="font-paragraph text-lg text-gray-700 leading-relaxed">
                  {benefit}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-16">
          <FadeIn className="col-span-12 lg:col-span-6">
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-8">
              What is a Corporate Loan?
            </h2>
            <div className="space-y-6">
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                A corporate loan is a long-term financing solution designed specifically for businesses seeking substantial capital for strategic investments. Whether you're expanding your operations, purchasing new equipment, acquiring real estate, or funding a major project, our corporate loans provide the financial foundation you need.
              </p>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Unlike short-term financing options, corporate loans offer extended repayment periods and structured payment schedules that align with your business's cash flow and growth trajectory. This makes them ideal for significant investments that will generate returns over time.
              </p>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                At AVS Finance, we understand that every business has unique needs. Our experienced team works closely with you to structure a loan that matches your specific requirements, ensuring you have the capital and flexibility to achieve your business objectives.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="col-span-12 lg:col-span-6" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-8">
              Eligibility Criteria
            </h2>
            <div className="space-y-4">
              {eligibility.map((criterion, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-lg text-gray-700 leading-relaxed">
                    {criterion}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="w-full bg-gray-50 py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-12">
              Terms and Conditions
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 space-y-8">
              <div>
                <h3 className="font-heading text-2xl text-gray-900 mb-4">Interest Rates</h3>
                <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                  Interest rates start from 9.5% per annum and are determined based on your business's creditworthiness, loan amount, and repayment term. Fixed and variable rate options are available.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-heading text-2xl text-gray-900 mb-4">Repayment Terms</h3>
                <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                  Flexible repayment schedules ranging from 1 to 10 years. Monthly installments are structured to align with your business's cash flow. Early repayment is permitted without penalties.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-heading text-2xl text-gray-900 mb-4">Collateral Requirements</h3>
                <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                  Depending on the loan amount and business profile, collateral may be required. Acceptable collateral includes real estate, equipment, inventory, or other business assets.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-heading text-2xl text-gray-900 mb-4">Fees and Charges</h3>
                <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                  A one-time origination fee of 1-2% of the loan amount applies. No hidden fees, monthly maintenance charges, or prepayment penalties. All costs are disclosed upfront.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="w-full bg-white py-24 md:py-32">
        <LoanCalculator />
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[120rem] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Ready to Secure Your Corporate Loan?
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Start your application today and take the next step in growing your business
            </p>
            <Link 
              to="/application"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-gray-900 font-paragraph font-semibold text-base rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
