import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
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
    { label: 'applicant', value: 'a company, non-profit association or sole proprietor registered in estonia' },
    { label: 'loan amount', value: 'from 20 000 € to 1 000 000 €' },
    { label: 'ltv', value: 'up to 80% of the collateral value' },
    { label: 'loan term', value: 'up to 120 months' },
    { label: 'grace period', value: 'optional, up to 12 months' },
    { label: 'payment schedule', value: 'annuity or bullet schedule' },
    { label: 'collateral', value: 'mortgage on building, apartment or land in estonia; mortgage can be combined with surety' },
    { label: 'interest rate', value: 'from 9,5% per annum plus 6-month euribor, calculated on the outstanding loan balance' },
    { label: 'origination fee', value: 'from 1% to 2% of the loan amount' },
  ];

  const processSteps = [
    'submit the application form.',
    'we review the information and may contact you for clarifications. if the information is sufficient, we aim to provide an indicative offer within 48 business hours.',
    'if the terms are suitable, we complete the required checks and prepare the loan and security documents.',
    'once the documents are signed and all disbursement conditions are met, the loan is paid out.',
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white text-dark-brown overflow-x-clip">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-vibrant-yellow origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-primary border-b-2 border-dark-brown/10">

        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Hero Content - Left */}
            <motion.div
              className="relative flex flex-col justify-center"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Accent line */}
              <motion.div
                className="w-16 h-1 bg-vibrant-yellow rounded-full mb-8"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-secondary mb-8 tracking-tight text-left leading-tight">
                loans.
                <br />
                <span className="relative inline-block">
                  capital for the next step.
                </span>
              </h1>

              <p className="font-paragraph text-secondary mb-6 text-lg md:text-xl font-normal">straightforward loans for businesses that need financing for a specific purpose.</p>

              <p className="font-paragraph text-secondary mb-12 text-lg md:text-xl font-normal leading-relaxed max-w-lg">use it for refinancing, investment, a property project or another business need, with terms structured around your plans.</p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  to="/application"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-vibrant-yellow text-primary font-paragraph font-bold rounded-xl hover:bg-vibrant-yellow-dark transition-all duration-300 text-lg w-fit shadow-lg hover:shadow-xl hover:scale-105"
                >
                  apply now
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Right */}
            <motion.div 
              className="relative flex items-center justify-center lg:justify-end h-full"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="w-full lg:w-auto"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://static.wixstatic.com/media/11062b_f0cfb200520f41058abf17e67605efc4~mv2.jpeg"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    originWidth={5184}
                    originHeight={3456}
                    alt="a bridge is being built over a body of water"
                  />
                </div>
              </motion.div>
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
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6">loan overview</h2>
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
                <p className="font-paragraph text-base text-dark-brown leading-relaxed">equal monthly payments throughout the loan term. each payment includes both principal and interest.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border-2 border-dark-brown shadow-lg">
                <h3 className="font-heading text-2xl text-dark-brown mb-4">bullet schedule</h3>
                <p className="font-paragraph text-base text-dark-brown leading-relaxed">interest-only payments during the loan term with the full principal repaid at maturity.</p>
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
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vibrant-yellow text-dark-brown font-heading font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-1 flex-grow bg-vibrant-yellow mt-2 min-h-[80px]" />
                    )}
                  </div>
                  <div className="pt-1 pb-4">
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
            <p className="font-paragraph text-lg md:text-xl text-vibrant-yellow-light mb-12 max-w-3xl mx-auto leading-relaxed">get started with our financing solutions today. our team is ready to help you find the suitable solution for your business.</p>
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
