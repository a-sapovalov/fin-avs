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
    'Access funds only when you need them',
    'Pay interest only on the amount used',
    'Revolving credit that replenishes as you repay',
    'Credit limits from €25,000 to €2,000,000',
    'Quick access to funds within 24 hours',
    'Flexible terms with no fixed repayment schedule',
  ];

  const eligibility = [
    'Active business registered in Estonia',
    'Minimum 1 year of operational history',
    'Consistent revenue and positive cash flow',
    'Good credit standing with no recent defaults',
    'Clear business purpose for credit line usage',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-24 overflow-hidden bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20"
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
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-100 rounded-full">
                <Zap className="h-5 w-5 text-cyan-600" />
                <span className="font-paragraph text-xs font-semibold text-cyan-600 uppercase tracking-wider">
                  Flexible Financing
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
                Credit Lines for Operational <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Flexibility</span>
              </h1>
              <p className="font-paragraph text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                Maintain financial agility with a revolving credit line that gives you instant access to working capital whenever opportunities or challenges arise.
              </p>
              <Link 
                to="/application"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-paragraph font-semibold text-base rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Apply for a Credit Line
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="col-span-12 lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 md:p-10 rounded-2xl text-white shadow-2xl">
                <h3 className="font-heading text-3xl mb-8">
                  Credit Line Overview
                </h3>
                <div className="space-y-8">
                  <div>
                    <p className="font-paragraph text-sm text-white/70 mb-2">Credit Limit</p>
                    <p className="font-heading text-2xl">€25,000 - €2,000,000</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-white/70 mb-2">Interest Rate</p>
                    <p className="font-heading text-2xl">From 10.5% per annum</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-white/70 mb-2">Access Time</p>
                    <p className="font-heading text-2xl">Within 24 hours</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-white/70 mb-2">Repayment</p>
                    <p className="font-heading text-2xl">Flexible, revolving</p>
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
              Experience the flexibility and convenience of revolving credit
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="flex items-start gap-4 bg-white p-8 rounded-xl border border-gray-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
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
              What is a Credit Line?
            </h2>
            <div className="space-y-6">
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                A credit line is a flexible financing solution that provides your business with access to a predetermined amount of capital that you can draw upon as needed. Unlike a traditional loan where you receive a lump sum upfront, a credit line allows you to borrow only what you need, when you need it.
              </p>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                This revolving credit facility is perfect for managing cash flow fluctuations, covering unexpected expenses, seizing time-sensitive opportunities, or bridging gaps between receivables and payables. As you repay the borrowed amount, your available credit replenishes, giving you continuous access to working capital.
              </p>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                With AVS Finance's credit line, you gain financial flexibility without the commitment of a full loan. You only pay interest on the funds you actually use, making it a cost-effective solution for businesses that need reliable access to capital.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="col-span-12 lg:col-span-6" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-8">
              Eligibility Criteria
            </h2>
            <div className="space-y-4">
              {eligibility.map((criterion, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
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
              How It Works
            </h2>
            <p className="font-paragraph text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and designed for your convenience
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-heading text-2xl mb-6">
                1
              </div>
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Apply & Get Approved</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Submit your application and receive approval for your credit limit based on your business profile.
              </p>
            </FadeIn>

            <FadeIn className="text-center" delay={0.1}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-heading text-2xl mb-6">
                2
              </div>
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Draw Funds as Needed</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Access your credit line anytime you need capital, up to your approved limit, within 24 hours.
              </p>
            </FadeIn>

            <FadeIn className="text-center" delay={0.2}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-heading text-2xl mb-6">
                3
              </div>
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Repay & Reuse</h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                Make flexible repayments, and as you pay down the balance, your credit becomes available again.
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
