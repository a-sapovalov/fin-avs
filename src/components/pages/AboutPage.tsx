import { Link } from 'react-router-dom';
import { ArrowRight, Target, Award, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 pt-32 pb-24">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-6xl lg:text-7xl text-primary mb-8">
            About AVS Finance
          </h1>
          <p className="font-paragraph text-xl text-foreground leading-relaxed">
            We are a trusted financial partner dedicated to empowering Estonian businesses with the capital they need to grow, innovate, and succeed in today's competitive marketplace.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-primary py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16">
            <motion.div 
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl text-primary-foreground mb-6">
                Our Mission
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed">
                To provide accessible, transparent, and flexible corporate financing solutions that enable Estonian businesses to achieve their strategic objectives and drive economic growth. We believe that every business deserves a financial partner who understands their unique challenges and opportunities.
              </p>
            </motion.div>

            <motion.div 
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl text-primary-foreground mb-6">
                Our Vision
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed">
                To be the most trusted and preferred corporate finance provider in Estonia, recognized for our commitment to client success, innovative solutions, and unwavering integrity. We envision a thriving business ecosystem where capital access is never a barrier to growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-5xl text-primary mb-6">
            Our Core Values
          </h2>
          <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="col-span-12 md:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-primary/5 p-10 rounded-lg h-full">
                <value.icon className="h-12 w-12 text-accent-gold mb-6" />
                <h3 className="font-heading text-2xl text-primary mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
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
              Our Journey
            </h2>
            <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
              A decade of growth, innovation, and partnership
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-background p-8 rounded-lg h-full">
                  <div className="text-accent-gold font-heading text-3xl mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="font-heading text-xl text-primary mb-3">
                    {milestone.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-5xl text-primary mb-6">
            Our Expertise
          </h2>
          <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
            A team of experienced financial professionals dedicated to your success
          </p>
        </motion.div>

        <motion.div 
          className="bg-primary p-12 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-4 text-center">
              <div className="font-heading text-5xl text-accent-gold mb-4">50+</div>
              <p className="font-paragraph text-lg text-primary-foreground">
                Financial Experts
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 text-center">
              <div className="font-heading text-5xl text-accent-gold mb-4">500+</div>
              <p className="font-paragraph text-lg text-primary-foreground">
                Active Clients
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 text-center">
              <div className="font-heading text-5xl text-accent-gold mb-4">€100M+</div>
              <p className="font-paragraph text-lg text-primary-foreground">
                Financing Provided
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Businesses Choose AVS Finance
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-12">
            <motion.div 
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-background p-10 rounded-lg h-full">
                <h3 className="font-heading text-2xl text-primary mb-6">
                  Local Expertise, Global Standards
                </h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                  We understand the Estonian business landscape intimately while maintaining international best practices in corporate finance. Our team combines local market knowledge with global financial expertise.
                </p>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  This unique combination allows us to provide solutions that are both relevant to your local context and competitive on a global scale.
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
              <div className="bg-background p-10 rounded-lg h-full">
                <h3 className="font-heading text-2xl text-primary mb-6">
                  Personalized Approach
                </h3>
                <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                  We don't believe in one-size-fits-all solutions. Every business is unique, and so are our financing packages. Our dedicated account managers work closely with you to understand your specific needs and goals.
                </p>
                <p className="font-paragraph text-lg text-foreground leading-relaxed">
                  From application to approval and beyond, you'll have a trusted advisor by your side every step of the way.
                </p>
              </div>
            </motion.div>
          </div>
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
              Partner with AVS Finance
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
              Join hundreds of Estonian businesses that trust us with their financing needs
            </p>
            <Link 
              to="/application"
              className="inline-flex items-center justify-center px-10 py-5 bg-accent-gold text-primary font-paragraph text-lg rounded-lg hover:bg-accent-gold/90 transition-all duration-300"
            >
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
