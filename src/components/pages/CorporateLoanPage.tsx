import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CorporateLoanPage() {
  const benefits = [
    'Competitive interest rates tailored to your business',
    'Flexible repayment terms up to 10 years',
    'Loan amounts from €50,000 to €5,000,000',
    'Fast approval process within 5-7 business days',
    'No hidden fees or prepayment penalties',
    'Dedicated account manager for personalized support',
  ];

  const eligibility = [
    'Registered business operating in Estonia',
    'Minimum 2 years of operational history',
    'Positive cash flow and financial statements',
    'Clear business plan and purpose for funds',
    'Good credit history and no outstanding defaults',
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
              <TrendingUp className="h-8 w-8 text-accent-gold" />
              <span className="font-paragraph text-lg text-secondary uppercase tracking-wider">
                Corporate Financing
              </span>
            </div>
            <h1 className="font-heading text-6xl lg:text-7xl text-primary mb-8">
              Corporate Loans for Strategic Growth
            </h1>
            <p className="font-paragraph text-xl text-foreground leading-relaxed mb-12">
              Secure the capital you need to expand operations, invest in equipment, acquire assets, or fund major business initiatives with our competitive corporate loan solutions.
            </p>
            <Link 
              to="/application"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-paragraph text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Apply for a Corporate Loan
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
                Loan Overview
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-paragraph text-sm text-primary-foreground/70 mb-2">Loan Amount</p>
                  <p className="font-heading text-2xl text-primary-foreground">€50,000 - €5,000,000</p>
                </div>
                <div>
                  <p className="font-paragraph text-sm text-primary-foreground/70 mb-2">Interest Rate</p>
                  <p className="font-heading text-2xl text-primary-foreground">From 4.5% per annum</p>
                </div>
                <div>
                  <p className="font-paragraph text-sm text-primary-foreground/70 mb-2">Repayment Period</p>
                  <p className="font-heading text-2xl text-primary-foreground">Up to 10 years</p>
                </div>
                <div>
                  <p className="font-paragraph text-sm text-primary-foreground/70 mb-2">Approval Time</p>
                  <p className="font-heading text-2xl text-primary-foreground">5-7 business days</p>
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
              Our corporate loans are designed to provide maximum value and flexibility
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
              What is a Corporate Loan?
            </h2>
            <div className="space-y-6">
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                A corporate loan is a long-term financing solution designed specifically for businesses seeking substantial capital for strategic investments. Whether you're expanding your operations, purchasing new equipment, acquiring real estate, or funding a major project, our corporate loans provide the financial foundation you need.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                Unlike short-term financing options, corporate loans offer extended repayment periods and structured payment schedules that align with your business's cash flow and growth trajectory. This makes them ideal for significant investments that will generate returns over time.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                At AVS Finance, we understand that every business has unique needs. Our experienced team works closely with you to structure a loan that matches your specific requirements, ensuring you have the capital and flexibility to achieve your business objectives.
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

      {/* Terms and Conditions Section */}
      <section className="w-full bg-primary/5 py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-primary mb-8">
              Terms and Conditions
            </h2>
            <div className="bg-background p-12 rounded-lg space-y-6">
              <div>
                <h3 className="font-heading text-2xl text-primary mb-4">Interest Rates</h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  Interest rates start from 4.5% per annum and are determined based on your business's creditworthiness, loan amount, and repayment term. Fixed and variable rate options are available.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl text-primary mb-4">Repayment Terms</h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  Flexible repayment schedules ranging from 1 to 10 years. Monthly installments are structured to align with your business's cash flow. Early repayment is permitted without penalties.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl text-primary mb-4">Collateral Requirements</h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  Depending on the loan amount and business profile, collateral may be required. Acceptable collateral includes real estate, equipment, inventory, or other business assets.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl text-primary mb-4">Fees and Charges</h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  A one-time origination fee of 1-2% of the loan amount applies. No hidden fees, monthly maintenance charges, or prepayment penalties. All costs are disclosed upfront.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
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
              Ready to Secure Your Corporate Loan?
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
              Start your application today and take the next step in growing your business
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
