import { Link } from 'react-router-dom';
import { ArrowRight, Target, Award, Users, TrendingUp, Zap, Shield } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our dealings, building trust through ethical practices.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in service delivery, ensuring every client receives exceptional financial solutions.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We view our clients as long-term partners, working collaboratively to achieve their business goals.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We continuously evolve our offerings to meet the changing needs of modern Estonian businesses.',
    },
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Founded',
      description: 'AVS Finance was established with a mission to support Estonian businesses with accessible corporate financing.',
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Expanded our services to include flexible credit lines, serving over 200 businesses across Estonia.',
    },
    {
      year: '2020',
      title: 'Growth',
      description: 'Reached €50 million in total financing provided, helping businesses navigate economic challenges.',
    },
    {
      year: '2024',
      title: 'Leadership',
      description: 'Recognized as a leading corporate finance provider in Estonia, serving over 500 active clients.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-24 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-dark-brown mb-8 leading-tight">
              About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">AVS Finance</span>
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-gray-600 leading-relaxed">
              We are a trusted financial partner dedicated to empowering Estonian businesses with the capital they need to grow, innovate, and succeed in today's competitive marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-cyan-900 py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn className="text-white">
              <h2 className="font-heading text-4xl md:text-5xl mb-8">
                Our Mission
              </h2>
              <p className="font-paragraph text-lg text-white/90 leading-relaxed">
                To provide accessible, transparent, and flexible corporate financing solutions that enable Estonian businesses to achieve their strategic objectives and drive economic growth. We believe that every business deserves a financial partner who understands their unique challenges and opportunities.
              </p>
            </FadeIn>

            <FadeIn className="text-white" delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl mb-8">
                Our Vision
              </h2>
              <p className="font-paragraph text-lg text-white/90 leading-relaxed">
                To be the most trusted and preferred corporate finance provider in Estonia, recognized for our commitment to client success, innovative solutions, and unwavering integrity. We envision a thriving business ecosystem where capital access is never a barrier to growth.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="font-paragraph text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full"
              >
                <value.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="font-heading text-2xl text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full bg-gray-50 py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="font-paragraph text-lg text-gray-600 max-w-2xl mx-auto">
              A decade of growth, innovation, and partnership
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-heading text-4xl mb-4">
                  {milestone.year}
                </div>
                <h3 className="font-heading text-xl text-gray-900 mb-3">
                  {milestone.title}
                </h3>
                <p className="font-paragraph text-base text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Our Expertise
            </h2>
            <p className="font-paragraph text-lg text-gray-600 max-w-2xl mx-auto">
              A team of experienced financial professionals dedicated to your success
            </p>
          </FadeIn>

          <FadeIn className="bg-gradient-to-r from-blue-600 to-cyan-500 p-12 md:p-16 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">50+</div>
                <p className="font-paragraph text-lg text-white/90">
                  Financial Experts
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">500+</div>
                <p className="font-paragraph text-lg text-white/90">
                  Active Clients
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">€100M+</div>
                <p className="font-paragraph text-lg text-white/90">
                  Financing Provided
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-gray-50 py-24 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Why Businesses Choose AVS Finance
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl mb-6">
                <Zap className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-heading text-2xl text-gray-900 mb-6">
                Local Expertise, Global Standards
              </h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed mb-6">
                We understand the Estonian business landscape intimately while maintaining international best practices in corporate finance. Our team combines local market knowledge with global financial expertise.
              </p>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                This unique combination allows us to provide solutions that are both relevant to your local context and competitive on a global scale.
              </p>
            </FadeIn>

            <FadeIn className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 h-full" delay={0.1}>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl mb-6">
                <Users className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="font-heading text-2xl text-gray-900 mb-6">
                Personalized Approach
              </h3>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed mb-6">
                We don't believe in one-size-fits-all solutions. Every business is unique, and so are our financing packages. Our dedicated account managers work closely with you to understand your specific needs and goals.
              </p>
              <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                From application to approval and beyond, you'll have a trusted advisor by your side every step of the way.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[120rem] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Partner with AVS Finance
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of Estonian businesses that trust us with their financing needs
            </p>
            <Link 
              to="/application"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-gray-900 font-paragraph font-semibold text-base rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            >
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
