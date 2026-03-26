import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoanCalculator from '@/components/LoanCalculator';
import { Image } from '@/components/ui/image';

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

export default function LoansPage() {
  const loanTerms = [
    { label: 'loan amount', value: '€25,000 - €1,000,000' },
    { label: 'ltv', value: 'up to 80%' },
    { label: 'loan period', value: 'up to 120 months' },
    { label: 'grace period', value: 'optional, up to 12 months' },
    { label: 'interest rate', value: 'from 9.5% + 6 months euribor' },
    { label: 'payment schedule', value: 'annuity or bullet' },
    { label: 'security', value: 'mortgage on building, apartment or land in estonia' },
    { label: 'loan applicant', value: 'oü, mtü, as or fie registered in estonia' },
  ];

  const processSteps = [
    'to apply for a loan, fill out the inquiry form',
    'we will send you an indicative loan offer within 1 working day and the loan officer will clarify any questions you may have',
    'the loan officer will send you a binding loan offer',
    'we will sign the loan agreement and find a time to make a notarial transaction',
    'we will disburse the loan',
  ];

  return (
    <div className="min-h-screen bg-white text-dark-brown">
      <Header />
      {/* Hero Section - Primary Background */}
      <section className="w-full bg-dark-brown py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-vibrant-yellow mb-4 sm:mb-6 leading-tight">
                loans. <span className="text-vibrant-yellow">built around your plans.</span>
              </h1>
              <p className="font-paragraph text-xs sm:text-sm md:text-base lg:text-lg text-vibrant-yellow-light leading-relaxed mb-4 sm:mb-6">straightforward loans for businesses. structured around your business needs.</p>
              <p className="font-paragraph text-xs sm:text-sm md:text-base lg:text-lg text-vibrant-yellow-light mb-6 sm:mb-8">
                whether you need capital for expansion, equipment, or working capital, our experienced team is here to help you find the perfect financing solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  to="/application"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-vibrant-yellow text-dark-brown font-heading rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg sm:text-lg text-lg font-bold"
                >
                  apply now
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
                <Image
                  src="https://static.wixstatic.com/media/nsplsh_a39456e21e0c4a06baa06551e2907085~mv2.jpg"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  originWidth={3997}
                  originHeight={2248} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Loan Calculator Section */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <LoanCalculator />
        </div>
      </section>
      {/* Terms and Conditions Section */}
      <section className="w-full py-24 md:py-32 bg-secondary">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6">
              loan terms and conditions
            </h2>
            <p className="font-paragraph text-lg text-dark-brown max-w-2xl mx-auto">
              transparent terms designed to support your business growth
            </p>
          </FadeIn>

          <FadeIn className="mt-12">
            <div className="overflow-x-auto rounded-2xl border-2 border-dark-brown shadow-lg">
              <table className="w-full">
                <tbody>
                  {loanTerms.map((term, index) => (
                    <tr 
                      key={index} 
                      className={`border-b-2 border-dark-brown last:border-b-0 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-vibrant-yellow-light'
                      }`}
                    >
                      <td className="px-8 py-6 font-heading text-lg text-dark-brown font-semibold w-1/3">
                        {term.label}
                      </td>
                      <td className="px-8 py-6 font-paragraph text-base md:text-lg text-dark-brown">
                        {term.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-2xl border-2 border-dark-brown shadow-lg">
                <h3 className="font-heading text-2xl text-dark-brown mb-4">annuity schedule</h3>
                <p className="font-paragraph text-base text-dark-brown leading-relaxed">
                  equal monthly payments throughout the loan term. each payment includes both principal and interest, making budgeting predictable and straightforward for your business.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl border-2 border-dark-brown shadow-lg">
                <h3 className="font-heading text-2xl text-dark-brown mb-4">bullet schedule</h3>
                <p className="font-paragraph text-base text-dark-brown leading-relaxed">
                  interest-only payments during the loan term with the full principal repaid at maturity. ideal for businesses with seasonal cash flows or planned capital events.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Application Process Section */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6">
              loan application process
            </h2>
            <p className="font-paragraph text-lg text-dark-brown max-w-2xl mx-auto">
              simple and straightforward steps to get your financing
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto mt-12">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex gap-8 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vibrant-yellow text-dark-brown font-heading font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-1 h-16 bg-vibrant-yellow mt-2" />
                    )}
                  </div>
                  <div className="pb-8 pt-2">
                    <p className="font-paragraph text-lg text-dark-brown leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section - Primary Background */}
      <section className="w-full bg-dark-brown py-24 md:py-32 overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-vibrant-yellow mb-8">
              ready to proceed?
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-vibrant-yellow-light mb-12 max-w-3xl mx-auto leading-relaxed">
              get started with our financing solutions today. our team is ready to help you find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/application"
                className="inline-flex items-center justify-center px-10 py-4 bg-vibrant-yellow text-dark-brown font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg hover:shadow-vibrant-yellow/50"
              >
                apply now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contacts"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-vibrant-yellow text-vibrant-yellow font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow hover:text-dark-brown transition-all duration-300"
              >
                contact us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
}
