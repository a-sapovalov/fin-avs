import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowRight, TrendingUp, Users, LineChart, CheckCircle, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoanCalculator from '@/components/LoanCalculator';
import { formatEuropeanPercent } from '@/lib/format-number';

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

  return (
    <div className="min-h-screen bg-white text-dark-brown overflow-x-clip">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-vibrant-yellow origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      {/* --- HERO SECTION --- */}
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
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-secondary mb-12 tracking-tight text-left leading-tight">
                secured financing for legal entities registered in estonia.
              </h1>

              <div className="mb-12">
                <p className="font-paragraph text-secondary mb-6 text-lg md:text-xl font-normal">our financing solutions include:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-vibrant-yellow flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-secondary text-lg md:text-xl font-normal">annual interest from 9.5% plus 6-month euribor</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-vibrant-yellow flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-secondary text-lg md:text-xl font-normal">financing of up to 80% of collateral value</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-vibrant-yellow flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-secondary text-lg md:text-xl font-normal">flexible repayment terms</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-vibrant-yellow flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-secondary text-lg md:text-xl font-normal">straightforward application process</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-vibrant-yellow flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-secondary text-lg md:text-xl font-normal">dedicated client manager support</span>
                  </li>
                </ul>
              </div>

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
                <LoanCalculator />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- WHY CHOOSE AVS --- */}
      <section className="w-full py-24 md:py-32 border-b-2 border-dark-brown/10 bg-background">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6 leading-tight text-center">
              why choose avs
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <FadeIn className="group">
              <div className="h-full p-8 rounded-2xl border-2 border-dark-brown/10 bg-background">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-vibrant-yellow rounded-xl mb-6">
                  <LineChart className="h-7 w-7 text-dark-brown" />
                </div>
                <h3 className="font-heading text-dark-brown mb-3 text-3xl">competitive terms</h3>
                <p className="font-paragraph text-dark-brown-light text-lg">annual interest from 9,5% plus 6-month euribor, financing of up to 80% of the collateral value and flexible repayment terms.</p>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn className="group" delay={0.1}>
              <div className="h-full p-8 rounded-2xl bg-white border-2 border-dark-brown/10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-secondary">
                  <Zap className="h-7 w-7 text-dark-brown fill-secondary" />
                </div>
                <h3 className="font-heading text-dark-brown mb-3 text-3xl">efficient process</h3>
                <p className="font-paragraph text-dark-brown-light text-lg">
                  complete the application process and receive an indicative offer within two business days.
                </p>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn className="group" delay={0.2}>
              <div className="h-full p-8 rounded-2xl border-2 border-dark-brown/10 bg-background">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-secondary">
                  <Users className="h-7 w-7 text-dark-brown fill-secondary" />
                </div>
                <h3 className="font-heading text-dark-brown mb-3 text-3xl">personal support</h3>
                <p className="font-paragraph text-dark-brown-light text-lg">a dedicated client manager to guide the process and understand your business needs.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* --- WHAT AVS OFFERS --- */}
      <section className="w-full py-24 md:py-32 px-0 bg-secondary">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="mb-20 text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-primary">what avs offers</h2>
          </FadeIn>
          
          {/* Two-column layout with better proportions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Loans Card - Left */}
            <FadeIn className="group flex flex-col">
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-4 border-vibrant-yellow/50 hover:border-vibrant-yellow flex flex-col">
                <div className="relative w-full h-64 md:h-72 overflow-hidden bg-secondary flex-shrink-0">
                  <Image
                    src="https://static.wixstatic.com/media/nsplsh_2db62b2cf4074f92a0b9ad6ffe3e3e5b~mv2.jpg"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    originWidth={5596}
                    originHeight={3731}
                    alt="Loans financing"
                  />
                </div>
                <div className="p-10 md:p-12 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="font-heading text-3xl md:text-4xl text-dark-brown mb-2">loans</h3>
                    <div className="w-12 h-1 bg-vibrant-yellow rounded-full"></div>
                  </div>
                  <p className="font-paragraph text-dark-brown-light mb-10 leading-relaxed flex-grow text-lg">loans for legal entities that need capital for refinancing, investment, property-backed projects, working capital or other business purposes.</p>
                  <Link
                    to="/loans"
                    className="inline-flex items-center text-dark-brown font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    explore loans
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            {/* Credit Lines Card - Right */}
            <FadeIn className="group flex flex-col" delay={0.1}>
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-4 border-vibrant-yellow/50 hover:border-vibrant-yellow flex flex-col">
                <div className="relative w-full h-64 md:h-72 overflow-hidden bg-secondary flex-shrink-0">
                  <Image
                    src="https://static.wixstatic.com/media/nsplsh_2d67396172463661587834~mv2.jpg"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    originWidth={4801}
                    originHeight={6826}
                    alt="Credit lines financing"
                  />
                </div>
                <div className="p-10 md:p-12 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="font-heading text-3xl md:text-4xl text-dark-brown mb-2">credit lines</h3>
                    <div className="w-12 h-1 bg-vibrant-yellow rounded-full"></div>
                  </div>
                  <p className="font-paragraph text-dark-brown-light mb-10 leading-relaxed flex-grow text-lg">flexible pre-approved credit for legal entities that want funds available when needed. use the limit repeatedly, draw only what you need, and pay interest only on the outstanding drawn amount.</p>
                  <Link
                    to="/credit-line"
                    className="inline-flex items-center text-dark-brown font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    explore credit lines
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
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
