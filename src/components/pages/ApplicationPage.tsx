import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ApplicationPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceType: '',
    requestedAmount: '',
    purpose: '',
    yearsInBusiness: '',
    annualRevenue: '',
    additionalInfo: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="w-full max-w-[100rem] mx-auto px-8 py-32">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-accent-gold/20 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-accent-gold" />
              </div>
            </div>
            <h1 className="font-heading text-5xl text-primary mb-6">
              Application Submitted Successfully
            </h1>
            <p className="font-paragraph text-xl text-foreground leading-relaxed mb-8">
              Thank you for choosing AVS Finance. We have received your application and our team will review it shortly. You will receive a response within 5-7 business days.
            </p>
            <p className="font-paragraph text-base text-secondary">
              Redirecting to homepage...
            </p>
          </motion.div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 pt-32 pb-16">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-6xl lg:text-7xl text-primary mb-8">
            Loan Application
          </h1>
          <p className="font-paragraph text-xl text-foreground leading-relaxed">
            Complete the form below to apply for corporate financing. Our team will review your application and contact you within 5-7 business days.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 pb-24">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-primary/5 p-12 rounded-lg space-y-8">
            {/* Company Information */}
            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">
                Company Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="font-paragraph text-base text-foreground">
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registrationNumber" className="font-paragraph text-base text-foreground">
                    Registration Number *
                  </Label>
                  <Input
                    id="registrationNumber"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearsInBusiness" className="font-paragraph text-base text-foreground">
                    Years in Business *
                  </Label>
                  <Input
                    id="yearsInBusiness"
                    name="yearsInBusiness"
                    type="number"
                    value={formData.yearsInBusiness}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="annualRevenue" className="font-paragraph text-base text-foreground">
                    Annual Revenue (EUR) *
                  </Label>
                  <Input
                    id="annualRevenue"
                    name="annualRevenue"
                    type="number"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactPerson" className="font-paragraph text-base text-foreground">
                    Contact Person *
                  </Label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-paragraph text-base text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="phone" className="font-paragraph text-base text-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
              </div>
            </div>

            {/* Loan Details */}
            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">
                Financing Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="serviceType" className="font-paragraph text-base text-foreground">
                    Service Type *
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleSelectChange('serviceType', value)}
                    required
                  >
                    <SelectTrigger className="font-paragraph">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate-loan" className="font-paragraph">
                        Corporate Loan
                      </SelectItem>
                      <SelectItem value="credit-line" className="font-paragraph">
                        Credit Line
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requestedAmount" className="font-paragraph text-base text-foreground">
                    Requested Amount (EUR) *
                  </Label>
                  <Input
                    id="requestedAmount"
                    name="requestedAmount"
                    type="number"
                    value={formData.requestedAmount}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="purpose" className="font-paragraph text-base text-foreground">
                    Purpose of Financing *
                  </Label>
                  <Textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="font-paragraph"
                    placeholder="Please describe how you plan to use the financing..."
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="additionalInfo" className="font-paragraph text-base text-foreground">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="font-paragraph"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-10 py-6 bg-primary text-primary-foreground font-paragraph text-lg rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </Button>
              <p className="font-paragraph text-sm text-secondary mt-4">
                * Required fields. By submitting this form, you agree to our terms and conditions.
              </p>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="w-full bg-primary py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-12 gap-12">
            <motion.div 
              className="col-span-12 md:col-span-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-heading text-4xl text-accent-gold mb-4">5-7</div>
              <p className="font-paragraph text-lg text-primary-foreground">
                Business Days Response Time
              </p>
            </motion.div>
            <motion.div 
              className="col-span-12 md:col-span-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="font-heading text-4xl text-accent-gold mb-4">100%</div>
              <p className="font-paragraph text-lg text-primary-foreground">
                Transparent Process
              </p>
            </motion.div>
            <motion.div 
              className="col-span-12 md:col-span-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="font-heading text-4xl text-accent-gold mb-4">24/7</div>
              <p className="font-paragraph text-lg text-primary-foreground">
                Support Available
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
