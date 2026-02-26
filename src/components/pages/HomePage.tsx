// HPI 1.7-G
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowRight, Shield, TrendingUp, Users, ArrowUpRight, Building2, LineChart } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoanCalculator from '@/components/LoanCalculator';

// --- Utility Components for Design System ---

const SectionDivider = () => (
  <div className="w-full h-px bg-primary/10 my-0" />
);

const VerticalDivider = ({ className }: { className?: string }) => (
  <div className={`hidden md:block w-px bg-primary/10 h-full absolute right-0 top-0 ${className}`} />
);

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

const ParallaxText = ({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) => {
  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="font-heading text-[12vw] leading-[0.8] text-primary/5 uppercase font-bold whitespace-nowrap flex flex-nowrap items-center">

        <span className="block mr-12">{children}</span>
        <span className="block mr-12">{children}</span>
        <span className="block mr-12">{children}</span>
      </motion.div>
    </div>
  );
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax for Hero
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip selection:bg-primary selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-gold origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative w-full min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40vw] h-[100vh] bg-primary/5" />
          <div className="absolute top-[20%] right-[10%] w-px h-[60%] bg-primary/10" />
          <div className="absolute top-[20%] right-[30%] w-px h-[60%] bg-primary/10" />
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
                <div className="inline-flex items-center gap-3 mb-8 border-b border-primary/20 pb-2">
                  <span className="w-2 h-2 bg-accent-gold rounded-full" />
                  <span className="font-paragraph text-sm tracking-[0.2em] uppercase text-primary font-semibold">
                    Estonian Corporate Finance
                  </span>
                </div>

                <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary leading-[0.95] mb-10 tracking-tight">
                  Capital for <br />
                  <span className="italic text-secondary font-light">the Bold.</span>
                </h1>

                <p className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-2xl mb-12 leading-relaxed font-light">
                  AVS Finance provides tailored corporate loans and flexible credit lines designed to fuel growth and stability for businesses across Estonia.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <Link 
                    to="/application"
                    className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-paragraph text-lg tracking-wide transition-all duration-500 hover:bg-primary/90"
                  >
                    <span className="relative z-10 flex items-center">
                      Apply for Funding
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <Link 
                    to="/about"
                    className="group inline-flex items-center justify-center px-10 py-5 border border-primary/20 text-primary font-paragraph text-lg tracking-wide hover:bg-primary/5 transition-all duration-300"
                  >
                    Our Philosophy
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual / Logo */}
            <motion.div 
              className="col-span-12 lg:col-span-5 relative h-full min-h-[400px] flex items-center justify-center lg:justify-end"
              style={{ y: yHero, opacity: opacityHero }}
            >
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-12 bg-white shadow-2xl shadow-primary/5 border border-primary/5">
                <div className="absolute inset-0 border border-primary/10 m-4" />
                <Image 
                  src="https://static.wixstatic.com/media/43558d_640f34e2ac77424097e80e852f2a7342~mv2.png"
                  alt="AVS Finance Seal of Trust"
                  width={600}
                  className="w-full h-auto object-contain p-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* --- TICKER / TRUST SECTION --- */}

      {/* --- SERVICES SECTION (Dark Mode / Sticky) --- */}
      <section className="relative w-full bg-primary text-primary-foreground py-32 overflow-clip">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-gold blur-[150px]" />
        </div>

        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-12 lg:gap-24">
            
            {/* Sticky Header */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-32">
                <FadeIn>
                  <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
                    Financial <br /> Architecture
                  </h2>
                  <p className="font-paragraph text-lg text-white/70 mb-12 leading-relaxed max-w-sm">
                    We structure financing solutions with the same precision you apply to your business operations. Choose the instrument that fits your trajectory.
                  </p>
                  <div className="hidden lg:block w-12 h-1 bg-accent-gold" />
                </FadeIn>
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-24">
              
              {/* Service 1: Corporate Loans */}
              <FadeIn className="group relative">
                <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-px bg-white/10 group-hover:bg-accent-gold/50 transition-colors duration-500" />
                <div className="pl-8 md:pl-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-6xl text-white/10 group-hover:text-accent-gold/20 transition-colors duration-500">01</span>
                    <h3 className="font-heading text-4xl text-white">Corporate Loans</h3>
                  </div>
                  
                  <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-sm">
                    <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <Image 
                      src="https://static.wixstatic.com/media/43558d_b90927a494f34e5a96501bf8eabe1189~mv2.png?originWidth=768&originHeight=384"
                      alt="Corporate Office Meeting"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <p className="font-paragraph text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                    Secure long-term financing for major investments, expansions, or operational needs. Our corporate loans offer competitive rates and terms tailored to your fiscal cycle.
                  </p>

                  <Link 
                    to="/corporate-loan"
                    className="inline-flex items-center text-accent-gold font-paragraph text-lg hover:text-white transition-colors duration-300"
                  >
                    Explore Corporate Loans
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </FadeIn>

              {/* Service 2: Credit Lines */}
              <FadeIn className="group relative" delay={0.2}>
                <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-px bg-white/10 group-hover:bg-accent-gold/50 transition-colors duration-500" />
                <div className="pl-8 md:pl-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-6xl text-white/10 group-hover:text-accent-gold/20 transition-colors duration-500">02</span>
                    <h3 className="font-heading text-4xl text-white">Credit Lines</h3>
                  </div>
                  
                  <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-sm">
                    <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <Image 
                      src="https://static.wixstatic.com/media/43558d_e368ea1835fa4042ab690fed2f1588a8~mv2.png?originWidth=768&originHeight=384"
                      alt="Financial Analysis"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <p className="font-paragraph text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                    Access flexible revolving credit to manage cash flow, seize immediate opportunities, and maintain operational stability without the rigidity of fixed loans.
                  </p>

                  <Link 
                    to="/credit-line"
                    className="inline-flex items-center text-accent-gold font-paragraph text-lg hover:text-white transition-colors duration-300"
                  >
                    Explore Credit Lines
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>
      {/* --- WHY CHOOSE AVS (Editorial Grid) --- */}
      <section className="w-full bg-background py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          
          <FadeIn className="mb-24 text-center md:text-left">
            <h2 className="font-heading text-5xl md:text-6xl text-primary mb-6">
              The AVS Standard
            </h2>
            <p className="font-paragraph text-xl text-foreground/70 max-w-2xl">
              We combine financial expertise with a deep understanding of the Estonian market to deliver a service that is as reliable as it is refined.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-primary/10">
            
            {/* Feature 1 */}
            <div className="relative p-12 group hover:bg-primary/5 transition-colors duration-500">
              <VerticalDivider />
              <div className="mb-8">
                <Shield className="h-12 w-12 text-primary stroke-1" />
              </div>
              <h3 className="font-heading text-3xl text-primary mb-4">Trusted Expertise</h3>
              <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                Years of experience serving Estonian businesses with reliable financial solutions. We understand the local landscape intimately.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative p-12 group hover:bg-primary/5 transition-colors duration-500">
              <VerticalDivider />
              <div className="mb-8">
                <LineChart className="h-12 w-12 text-primary stroke-1" />
              </div>
              <h3 className="font-heading text-3xl text-primary mb-4">Competitive Rates</h3>
              <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                Transparent pricing and favorable terms designed to support your business growth, not hinder it with hidden fees.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative p-12 group hover:bg-primary/5 transition-colors duration-500">
              <div className="mb-8">
                <Users className="h-12 w-12 text-primary stroke-1" />
              </div>
              <h3 className="font-heading text-3xl text-primary mb-4">Personalized Service</h3>
              <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                Dedicated support and tailored solutions. You are not just an account number; you are a partner in growth.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* --- LOAN CALCULATOR SECTION --- */}
      <section className="w-full bg-background py-24 border-t border-primary/10">
        <LoanCalculator />
      </section>
      {/* --- IMMERSIVE CTA SECTION --- */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://static.wixstatic.com/media/43558d_9fd0ed1bc37f4203910b34748d167c83~mv2.png?originWidth=1280&originHeight=704"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        </div>

        <div className="relative z-10 w-full max-w-[100rem] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight">
              Ready to Ascend?
            </h2>
            <p className="font-paragraph text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light">
              Take the first step towards securing the financing your business needs to reach its next milestone.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/application"
                className="inline-flex items-center justify-center px-12 py-6 bg-accent-gold text-primary font-paragraph text-lg font-semibold tracking-wide rounded-sm hover:bg-white transition-all duration-300"
              >
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-12 py-6 border border-white/30 text-white font-paragraph text-lg tracking-wide rounded-sm hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
}