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
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white"> <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12"> <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative order-2 lg:order-1"> <div className="absolute -top-10 -left-10 w-40 h-40 bg-vibrant-yellow-light rounded-full mix-blend-multiply filter blur-xl opacity-70" /> <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-beige rounded-full mix-blend-multiply filter blur-xl opacity-70" /> <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-vibrant-yellow-light to-accent-beige overflow-hidden shadow-2xl flex items-center justify-center"> <Image src="https://static.wixstatic.com/media/43558d_5acf63f09c70474ca3a5123010b05546~mv2.png?originWidth=320&originHeight=320" alt="Business professionals shaking hands over financing agreement" width={320} height={320} className="w-full h-full object-cover scale-105" /> </div> </motion.div> <div className="col-span-1 order-1 lg:order-2"> <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}> <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-vibrant-yellow-light/30 rounded-full border border-vibrant-yellow"> <span className="w-2 h-2 bg-vibrant-yellow rounded-full" /> <span className="font-paragraph text-xs font-bold text-dark-brown uppercase tracking-wider"> Smart Business Financing </span> </div> <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-dark-brown mb-6 tracking-tight leading-tight"> Financing Your <span className="text-vibrant-yellow">Business</span> Growth </h1> <p className="font-paragraph text-lg md:text-xl text-dark-brown-light mb-10 max-w-2xl leading-relaxed"> Get competitive business loans and flexible credit lines tailored to your needs. Fast approval, transparent terms, and expert support every step of the way. </p> <div className="flex flex-col sm:flex-row gap-4"> <Link to="/application" className="group inline-flex items-center justify-center px-10 py-4 bg-dark-brown text-white font-paragraph font-bold text-base rounded-lg hover:bg-dark-brown-light transition-all duration-300 shadow-lg"> Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /> </Link> <Link to="/about" className="inline-flex items-center justify-center px-10 py-4 border-2 border-dark-brown text-dark-brown font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-light transition-all duration-300"> Learn More </Link> </div> </motion.div> </div> </div> </div> </section>
      {/* --- SERVICES SECTION --- */}
      <section className="relative w-full bg-vibrant-yellow-light py-24 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
            {/* Section Header - Left */}
            <FadeIn className="col-span-12 lg:col-span-5">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6 leading-tight">
                Our Financing <span className="text-dark-brown">Solutions</span>
              </h2>
              <p className="font-paragraph text-lg text-dark-brown-light mb-8 leading-relaxed">
                Choose the perfect financing option for your business needs. We offer flexible terms and competitive rates.
              </p>
            </FadeIn>

            {/* Quick Stats - Right */}
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-2 gap-6">
                <FadeIn delay={0.1}>
                  <div className="bg-white rounded-2xl p-6 border-2 border-dark-brown/10">
                    <p className="font-heading text-4xl text-dark-brown mb-2">€500K</p>
                    <p className="font-paragraph text-sm text-dark-brown-light">Max Loan Amount</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="bg-white rounded-2xl p-6 border-2 border-dark-brown/10">
                    <p className="font-heading text-4xl text-dark-brown mb-2">2 Days</p>
                    <p className="font-paragraph text-sm text-dark-brown-light">Fast Approval</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service 1: Business Loans */}
            <FadeIn className="group">
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-dark-brown/10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-vibrant-yellow-light rounded-bl-3xl opacity-30" />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-vibrant-yellow rounded-2xl mb-6">
                      <TrendingUp className="h-8 w-8 text-dark-brown" />
                    </div>
                    <h3 className="font-heading text-3xl text-dark-brown mb-2">Business Loans</h3>
                    <p className="font-paragraph text-base text-dark-brown-light">Long-term financing for growth</p>
                  </div>
                  
                  <p className="font-paragraph text-dark-brown-light mb-8 leading-relaxed flex-grow">
                    Secure long-term financing for your business expansion. Competitive rates from 9.0% per annum + 6M EURIBOR with flexible repayment terms.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-vibrant-yellow flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-dark-brown-light">Up to €500,000</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-vibrant-yellow flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-dark-brown-light">Flexible repayment terms</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-vibrant-yellow flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-dark-brown-light">Fast approval process</span>
                    </div>
                  </div>

                  <Link 
                    to="/corporate-loan"
                    className="inline-flex items-center text-dark-brown font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    Explore Loans
                    <ArrowUpRight className="h-5 w-5 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Service 2: Credit Lines */}
            <FadeIn className="group" delay={0.1}>
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-dark-brown/10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-vibrant-yellow-light rounded-bl-3xl opacity-30" />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-vibrant-yellow rounded-2xl mb-6">
                      <Zap className="h-8 w-8 text-dark-brown" />
                    </div>
                    <h3 className="font-heading text-3xl text-dark-brown mb-2">Credit Lines</h3>
                    <p className="font-paragraph text-base text-dark-brown-light">Flexible working capital</p>
                  </div>
                  
                  <p className="font-paragraph text-dark-brown-light mb-8 leading-relaxed flex-grow">
                    Access flexible credit lines to manage cash flow. Draw funds as needed and pay interest only on what you use. Perfect for seasonal businesses.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-vibrant-yellow flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-dark-brown-light">Up to €400,000</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-vibrant-yellow flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-dark-brown-light">Draw as needed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-vibrant-yellow flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-sm text-dark-brown-light">Competitive rates</span>
                    </div>
                  </div>

                  <Link 
                    to="/credit-line"
                    className="inline-flex items-center text-dark-brown font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    Explore Credit Lines
                    <ArrowUpRight className="h-5 w-5 transition-transform" />
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
          
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6 leading-tight">
              Why Businesses Choose <span className="text-vibrant-yellow">AVS Finance</span>
            </h2>
            <p className="font-paragraph text-lg text-dark-brown-light max-w-3xl">
              We combine deep financial expertise with a genuine understanding of the Estonian business landscape. Our team is committed to making financing simple and accessible.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <FadeIn className="group">
              <div className="h-full p-8 rounded-2xl bg-white border-2 border-vibrant-yellow hover:border-dark-brown transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-vibrant-yellow rounded-xl mb-6">
                  <Zap className="h-7 w-7 text-dark-brown" />
                </div>
                <h3 className="font-heading text-2xl text-dark-brown mb-3">Fast & Simple</h3>
                <p className="font-paragraph text-dark-brown-light leading-relaxed">
                  Get an indicative offer within two working days. Our streamlined process makes financing hassle-free.
                </p>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn className="group" delay={0.1}>
              <div className="h-full p-8 rounded-2xl bg-white border-2 border-vibrant-yellow hover:border-dark-brown transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-vibrant-yellow rounded-xl mb-6">
                  <LineChart className="h-7 w-7 text-dark-brown" />
                </div>
                <h3 className="font-heading text-2xl text-dark-brown mb-3">Transparent Pricing</h3>
                <p className="font-paragraph text-dark-brown-light leading-relaxed">
                  Competitive rates with no hidden fees. We believe in clear, honest communication about costs.
                </p>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn className="group" delay={0.2}>
              <div className="h-full p-8 rounded-2xl bg-white border-2 border-vibrant-yellow hover:border-dark-brown transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-vibrant-yellow rounded-xl mb-6">
                  <Users className="h-7 w-7 text-dark-brown" />
                </div>
                <h3 className="font-heading text-2xl text-dark-brown mb-3">Expert Support</h3>
                <p className="font-paragraph text-dark-brown-light leading-relaxed">
                  Dedicated managers who understand your business and provide personalized recommendations.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* --- LOAN CALCULATOR SECTION --- */}
      <section className="w-full bg-vibrant-yellow-light py-24 md:py-32">
        <LoanCalculator />
      </section>
      <Footer />
    </div>
  );
}
