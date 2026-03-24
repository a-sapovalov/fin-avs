import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowRight, TrendingUp, Users, LineChart, CheckCircle, Zap, Shield, ArrowUpRight } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-white text-dark-brown overflow-x-clip">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-vibrant-yellow origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      {/* --- HERO SECTION --- */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-secondary border-b-2 border-dark-brown/10">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Hero Content - Left */}
            <div className="col-span-12 lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-dark-brown mb-8 tracking-tight leading-tight">
                  competitive terms. flexible financing. personal service.
                </h1>

                <p className="font-paragraph text-lg md:text-xl text-dark-brown-light mb-10 max-w-2xl leading-relaxed">
                  financing for businesses, whatever the need.
                </p>

                <p className="font-paragraph text-base md:text-lg text-dark-brown mb-10 max-w-2xl leading-relaxed">
                  annual interest from 9,5%, flexible financing solutions, a decision within two business days, and a dedicated client manager who understands your business.
                </p>

                <Link 
                  to="/application"
                  className="group inline-flex items-center justify-center px-10 py-4 bg-dark-brown text-vibrant-yellow font-paragraph font-bold text-base rounded-lg hover:bg-dark-brown-light transition-all duration-300"
                >
                  submit application
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual - Right */}
            <motion.div 
              className="col-span-12 lg:col-span-6 relative h-full min-h-[400px] flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <LoanCalculator />
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- WHY CHOOSE AVS --- */}
      <section className="w-full py-24 md:py-32 bg-secondary border-b-2 border-dark-brown/10">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6 leading-tight">
              why choose avs
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <FadeIn className="group">
              <div className="h-full p-8 rounded-2xl border-2 border-dark-brown/10 bg-secondary">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-background">
                  <Zap className="h-7 w-7 text-dark-brown fill-secondary" />
                </div>
                <h3 className="font-heading text-2xl text-dark-brown mb-3">competitive terms</h3>
                <p className="font-paragraph text-dark-brown-light leading-relaxed">
                  annual interest from 9,5%, ltv up to 80% and period of your choosing.
                </p>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn className="group" delay={0.1}>
              <div className="h-full p-8 rounded-2xl bg-white border-2 border-dark-brown/10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-vibrant-yellow rounded-xl mb-6">
                  <LineChart className="h-7 w-7 text-dark-brown" />
                </div>
                <h3 className="font-heading text-2xl text-dark-brown mb-3">fast financing decisions</h3>
                <p className="font-paragraph text-dark-brown-light leading-relaxed">
                  a financing decision within two business days.
                </p>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn className="group" delay={0.2}>
              <div className="h-full p-8 rounded-2xl border-2 border-dark-brown/10 bg-secondary">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-background">
                  <Users className="h-7 w-7 text-dark-brown fill-secondary" />
                </div>
                <h3 className="font-heading text-2xl text-dark-brown mb-3">dedicated client manager</h3>
                <p className="font-paragraph text-dark-brown-light leading-relaxed">
                  a dedicated contact who takes the time to understand your business.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* --- WHAT AVS OFFERS --- */}
      <section className="w-full py-24 md:py-32 bg-secondary">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6 leading-tight">
              what avs offers
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Loans */}
            <FadeIn className="group">
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-vibrant-yellow">
                <div className="absolute top-0 right-0 w-40 h-40 bg-vibrant-yellow rounded-bl-3xl opacity-20" />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-vibrant-yellow rounded-2xl mb-6">
                      <TrendingUp className="h-8 w-8 text-dark-brown" />
                    </div>
                    <h3 className="font-heading text-3xl text-dark-brown mb-2">loans</h3>
                  </div>
                  
                  <p className="font-paragraph text-dark-brown-light mb-8 leading-relaxed flex-grow">
                    financing for businesses, whatever the need – whether for refinancing, investment, a property flip or other ventues. the client decides.
                  </p>

                  <Link 
                    to="/corporate-loan"
                    className="inline-flex items-center text-dark-brown font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    explore loans
                    <ArrowUpRight className="h-5 w-5 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Credit Lines */}
            <FadeIn className="group" delay={0.1}>
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-vibrant-yellow">
                <div className="absolute top-0 right-0 w-40 h-40 bg-vibrant-yellow rounded-bl-3xl opacity-20" />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-vibrant-yellow rounded-2xl mb-6">
                      <Zap className="h-8 w-8 text-dark-brown" />
                    </div>
                    <h3 className="font-heading text-3xl text-dark-brown mb-2">credit lines</h3>
                  </div>
                  
                  <p className="font-paragraph text-dark-brown-light mb-8 leading-relaxed flex-grow">
                    pre-approved financing for businesses that can be used at any time, repeatedly, and exactly when needed. interest is charged on the amount in use.
                  </p>

                  <Link 
                    to="/credit-line"
                    className="inline-flex items-center text-dark-brown font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    explore credit lines
                    <ArrowUpRight className="h-5 w-5 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Leases */}
            <FadeIn className="group" delay={0.2}>
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-vibrant-yellow">
                <div className="absolute top-0 right-0 w-40 h-40 bg-vibrant-yellow rounded-bl-3xl opacity-20" />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-vibrant-yellow rounded-2xl mb-6">
                      <Shield className="h-8 w-8 text-dark-brown" />
                    </div>
                    <h3 className="font-heading text-3xl text-dark-brown mb-2">leases</h3>
                  </div>
                  
                  <p className="font-paragraph text-dark-brown-light mb-8 leading-relaxed flex-grow">
                    leasing for businesses, whatever the need – whether for equipment, vehicles or other business assets. the client decides.
                  </p>

                  <Link 
                    to="/application"
                    className="inline-flex items-center text-dark-brown font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    explore leases
                    <ArrowUpRight className="h-5 w-5 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
