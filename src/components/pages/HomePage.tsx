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
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-white">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-yellow-light rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-vibrant-yellow-light rounded-full blur-3xl opacity-5" />
        </div>

        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Hero Content - Left Side */}
            <div className="col-span-12 lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span className="font-paragraph text-sm font-bold text-vibrant-yellow uppercase tracking-wider">
                    Smart Business Financing
                  </span>
                </motion.div>

                <motion.h1 
                  className="font-heading text-6xl md:text-7xl lg:text-8xl text-dark-brown mb-8 tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Grow Your Business
                </motion.h1>

                <motion.p 
                  className="font-paragraph text-lg md:text-xl text-dark-brown-light mb-12 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Access competitive business loans and flexible credit lines tailored to your company's growth. Fast approval, transparent pricing, and dedicated support.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/application"
                      className="group inline-flex items-center justify-center px-10 py-4 bg-dark-brown text-white font-paragraph font-bold text-base rounded-lg hover:bg-dark-brown-light transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/about"
                      className="inline-flex items-center justify-center px-10 py-4 border-2 border-dark-brown text-dark-brown font-paragraph font-bold text-base rounded-lg hover:bg-dark-brown hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Trust indicators */}
                <motion.div 
                  className="mt-16 flex flex-col sm:flex-row gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {[
                    { label: "Fast Approval", value: "2 Days" },
                    { label: "Competitive Rates", value: "From 9.0%" },
                    { label: "Up to", value: "€500K" }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-heading text-2xl md:text-3xl text-dark-brown font-bold">{stat.value}</span>
                      <span className="font-paragraph text-sm text-dark-brown-light">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Visual - Right Side */}
            <motion.div 
              className="col-span-12 lg:col-span-6 relative h-full min-h-[400px] flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <motion.div 
                className="relative w-full h-full flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Main card with features */}
                <div className="relative w-full max-w-md">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-vibrant-yellow to-vibrant-yellow-dark rounded-3xl blur-2xl opacity-20"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-vibrant-yellow-light">
                    {/* Decorative accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-vibrant-yellow-light rounded-bl-3xl opacity-30" />
                    
                    <div className="relative space-y-8">
                      <div>
                        <h3 className="font-heading text-2xl text-dark-brown mb-2">Why Choose AVS</h3>
                        <p className="font-paragraph text-sm text-dark-brown-light">Everything you need for business growth</p>
                      </div>

                      <div className="space-y-4">
                        {[
                          { icon: Zap, title: "Instant Decisions", desc: "Get approved in 2 working days" },
                          { icon: LineChart, title: "Competitive Rates", desc: "Transparent pricing, no hidden fees" },
                          { icon: Shield, title: "Flexible Terms", desc: "Customized for your business" }
                        ].map((item, idx) => (
                          <motion.div 
                            key={idx}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                          >
                            <div className="w-10 h-10 bg-vibrant-yellow rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                              <item.icon className="h-5 w-5 text-dark-brown" />
                            </div>
                            <div>
                              <p className="font-paragraph text-sm font-bold text-dark-brown">{item.title}</p>
                              <p className="font-paragraph text-xs text-dark-brown-light">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        className="pt-4 border-t border-vibrant-yellow-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <Link 
                          to="/corporate-loan"
                          className="inline-flex items-center text-dark-brown font-paragraph font-bold text-sm hover:text-vibrant-yellow transition-colors duration-300 group"
                        >
                          Explore Business Loans
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    </div>
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
