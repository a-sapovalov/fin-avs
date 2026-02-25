import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CreditLinePage() {
  const benefits = [
    'Access funds only when you need them',
    'Pay interest only on the amount used',
    'Revolving credit that replenishes as you repay',
    'Credit limits from €25,000 to €2,000,000',
    'Quick access to funds within 24 hours',
    'Flexible terms with no fixed repayment schedule',
  ];

  const eligibility = [
    'Active business registered in Estonia',
    'Minimum 1 year of operational history',
    'Consistent revenue and positive cash flow',
    'Good credit standing with no recent defaults',
    'Clear business purpose for credit line usage',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 pt-32 pb-24">
        <div className="grid grid-cols-12 gap-24 items-center">
          <motion.div 
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-accent-gold" />
              <span className="font-paragraph text-lg text-secondary uppercase tracking-wider">
                Flexible Financing
              </span>
            </div>
            <h1 className="font-heading text-6xl lg:text-7xl text-primary mb-8">
              Credit Lines for Operational Flexibility
            </h1>
            <p className="font-paragraph text-xl text-foreground leading-relaxed mb-12">
              Maintain financial agility with a revolving credit line that gives you instant access to working capital whenever opportunities or challenges arise.
            </p>
            <Link 
              to="/application"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-paragraph text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Apply for a Credit Line
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-primary p-12 rounded-lg">
              <h3 className="font-heading text-3xl text-primary-foreground mb-6">
                Credit Line Overview
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-paragraph text-sm text-primary-foreground/70 mb-2">Credit Limit</p>
                  <p className="font-heading text-2xl text-primary-foreground">€25,000 - €2,000,000</p>
                </div>
                <div>
                  <p className="font-paragraph text-sm text-primary-foreground/70 mb-2">Interest Rate</p>
                  <p className="font-heading text-2xl text-primary-foreground">From 5.5% per annum</p>
                </div>
                <div>
                  <p className="font-paragraph text-sm text-primary-foreground/70 mb-2">Access Time</p>
                  <p className="font-heading text-2xl text-primary-foreground">Within 24 hours</p>
                </div>
                <div>
                  <p className="font-paragraph text-sm text-primary-foreground/70 mb-2">Repayment</p>
                  <p className="font-heading text-2xl text-primary-foreground">Flexible, revolving</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="w-full bg-primary/5 py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-primary mb-6">
              Key Benefits
            </h2>
            <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
              Experience the flexibility and convenience of revolving credit
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="col-span-12 md:col-span-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 bg-background p-8 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-accent-gold flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-lg text-foreground leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-24">
        <div className="grid grid-cols-12 gap-16">
          <motion.div 
            className="col-span-12 lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-primary mb-8">
              What is a Credit Line?
            </h2>
            <div className="space-y-6">
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                A credit line is a flexible financing solution that provides your business with access to a predetermined amount of capital that you can draw upon as needed. Unlike a traditional loan where you receive a lump sum upfront, a credit line allows you to borrow only what you need, when you need it.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                This revolving credit facility is perfect for managing cash flow fluctuations, covering unexpected expenses, seizing time-sensitive opportunities, or bridging gaps between receivables and payables. As you repay the borrowed amount, your available credit replenishes, giving you continuous access to working capital.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                With AVS Finance's credit line, you gain financial flexibility without the commitment of a full loan. You only pay interest on the funds you actually use, making it a cost-effective solution for businesses that need reliable access to capital.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="col-span-12 lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-primary mb-8">
              Eligibility Criteria
            </h2>
            <div className="space-y-4">
              {eligibility.map((criterion, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-lg text-foreground leading-relaxed">
                    {criterion}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-primary/5 py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-primary mb-6">
              How It Works
            </h2>
            <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
              Simple, transparent, and designed for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-12">
            <motion.div 
              className="col-span-12 md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading text-2xl mb-6">
                  1
                </div>
                <h3 className="font-heading text-2xl text-primary mb-4">Apply & Get Approved</h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  Submit your application and receive approval for your credit limit based on your business profile.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="col-span-12 md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading text-2xl mb-6">
                  2
                </div>
                <h3 className="font-heading text-2xl text-primary mb-4">Draw Funds as Needed</h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  Access your credit line anytime you need capital, up to your approved limit, within 24 hours.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="col-span-12 md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading text-2xl mb-6">
                  3
                </div>
                <h3 className="font-heading text-2xl text-primary mb-4">Repay & Reuse</h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  Make flexible repayments, and as you pay down the balance, your credit becomes available again.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl text-primary mb-8">
            Terms and Conditions
          </h2>
          <div className="bg-primary/5 p-12 rounded-lg space-y-6">
            <div>
              <h3 className="font-heading text-2xl text-primary mb-4">Interest Rates</h3>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                Interest rates start from 5.5% per annum on the outstanding balance. You only pay interest on the amount you actually draw from your credit line, not on the entire approved limit.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-primary mb-4">Repayment Terms</h3>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                Flexible repayment with minimum monthly payments based on your outstanding balance. You can repay the full amount or make partial payments at any time without penalties.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-primary mb-4">Credit Line Duration</h3>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                Credit lines are typically issued for 12-36 months with the option to renew. Your credit limit may be reviewed and adjusted based on your business performance and repayment history.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-primary mb-4">Fees and Charges</h3>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                A small annual maintenance fee of 0.5-1% of the credit limit applies. No transaction fees for drawing funds. All fees are transparent and disclosed upfront.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary py-24">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-primary-foreground mb-8">
              Ready to Secure Your Credit Line?
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
              Apply today and gain the financial flexibility your business deserves
            </p>
            <Link 
              to="/application"
              className="inline-flex items-center justify-center px-10 py-5 bg-accent-gold text-primary font-paragraph text-lg rounded-lg hover:bg-accent-gold/90 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
