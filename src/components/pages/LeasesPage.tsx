import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

export default function LeasesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const benefits = [
    'Flexible lease terms tailored to your business needs',
    'Competitive rates with transparent pricing',
    'Quick approval process and fast funding',
    'Equipment options across multiple industries',
    'Professional support throughout the lease term',
    'Flexible end-of-lease options',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-dark-brown text-vibrant-yellow py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-vibrant-yellow leading-tight">
                Equipment Leasing Solutions
              </h1>
              <p className="font-paragraph text-lg text-vibrant-yellow-light leading-relaxed">
                Acquire the equipment your business needs without the burden of ownership. Our flexible leasing solutions help you preserve capital and maintain operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/application"
                  className="inline-flex items-center justify-center px-8 py-3 bg-vibrant-yellow text-dark-brown font-heading font-bold rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#details"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-vibrant-yellow text-vibrant-yellow font-heading font-bold rounded-lg hover:bg-dark-brown-light transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div variants={itemVariants} className="relative h-96 md:h-full">
              <Image
                src="https://static.wixstatic.com/media/nsplsh_44d26ada92584cfdb2a9eca9db71f544~mv2.jpg"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-lg"
                originWidth={5184}
                originHeight={3456} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Key Benefits Section */}
      <section id="details" className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-brown">
                Why Choose Our Leasing?
              </h2>
              <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl mx-auto">
                We provide comprehensive leasing solutions designed to support your business growth.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-6 bg-vibrant-yellow-light rounded-lg border border-vibrant-yellow hover:shadow-lg transition-shadow duration-300"
                >
                  <CheckCircle className="h-6 w-6 text-dark-brown flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-dark-brown leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="w-full py-20 md:py-32 bg-vibrant-yellow-light">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-brown">
                How Our Leasing Works
              </h2>
              <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl mx-auto">
                A simple, transparent process to get your equipment quickly.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
              variants={containerVariants}
            >
              {[
                { step: '1', title: 'Apply', description: 'Submit your leasing application with equipment details' },
                { step: '2', title: 'Review', description: 'Our team evaluates your request and requirements' },
                { step: '3', title: 'Approve', description: 'Quick approval with competitive lease terms' },
                { step: '4', title: 'Deliver', description: 'Equipment delivered and installed at your location' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-lg border-2 border-dark-brown text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-dark-brown text-vibrant-yellow font-heading font-bold rounded-full text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-dark-brown">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-sm text-dark-brown-light">
                      {item.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-dark-brown" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Lease Types Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-brown">
                Types of Leases We Offer
              </h2>
              <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl mx-auto">
                Choose the lease structure that best fits your business needs.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {[
                {
                  title: 'Operating Leases',
                  description: 'Short to medium-term leases with maintenance included. Perfect for businesses that need flexibility and want to upgrade equipment regularly.',
                  features: ['Maintenance included', 'Flexible terms', 'Easy upgrades', 'Off-balance sheet'],
                },
                {
                  title: 'Finance Leases',
                  description: 'Long-term leases with ownership transfer options. Ideal for equipment you plan to use for an extended period.',
                  features: ['Ownership option', 'Long-term stability', 'Tax benefits', 'Customizable terms'],
                },
              ].map((lease, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 bg-vibrant-yellow-light rounded-lg border-2 border-dark-brown space-y-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="font-heading text-2xl font-bold text-dark-brown">
                    {lease.title}
                  </h3>
                  <p className="font-paragraph text-dark-brown-light leading-relaxed">
                    {lease.description}
                  </p>
                  <ul className="space-y-3">
                    {lease.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dark-brown flex-shrink-0" />
                        <span className="font-paragraph text-dark-brown">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full bg-dark-brown text-vibrant-yellow py-16 md:py-24">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-vibrant-yellow">
                Ready to Lease?
              </h2>
              <p className="font-paragraph text-lg text-vibrant-yellow-light max-w-2xl mx-auto">
                Get started with our leasing solutions today. Our team is ready to help you find the perfect equipment lease for your business.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/application"
                className="inline-flex items-center justify-center px-8 py-3 bg-vibrant-yellow text-dark-brown font-heading font-bold rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg"
              >
                Apply for a Lease
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-vibrant-yellow text-vibrant-yellow font-heading font-bold rounded-lg hover:bg-dark-brown-light transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
