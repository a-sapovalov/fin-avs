import React, { useRef, useState, useEffect } from 'react';
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

const AnimatedCounter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const TextReveal = ({ text, delay = 0, className }: { text: string, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {text}
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
    <div className="min-h-screen bg-white text-dark-brown overflow-x-clip">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-vibrant-yellow origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-gradient-to-br from-dark-brown via-dark-brown-light to-dark-brown">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Floating orbs with complex animations */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-vibrant-yellow-light to-yellow-200 rounded-full blur-3xl opacity-15"
            animate={{ 
              y: [0, 40, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-vibrant-yellow to-transparent rounded-full blur-3xl opacity-20"
            animate={{ 
              y: [0, -40, 0],
              x: [0, -15, 0],
              scale: [1, 0.95, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-vibrant-yellow-light to-transparent rounded-full blur-3xl opacity-10"
            animate={{ 
              x: [0, 30, 0],
              y: [0, 15, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Additional subtle orb */}
          <motion.div 
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-vibrant-yellow-light to-transparent rounded-full blur-3xl opacity-5"
            animate={{ 
              y: [0, -30, 0],
              x: [0, 25, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Hero Content */}
            <div className="col-span-12 lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-vibrant-yellow-light/20 border border-vibrant-yellow-light rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-vibrant-yellow rounded-full" 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-paragraph text-xs font-bold text-vibrant-yellow uppercase tracking-wider">
                    Business Financing Solutions
                  </span>
                </motion.div>

                <motion.h1 
                  className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Business Financing Made <motion.span 
                    className="text-vibrant-yellow inline-block"
                    animate={{ 
                      textShadow: [
                        "0px 0px 0px rgba(230, 203, 163, 0)",
                        "0px 0px 20px rgba(230, 203, 163, 0.5)",
                        "0px 0px 0px rgba(230, 203, 163, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Simple
                  </motion.span>
                </motion.h1>

                <motion.p 
                  className="font-paragraph text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  AVS Finance provides competitive business loans and credit lines exclusively for businesses. Starting from 9.0% per annum + 6 month EURIBOR, with flexible terms tailored to your business needs.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/application"
                      className="group inline-flex items-center justify-center px-10 py-4 bg-vibrant-yellow text-dark-brown font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg hover:shadow-vibrant-yellow/50"
                    >
                      Get Pre-Approved
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/about"
                      className="inline-flex items-center justify-center px-10 py-4 border-2 border-vibrant-yellow-light text-white font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow/10 hover:border-vibrant-yellow transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div 
              className="col-span-12 lg:col-span-5 relative h-full min-h-[300px] flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                className="relative w-full max-w-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-vibrant-yellow to-vibrant-yellow-dark rounded-3xl blur-2xl opacity-30"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative bg-white rounded-3xl p-8 backdrop-blur-sm opacity-[1] border border-vibrant-yellow-light overflow-hidden">
                    <Image 
                      src="https://static.wixstatic.com/media/43558d_9021324303bd4415a38b7488d02f78d6~mv2.png?originWidth=576&originHeight=576"
                      alt="Business loans and finance vector illustration"
                      width={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- SERVICES SECTION --- */}
      <section className="relative w-full bg-vibrant-yellow-light py-24 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6">
              Business Financing Solutions
            </h2>
            <p className="font-paragraph text-lg text-dark-brown max-w-2xl mx-auto">
              Choose the business loan or credit line option that works best for your company
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Service 1: Business Loans */}
            <FadeIn className="group" delay={0}>
              <motion.div 
                className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-vibrant-yellow"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-vibrant-yellow-light to-transparent rounded-bl-full opacity-50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-6">
                    <motion.div 
                      className="inline-flex items-center justify-center w-14 h-14 bg-vibrant-yellow-light rounded-xl mb-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <TrendingUp className="h-7 w-7 text-dark-brown" />
                    </motion.div>
                    <h3 className="font-heading text-3xl text-dark-brown mb-2">Business Loans</h3>
                    <p className="font-paragraph text-sm text-vibrant-yellow-dark font-bold">Long-term financing for businesses</p>
                  </div>
                  
                  <p className="font-paragraph text-dark-brown-light mb-8 leading-relaxed flex-grow">
                    Secure long-term financing for your business growth. Our loan programs offer competitive rates starting from 9.0% per annum + 6 month EURIBOR with flexible terms tailored to your business needs.
                  </p>

                  <div className="space-y-3 mb-8">
                    {["Up to €500,000", "Flexible repayment terms", "From 9.0% + 6M EURIBOR"].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-vibrant-yellow flex-shrink-0 mt-0.5" />
                        <span className="font-paragraph text-sm text-dark-brown-light">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link 
                    to="/corporate-loan"
                    className="inline-flex items-center text-dark-brown font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>

            {/* Service 2: Credit Lines */}
            <FadeIn className="group" delay={0.1}>
              <motion.div 
                className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-vibrant-yellow"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-vibrant-yellow-light to-transparent rounded-bl-full opacity-50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-6">
                    <motion.div 
                      className="inline-flex items-center justify-center w-14 h-14 bg-vibrant-yellow-light rounded-xl mb-4"
                      whileHover={{ rotate: -10, scale: 1.1 }}
                    >
                      <Zap className="h-7 w-7 text-dark-brown" />
                    </motion.div>
                    <h3 className="font-heading text-3xl text-dark-brown mb-2">Credit Lines</h3>
                    <p className="font-paragraph text-sm text-vibrant-yellow-dark font-bold">Flexible working capital</p>
                  </div>
                  
                  <p className="font-paragraph text-dark-brown-light mb-8 leading-relaxed flex-grow">
                    Access flexible credit lines to manage your business cash flow. Draw funds as needed with competitive rates and pay interest only on what you use.
                  </p>

                  <div className="space-y-3 mb-8">
                    {["Up to €400,000", "Draw as needed", "Fast approval process"].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-vibrant-yellow flex-shrink-0 mt-0.5" />
                        <span className="font-paragraph text-sm text-dark-brown-light">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link 
                    to="/credit-line"
                    className="inline-flex items-center text-dark-brown font-paragraph font-bold text-base hover:text-vibrant-yellow transition-colors duration-300 group-hover:gap-2 gap-1"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* --- WHY CHOOSE AVS --- */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6">
              Why Choose AVS Finance
            </h2>
            <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl mx-auto">
              We combine financial expertise with a deep understanding of the Estonian market
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              { icon: Zap, title: "Fast & Flexible", desc: "Get an indicative offer within two working days. We tailor solutions around your needs." },
              { icon: LineChart, title: "Competitive Rates", desc: "Interest rates from 4.5% per annum with transparent pricing. No hidden fees." },
              { icon: Users, title: "Expert Support", desc: "Dedicated manager who understands your needs and recommends the best option." }
            ].map((feature, idx) => (
              <FadeIn className="group" delay={idx * 0.1} key={idx}>
                <motion.div 
                  className="p-8 rounded-xl bg-gradient-to-br from-vibrant-yellow-light to-yellow-100 border-2 border-vibrant-yellow hover:border-vibrant-yellow-dark transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <feature.icon className="h-6 w-6 text-vibrant-yellow" />
                  </motion.div>
                  <h3 className="font-heading text-2xl text-dark-brown mb-3">{feature.title}</h3>
                  <p className="font-paragraph text-dark-brown-light leading-relaxed">{feature.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* --- LOAN CALCULATOR SECTION --- */}
      <section className="w-full bg-gray-50 py-24 md:py-32">
        <LoanCalculator />
      </section>
      <Footer />
    </div>
  );
}
