import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Phone, MapPin, Building2, Mail } from 'lucide-react';
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
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', contactFormData);
    setContactFormData({ name: '', email: '', message: '' });
  };

  const teamMembers = [
    {
      name: 'aleksandr šapovalov',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: 'https://static.wixstatic.com/media/43558d_00e31b592e474fc7bcce3f8af7194b11~mv2.png?originWidth=384&originHeight=320',
    },
    {
      name: 'evelin metslov',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: 'https://static.wixstatic.com/media/43558d_31477ae86f944bcbb842c245e83a88a7~mv2.png?originWidth=384&originHeight=320',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-dark-brown">
      <Header />
      
      {/* --- CUSTOMER SUPPORT SECTION --- */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-4 leading-tight">
              customer support
            </h2>
            <p className="font-paragraph text-base text-dark-brown-light mb-10">
              ask any questions or receive further information about our services
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Support by Phone */}
            <FadeIn>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-4">support by phone</h3>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-dark-brown mt-1" />
                  </div>
                  <div>
                    <p className="font-paragraph text-base text-dark-brown-light mb-2">
                      mon–fri 9:00–18:00, sat 10:00–15:00
                    </p>
                    <p className="font-paragraph text-lg font-bold text-dark-brown">
                      +372 5306 6545
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Support at the Office */}
            <FadeIn delay={0.1}>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-4">support at the office</h3>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-dark-brown mt-1" />
                  </div>
                  <div>
                    <p className="font-paragraph text-base text-dark-brown-light mb-2">
                      mon–fri 10:00–16:00
                    </p>
                    <p className="font-paragraph text-lg font-bold text-dark-brown">
                      kentmanni tn 6, 10166 tallinn
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Write to Us */}
            <FadeIn delay={0.2}>
              <div>
                <h3 className="font-heading text-xl text-dark-brown mb-4">write to us</h3>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-dark-brown mt-1" />
                  </div>
                  <div>
                    <p className="font-paragraph text-lg font-bold text-dark-brown">
                      info@avs.ee
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM & MAP SECTION --- */}
      <section className="w-full bg-vibrant-yellow py-20 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form - Left */}
            <FadeIn>
              <h3 className="font-heading text-2xl md:text-3xl text-dark-brown mb-8">contact form</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block font-paragraph text-sm font-semibold text-dark-brown mb-2">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactFormData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-dark-brown rounded-lg font-paragraph text-dark-brown placeholder-dark-brown-light focus:outline-none focus:border-dark-brown transition-colors"
                    placeholder="your name"
                    required
                  />
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-semibold text-dark-brown mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactFormData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-dark-brown rounded-lg font-paragraph text-dark-brown placeholder-dark-brown-light focus:outline-none focus:border-dark-brown transition-colors"
                    placeholder="your email"
                    required
                  />
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-semibold text-dark-brown mb-2">
                    message
                  </label>
                  <textarea
                    name="message"
                    value={contactFormData.message}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-dark-brown rounded-lg font-paragraph text-dark-brown placeholder-dark-brown-light focus:outline-none focus:border-dark-brown transition-colors resize-none h-32"
                    placeholder="your message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-dark-brown text-vibrant-yellow font-paragraph font-bold text-base rounded-lg hover:bg-dark-brown-light transition-all duration-300"
                >
                  send message
                </button>
              </form>
            </FadeIn>

            {/* Google Maps - Right */}
            <FadeIn delay={0.1}>
              <h3 className="font-heading text-2xl md:text-3xl text-dark-brown mb-8">find us</h3>
              <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border-2 border-dark-brown">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.7395469999997!2d24.7533!3d59.4370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692f5e5e5e5e5e5%3A0x0!2sKentmanni%20tn%206%2C%2010166%20Tallinn!5e0!3m2!1sen!2see!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- COMPANY DETAILS SECTION --- */}
      <section className="w-full bg-vibrant-yellow-light py-20 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-dark-brown mb-6 leading-tight">
              company details
            </h2>
            <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl">
              official information and credentials for avs finance oü
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Company Info - Larger Card */}
            <FadeIn className="lg:col-span-2 bg-white p-10 md:p-12 rounded-2xl border-2 border-dark-brown shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-8">
                <h3 className="font-heading text-2xl md:text-3xl text-dark-brown font-bold">avs finance oü</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <p className="font-paragraph text-xs font-bold text-dark-brown-light uppercase tracking-wide mb-2">registry code</p>
                    <p className="font-heading text-xl text-dark-brown">17269440</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-xs font-bold text-dark-brown-light uppercase tracking-wide mb-2">vat code</p>
                    <p className="font-heading text-xl text-dark-brown">ee555555</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <p className="font-paragraph text-xs font-bold text-dark-brown-light uppercase tracking-wide mb-2">licence number</p>
                    <p className="font-heading text-xl text-dark-brown">ffa000503</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-xs font-bold text-dark-brown-light uppercase tracking-wide mb-2">registered address</p>
                    <p className="font-paragraph text-base text-dark-brown">kentmanni tn 6, 10116 tallinn</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bank Account - Sidebar Card */}
            <FadeIn delay={0.1} className="bg-white p-10 md:p-12 rounded-2xl border-2 border-dark-brown shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl text-dark-brown font-bold mb-8">bank account</h3>
              </div>
              <div>
                <p className="font-paragraph text-xs font-bold text-dark-brown-light uppercase tracking-wide mb-3">swedbank</p>
                <p className="font-heading text-lg md:text-xl text-dark-brown break-all">
                  ee24 2200 2210 9204 8448
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- MEET OUR TEAM SECTION --- */}
      <section className="w-full bg-vibrant-yellow py-20 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-dark-brown mb-6 leading-tight">
              meet our team
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {teamMembers.map((member, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-dark-brown hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="w-full h-64 md:h-80 bg-vibrant-yellow overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-heading text-2xl text-dark-brown mb-4 leading-tight">
                      {member.name}
                    </h3>
                    <p className="font-paragraph text-dark-brown-light leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION SECTION --- */}
      <section className="w-full bg-dark-brown py-20 md:py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-heading text-4xl md:text-5xl text-vibrant-yellow mb-6 leading-tight">
                cooperate with avs finance
              </h2>
              <p className="font-paragraph text-lg text-vibrant-yellow-light mb-10 leading-relaxed">
                join estonian businesses that trust us with their financing needs
              </p>
              <button
                onClick={() => window.location.href = '/application'}
                className="px-8 py-4 bg-vibrant-yellow text-dark-brown font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300"
              >
                start application
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
