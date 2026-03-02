import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowRight, TrendingUp, Users, LineChart, CheckCircle, Zap, Shield } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
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

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-clip">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-vibrant-yellow origin-left z-50"
        style={{ scaleX }}
      />
      <Header />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-gradient-to-br from-white via-yellow-50 to-amber-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-vibrant-yellow-light to-yellow-200 rounded-full blur-3xl opacity-20"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-vibrant-yellow to-transparent rounded-full blur-3xl opacity-30"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Hero Content */}
            <div className="col-span-12 lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-vibrant-yellow-light rounded-full">
                  <span className="w-2 h-2 bg-vibrant-yellow-dark rounded-full" />
                  <span className="font-paragraph text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Your Dream Home Awaits
                  </span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-8 tracking-tight">
                  Find Your Perfect <span className="text-vibrant-yellow">Mortgage</span> Today
                </h1>

                <p className="font-paragraph text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
                  AVS Finance offers competitive mortgage rates and flexible refinancing options to help you achieve homeownership with confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Link 
                    to="/application"
                    className="group inline-flex items-center justify-center px-8 py-3.5 bg-vibrant-yellow text-gray-900 font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg hover:shadow-vibrant-yellow/40"
                  >
                    Get Pre-Approved
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link 
                    to="/about"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-300 text-gray-900 font-paragraph font-bold text-base rounded-lg hover:border-vibrant-yellow hover:text-vibrant-yellow transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row gap-8 mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-gray-600">Fast Approval</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-gray-600">Competitive Rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-gray-600">Expert Support</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div 
              className="col-span-12 lg:col-span-6 relative h-full min-h-[400px] flex items-center justify-center"
              style={{ y: yHero }}
            >
              <div className="relative w-full max-w-md">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl blur-2xl opacity-30" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                    <Image 
                      src="https://static.wixstatic.com/media/43558d_640f34e2ac77424097e80e852f2a7342~mv2.png"
                      alt="AVS Finance"
                      width={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="relative w-full bg-gray-50 py-24 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Mortgage Solutions
            </h2>
            <p className="font-paragraph text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the mortgage or refinancing option that works best for your situation
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Service 1: Mortgages */}
            <FadeIn className="group">
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-vibrant-yellow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-vibrant-yellow-light to-transparent rounded-bl-full opacity-50" />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-vibrant-yellow-light rounded-xl mb-4">
                      <TrendingUp className="h-7 w-7 text-gray-900" />
                    </div>
                    <h3 className="font-heading text-3xl text-gray-900 mb-2">Home Mortgages</h3>
                    <p className="font-paragraph text-sm text-vibrant-yellow-dark font-bold">Long-term financing</p>
                  </div>
                  
                  <p className="font-paragraph text-gray-600 mb-8 leading-relaxed flex-grow">
                    Secure long-term financing for your dream home. Our mortgage programs offer competitive rates and flexible terms tailored to your financial situation.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-gray-700">Up to €500,000</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-gray-700">Flexible repayment terms</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-gray-700">Competitive rates from 4.5%</span>
                    </div>
                  </div>

                  <Link 
                    to="/corporate-loan"
                    className="inline-flex items-center text-gray-900 font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Service 2: Refinance */}
            <FadeIn className="group" delay={0.1}>
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-vibrant-yellow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-vibrant-yellow-light to-transparent rounded-bl-full opacity-50" />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-vibrant-yellow-light rounded-xl mb-4">
                      <Zap className="h-7 w-7 text-gray-900" />
                    </div>
                    <h3 className="font-heading text-3xl text-gray-900 mb-2">Refinancing</h3>
                    <p className="font-paragraph text-sm text-vibrant-yellow-dark font-bold">Lower your payments</p>
                  </div>
                  
                  <p className="font-paragraph text-gray-600 mb-8 leading-relaxed flex-grow">
                    Refinance your existing mortgage to get better rates, lower monthly payments, or access your home equity for major expenses.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-gray-700">Save on monthly payments</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-gray-700">Access home equity</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-gray-700">Fast approval process</span>
                    </div>
                  </div>

                  <Link 
                    to="/credit-line"
                    className="inline-flex items-center text-gray-900 font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE AVS --- */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Why Choose AVS Finance
            </h2>
            <p className="font-paragraph text-lg text-gray-600 max-w-2xl mx-auto">
              We combine financial expertise with a deep understanding of the Estonian market
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <FadeIn className="group">
              <div className="p-8 rounded-xl bg-gradient-to-br from-vibrant-yellow-light to-yellow-100 border-2 border-vibrant-yellow hover:border-vibrant-yellow-dark transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg mb-6">
                  <Zap className="h-6 w-6 text-vibrant-yellow" />
                </div>
                <h3 className="font-heading text-2xl text-gray-900 mb-3">Fast & Flexible</h3>
                <p className="font-paragraph text-gray-600 leading-relaxed">
                  Get an indicative offer within two working days. We tailor solutions around your needs.
                </p>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn className="group" delay={0.1}>
              <div className="p-8 rounded-xl bg-gradient-to-br from-vibrant-yellow-light to-yellow-100 border-2 border-vibrant-yellow hover:border-vibrant-yellow-dark transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg mb-6">
                  <LineChart className="h-6 w-6 text-vibrant-yellow" />
                </div>
                <h3 className="font-heading text-2xl text-gray-900 mb-3">Competitive Rates</h3>
                <p className="font-paragraph text-gray-600 leading-relaxed">
                  Interest rates from 4.5% per annum with transparent pricing. No hidden fees.
                </p>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn className="group" delay={0.2}>
              <div className="p-8 rounded-xl bg-gradient-to-br from-vibrant-yellow-light to-yellow-100 border-2 border-vibrant-yellow hover:border-vibrant-yellow-dark transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg mb-6">
                  <Users className="h-6 w-6 text-vibrant-yellow" />
                </div>
                <h3 className="font-heading text-2xl text-gray-900 mb-3">Expert Support</h3>
                <p className="font-paragraph text-gray-600 leading-relaxed">
                  Dedicated relationship manager who understands your needs and recommends the best option.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- LOAN CALCULATOR SECTION --- */}
      <section className="w-full bg-gray-50 py-24 md:py-32">
        <LoanCalculator />
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://static.wixstatic.com/media/43558d_9fd0ed1bc37f4203910b34748d167c83~mv2.png?originWidth=1280&originHeight=704"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95" />
        </div>

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
              Ready to Own Your Home?
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards homeownership with competitive rates and flexible terms designed for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/application"
                className="inline-flex items-center justify-center px-10 py-4 bg-vibrant-yellow text-gray-900 font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg hover:shadow-vibrant-yellow/50"
              >
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-paragraph font-bold text-base rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
