import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';
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

export default function CreditLinePage() {
  const benefits = [
    'Competitive interest rates from 5.5% per annum',
    'Flexible refinancing terms up to 25 years',
    'Loan amounts from €50,000 to €400,000',
    'Fast approval process within 3-5 business days',
    'No hidden fees or prepayment penalties',
    'Dedicated account manager for personalized support',
  ];

  const eligibility = [
    'Valid identification and proof of income',
    'Existing mortgage or property equity',
    'Stable employment or business history',
    'Clear purpose for refinancing funds',
    'Good credit history and no outstanding defaults',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-24 overflow-hidden bg-gradient-to-br from-white via-yellow-50 to-amber-50">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-vibrant-yellow-light to-yellow-200 rounded-full blur-3xl opacity-20"
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
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-vibrant-yellow-light rounded-full">
                <Zap className="h-5 w-5 text-gray-900" />
                <span className="font-paragraph text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Refinancing Solutions
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
                Refinance Your Mortgage for <span className="text-vibrant-yellow">Better Terms</span>
              </h1>
              <p className="font-paragraph text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                Lower your monthly payments, access your home equity, or switch to better rates with our refinancing solutions designed to save you money.
              </p>
              <Link 
                to="/application"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-vibrant-yellow text-gray-900 font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg hover:shadow-vibrant-yellow/40"
              >
                Apply for Refinancing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="col-span-12 lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-vibrant-yellow to-vibrant-yellow-dark p-8 md:p-10 rounded-2xl text-gray-900 shadow-2xl">
                <h3 className="font-heading text-3xl mb-8">
                  Refinancing Overview
                </h3>
                <div className="space-y-8">
                  <div>
                    <p className="font-paragraph text-sm text-gray-700 mb-2">Loan Amount</p>
                    <p className="font-heading text-2xl">€50,000 - €400,000</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-gray-700 mb-2">Interest Rate</p>
                    <p className="font-heading text-2xl">From 5.5% per annum</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-gray-700 mb-2">Loan Term</p>
                    <p className="font-heading text-2xl">Up to 25 years</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-gray-700 mb-2">Approval Time</p>
                    <p className="font-heading text-2xl">3-5 business days</p>
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
              Experience the flexibility and convenience of refinancing
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="flex items-start gap-4 bg-white p-8 rounded-xl border-2 border-vibrant-yellow hover:border-vibrant-yellow-dark hover:shadow-lg transition-all duration-300"
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
              What is Refinancing?
            </h2>
            <div className="space-y-6">
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Refinancing is the process of replacing your existing mortgage with a new one, typically to take advantage of better interest rates, lower monthly payments, or to access your home equity. Whether rates have dropped or your financial situation has improved, refinancing can help you save money and achieve your financial goals.
              </p>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Our refinancing solutions offer flexibility to help you achieve various objectives: reduce your monthly payments, shorten your loan term, switch from variable to fixed rates, or access cash for home improvements, debt consolidation, or other major expenses.
              </p>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                With AVS Finance's refinancing options, you gain the opportunity to optimize your mortgage and improve your financial position. Our experienced team works with you to find the best refinancing solution that matches your specific needs and goals.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="col-span-12 lg:col-span-6" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-8">
              Eligibility Criteria
            </h2>
            <div className="space-y-4">
              {eligibility.map((criterion, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-vibrant-yellow-light to-yellow-100 rounded-xl border-2 border-vibrant-yellow">
                  <CheckCircle className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-lg text-gray-700 leading-relaxed">
                    {criterion}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-gray-50 py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              How Refinancing Works
            </h2>
            <p className="font-paragraph text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and designed for your convenience
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vibrant-yellow text-gray-900 font-heading text-2xl mb-6 font-bold">
                1
              </div>
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Review Your Options</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                We analyze your current mortgage and present refinancing options that could save you money or achieve your goals.
              </p>
            </FadeIn>

            <FadeIn className="text-center" delay={0.1}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vibrant-yellow text-gray-900 font-heading text-2xl mb-6 font-bold">
                2
              </div>
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Apply & Get Approved</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Submit your application and receive approval within 3-5 business days with competitive rates.
              </p>
            </FadeIn>

            <FadeIn className="text-center" delay={0.2}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vibrant-yellow text-gray-900 font-heading text-2xl mb-6 font-bold">
                3
              </div>
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Close & Save</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Complete the refinancing process and start enjoying lower payments or better terms immediately.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 md:px-12 py-24 md:py-32">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-12">
            Terms and Conditions
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 space-y-8">
            <div>
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Interest Rates</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Interest rates start from 10.5% per annum on the outstanding balance. You only pay interest on the amount you actually draw from your credit line, not on the entire approved limit.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Repayment Terms</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Flexible repayment with minimum monthly payments based on your outstanding balance. You can repay the full amount or make partial payments at any time without penalties.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Credit Line Duration</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Credit lines are typically issued for 12-36 months with the option to renew. Your credit limit may be reviewed and adjusted based on your business performance and repayment history.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Fees and Charges</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                A small annual maintenance fee of 0.5-1% of the credit limit applies. No transaction fees for drawing funds. All fees are transparent and disclosed upfront.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Loan Calculator Section */}
      <section className="w-full bg-gray-50 py-24 md:py-32">
        <LoanCalculator />
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[120rem] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Ready to Secure Your Credit Line?
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Apply today and gain the financial flexibility your business deserves
            </p>
            <Link 
              to="/application"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-300 text-gray-900 font-paragraph font-semibold text-base rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
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
