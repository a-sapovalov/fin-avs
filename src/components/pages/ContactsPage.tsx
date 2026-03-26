import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Phone, MapPin, Building2, Mail, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';

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

export default function ContactsPage() {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [isLoadingTeam, setIsLoadingTeam] = useState(true);

  useEffect(() => {
    const loadTeamMembers = async () => {
      try {
        const result = await BaseCrudService.getAll('teammembers');
        setTeamMembers(result.items || []);
      } catch (error) {
        console.error('Error loading team members:', error);
        setTeamMembers([]);
      } finally {
        setIsLoadingTeam(false);
      }
    };

    loadTeamMembers();
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', contactFormData);
    setContactFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-dark-brown">
      <Header />
      {/* --- CUSTOMER SUPPORT SECTION --- */}
      <section className="w-full py-20 md:py-32 bg-secondary">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="mb-16">
            <h2 className="font-heading md:text-4xl text-dark-brown mb-4 text-4xl text-center">
              customer support
            </h2>
            <p className="font-paragraph text-dark-brown-light mb-10 text-lg text-center">
              ask any questions or receive further information about our services
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Support by Phone */}
            <FadeIn>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white rounded-full inline-flex items-center justify-center">
                  <Phone className="h-8 w-8 text-dark-brown" />
                </div>
                <h3 className="font-heading text-xl text-dark-brown mb-4 font-bold">support by phone</h3>
                <p className="font-paragraph text-dark-brown-light mb-3 text-lg">
                  mon–fri 9:00–18:00, sat 10:00–15:00
                </p>
                <p className="font-paragraph text-lg font-bold text-dark-brown">
                  +372 5306 6545
                </p>
              </div>
            </FadeIn>

            {/* Support at the Office */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white rounded-full inline-flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-dark-brown" />
                </div>
                <h3 className="font-heading text-xl text-dark-brown mb-4 font-bold">support at the office</h3>
                <p className="font-paragraph text-dark-brown-light mb-3 text-lg">
                  mon–fri 10:00–16:00
                </p>
                <p className="font-paragraph text-lg font-bold text-dark-brown">
                  kentmanni tn 6, 10166 tallinn
                </p>
              </div>
            </FadeIn>

            {/* Write to Us */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white rounded-full inline-flex items-center justify-center">
                  <Mail className="h-8 w-8 text-dark-brown" />
                </div>
                <h3 className="font-heading text-xl text-dark-brown mb-4 font-bold">write to us</h3>
                <p className="font-paragraph text-lg font-bold text-dark-brown">
                  info@avs.ee
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* --- CONTACT FORM & MAP SECTION --- */}
      <section className="w-full py-20 md:py-32 bg-background">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form - Left */}
            <FadeIn>
              <h3 className="font-heading text-2xl text-dark-brown mb-8 md:text-4xl text-center">contact form</h3>
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
              <h3 className="font-heading text-2xl text-dark-brown mb-8 md:text-4xl text-center">find us</h3>
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
      <section className="w-full py-20 md:py-32 bg-secondary">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl text-dark-brown mb-6 leading-tight md:text-4xl text-center">
              company details
            </h2>
            <p className="font-paragraph text-lg text-dark-brown-light max-w-2xl mx-auto text-center">
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
                    <p className="font-paragraph font-bold text-dark-brown-light tracking-wide mb-2 lowercase text-xl">registry code</p>
                    <p className="font-heading text-xl text-dark-brown">17269440</p>
                  </div>
                  <div>
                    <p className="font-paragraph font-bold text-dark-brown-light tracking-wide mb-2 lowercase text-xl">vat code</p>
                    <p className="font-heading text-xl text-dark-brown">ee555555</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <p className="font-paragraph font-bold text-dark-brown-light tracking-wide mb-2 lowercase text-xl">licence number</p>
                    <p className="font-heading text-xl text-dark-brown">ffa000503</p>
                  </div>
                  <div>
                    <p className="font-paragraph font-bold text-dark-brown-light tracking-wide mb-2 lowercase text-xl">registered address</p>
                    <p className="font-paragraph text-dark-brown text-xl">kentmanni tn 6, 10116 tallinn</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bank Account - Sidebar Card */}
            <FadeIn delay={0.1} className="bg-white p-10 md:p-12 rounded-2xl border-2 border-dark-brown shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl text-dark-brown font-bold mb-8">bank accounts</h3>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="font-paragraph font-bold text-dark-brown-light tracking-wide mb-3 lowercase text-xl">swedbank</p>
                  <p className="font-heading md:text-xl text-dark-brown break-all text-xl">
                    ee24 2200 2210 9204 8448
                  </p>
                </div>
                <div>
                  <p className="font-paragraph font-bold text-dark-brown-light tracking-wide mb-3 lowercase text-xl">coop pank</p>
                  <p className="font-heading md:text-xl text-dark-brown break-all text-xl">
                    ee24 2200 2210 9204 0000
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* --- MEET OUR TEAM SECTION --- */}
      <section className="w-full py-20 md:py-32 bg-background">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl text-dark-brown mb-6 leading-tight md:text-4xl text-center">
              meet our team
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {!isLoadingTeam && teamMembers.length > 0 ? (
              teamMembers.map((member, index) => (
                <FadeIn key={member._id} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl overflow-hidden border-2 border-dark-brown hover:shadow-lg transition-all duration-300">
                    {/* Image */}
                    <div className="w-full h-64 md:h-80 bg-vibrant-yellow overflow-hidden">
                      {member.profileImage ? (
                        <Image
                          src={member.profileImage}
                          alt={member.name || 'Team member'}
                          width={400}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-vibrant-yellow-dark flex items-center justify-center">
                          <span className="text-dark-brown font-paragraph">No image</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="font-heading text-2xl text-dark-brown mb-2 leading-tight">
                        {member.name || 'Team Member'}
                      </h3>
                      {member.role && (
                        <p className="font-paragraph text-sm font-semibold text-secondary mb-4">
                          {member.role}
                        </p>
                      )}
                      <p className="font-paragraph text-dark-brown-light leading-relaxed mb-6">
                        {member.description || 'No description available'}
                      </p>
                      
                      {/* Contact Info */}
                      <div className="space-y-3 mb-6 border-t border-vibrant-yellow-dark pt-6">
                        {member.email && (
                          <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 text-dark-brown flex-shrink-0" />
                            <a href={`mailto:${member.email}`} className="font-paragraph text-sm text-dark-brown hover:text-vibrant-yellow-dark transition-colors">
                              {member.email}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Social Media Link */}
                      {member.socialMediaLink && (
                        <div className="flex items-center gap-2">
                          <a 
                            href={member.socialMediaLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-vibrant-yellow hover:bg-vibrant-yellow-dark text-dark-brown transition-all duration-300"
                            title="Social Media"
                          >
                            <Globe className="h-5 w-5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="font-paragraph text-dark-brown-light text-lg">
                  {isLoadingTeam ? 'Loading team members...' : 'No team members found'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* --- CALL TO ACTION SECTION --- */}
      <section className="w-full bg-dark-brown py-24 md:py-32 overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <FadeIn className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-vibrant-yellow mb-8">
              ready to proceed?
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-vibrant-yellow-light mb-12 max-w-3xl mx-auto leading-relaxed">
              get started with our financing solutions today. our team is ready to help you find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => window.location.href = '/application'}
                className="inline-flex items-center justify-center px-10 py-4 bg-vibrant-yellow text-dark-brown font-paragraph font-bold text-base rounded-lg hover:bg-vibrant-yellow-dark transition-all duration-300 hover:shadow-lg hover:shadow-vibrant-yellow/50"
              >
                apply
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
}
