import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Collateral {
  id: string;
  type: 'real-estate' | 'other';
  address?: string;
  description?: string;
}

interface SuretyPerson {
  name: string;
  identificationCode: string;
}

export default function ApplicationPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    // Loan Details
    loanType: '',
    loanPurpose: '',
    loanAmount: '',
    scheduleType: '',
    gracePeriodDuration: '',
    
    // Company Information
    companyName: '',
    registrationNumber: '',
    registrationAddress: '',
    communicationLanguage: '',
    taxResidency: '',
    
    // Contact Information
    representativeFullName: '',
    representativeEmail: '',
    representativeIdentificationCode: '',
    representativePhone: '',
    representationType: '',
    
    // Beneficiary Information
    beneficiaryIdentificationCode: '',
    beneficiaryFullName: '',
    beneficiaryCountry: '',
    
    // PEP Questionnaire
    isPEPRelated: '',
    
    // Surety Information
    isRepresentativeSurety: false,
    isOtherPersonSurety: false,
  });

  const [collaterals, setCollaterals] = useState<Collateral[]>([]);
  const [otherSuretyPerson, setOtherSuretyPerson] = useState<SuretyPerson>({
    name: '',
    identificationCode: '',
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

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const addCollateral = () => {
    const newCollateral: Collateral = {
      id: Date.now().toString(),
      type: 'real-estate',
    };
    setCollaterals([...collaterals, newCollateral]);
  };

  const removeCollateral = (id: string) => {
    setCollaterals(collaterals.filter((c) => c.id !== id));
  };

  const updateCollateral = (id: string, updates: Partial<Collateral>) => {
    setCollaterals(
      collaterals.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
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
      <div className="min-h-screen bg-white">
        <Header />
        <section className="w-full max-w-[120rem] mx-auto px-6 md:px-12 py-32">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-vibrant-yellow/20 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-vibrant-yellow" />
              </div>
            </div>
            <h1 className="font-heading text-5xl text-dark-brown mb-6">
              application submitted successfully
            </h1>
            <p className="font-paragraph text-xl text-dark-brown-light leading-relaxed mb-8">
              thank you for choosing avs finance. we have received your application and our team will review it shortly. you will receive a response within 5-7 business days.
            </p>
            <p className="font-paragraph text-base text-dark-brown-light">
              redirecting to homepage...
            </p>
          </motion.div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-dark-brown">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-16">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-dark-brown mb-8 leading-tight">
            loan application
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-dark-brown-light leading-relaxed">
            complete the form below to apply for financing. our team will review your application and contact you within two business days.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 md:px-12 pb-24">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-vibrant-yellow/10 p-8 md:p-12 rounded-2xl space-y-8">
            {/* 1. Loan Details Section */}
            <div>
              <h2 className="font-heading text-3xl text-dark-brown mb-6">
                loan details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="loanType" className="font-paragraph text-base text-dark-brown">
                    loan type *
                  </Label>
                  <Select
                    value={formData.loanType}
                    onValueChange={(value) => handleSelectChange('loanType', value)}
                    required
                  >
                    <SelectTrigger className="font-paragraph">
                      <SelectValue placeholder="select loan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate-loan" className="font-paragraph">
                        corporate loan
                      </SelectItem>
                      <SelectItem value="credit-line" className="font-paragraph">
                        credit line
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loanAmount" className="font-paragraph text-base text-dark-brown">
                    loan amount (eur) *
                  </Label>
                  <Input
                    id="loanAmount"
                    name="loanAmount"
                    type="number"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="loanPurpose" className="font-paragraph text-base text-dark-brown">
                    purpose of the loan *
                  </Label>
                  <Textarea
                    id="loanPurpose"
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="font-paragraph"
                    placeholder="please describe the purpose of the loan..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scheduleType" className="font-paragraph text-base text-dark-brown">
                    schedule type *
                  </Label>
                  <Select
                    value={formData.scheduleType}
                    onValueChange={(value) => handleSelectChange('scheduleType', value)}
                    required
                  >
                    <SelectTrigger className="font-paragraph">
                      <SelectValue placeholder="select schedule type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly" className="font-paragraph">
                        monthly
                      </SelectItem>
                      <SelectItem value="quarterly" className="font-paragraph">
                        quarterly
                      </SelectItem>
                      <SelectItem value="annual" className="font-paragraph">
                        annual
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gracePeriodDuration" className="font-paragraph text-base text-dark-brown">
                    grace period duration (months) *
                  </Label>
                  <Input
                    id="gracePeriodDuration"
                    name="gracePeriodDuration"
                    type="number"
                    value={formData.gracePeriodDuration}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                    placeholder="period where only interest is paid"
                  />
                </div>
              </div>
            </div>

            {/* 2. Company Information Section */}
            <div>
              <h2 className="font-heading text-3xl text-dark-brown mb-6">
                company information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="font-paragraph text-base text-dark-brown">
                    company name *
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
                  <Label htmlFor="registrationNumber" className="font-paragraph text-base text-dark-brown">
                    registration number *
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
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="registrationAddress" className="font-paragraph text-base text-dark-brown">
                    registration address *
                  </Label>
                  <Input
                    id="registrationAddress"
                    name="registrationAddress"
                    value={formData.registrationAddress}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="communicationLanguage" className="font-paragraph text-base text-dark-brown">
                    communication language *
                  </Label>
                  <Select
                    value={formData.communicationLanguage}
                    onValueChange={(value) => handleSelectChange('communicationLanguage', value)}
                    required
                  >
                    <SelectTrigger className="font-paragraph">
                      <SelectValue placeholder="select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="estonian" className="font-paragraph">
                        estonian
                      </SelectItem>
                      <SelectItem value="english" className="font-paragraph">
                        english
                      </SelectItem>
                      <SelectItem value="russian" className="font-paragraph">
                        russian
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxResidency" className="font-paragraph text-base text-dark-brown">
                    tax residency *
                  </Label>
                  <Input
                    id="taxResidency"
                    name="taxResidency"
                    value={formData.taxResidency}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                    placeholder="country of tax residency"
                  />
                </div>
              </div>
            </div>

            {/* 3. Contact Information Section */}
            <div>
              <h2 className="font-heading text-3xl text-dark-brown mb-6">
                contact information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="representativeFullName" className="font-paragraph text-base text-dark-brown">
                    full name of representative *
                  </Label>
                  <Input
                    id="representativeFullName"
                    name="representativeFullName"
                    value={formData.representativeFullName}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="representativeEmail" className="font-paragraph text-base text-dark-brown">
                    email address *
                  </Label>
                  <Input
                    id="representativeEmail"
                    name="representativeEmail"
                    type="email"
                    value={formData.representativeEmail}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="representativeIdentificationCode" className="font-paragraph text-base text-dark-brown">
                    personal identification code *
                  </Label>
                  <Input
                    id="representativeIdentificationCode"
                    name="representativeIdentificationCode"
                    value={formData.representativeIdentificationCode}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="representativePhone" className="font-paragraph text-base text-dark-brown">
                    phone number *
                  </Label>
                  <Input
                    id="representativePhone"
                    name="representativePhone"
                    type="tel"
                    value={formData.representativePhone}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="representationType" className="font-paragraph text-base text-dark-brown">
                    representation type *
                  </Label>
                  <Select
                    value={formData.representationType}
                    onValueChange={(value) => handleSelectChange('representationType', value)}
                    required
                  >
                    <SelectTrigger className="font-paragraph">
                      <SelectValue placeholder="select representation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="legal-representative" className="font-paragraph">
                        legal representative
                      </SelectItem>
                      <SelectItem value="authorized-representative" className="font-paragraph">
                        authorized representative
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* 4. Beneficiary Information Section */}
            <div>
              <h2 className="font-heading text-3xl text-dark-brown mb-6">
                beneficiary information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="beneficiaryIdentificationCode" className="font-paragraph text-base text-dark-brown">
                    personal identification code *
                  </Label>
                  <Input
                    id="beneficiaryIdentificationCode"
                    name="beneficiaryIdentificationCode"
                    value={formData.beneficiaryIdentificationCode}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="beneficiaryFullName" className="font-paragraph text-base text-dark-brown">
                    full name *
                  </Label>
                  <Input
                    id="beneficiaryFullName"
                    name="beneficiaryFullName"
                    value={formData.beneficiaryFullName}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="beneficiaryCountry" className="font-paragraph text-base text-dark-brown">
                    country of residence *
                  </Label>
                  <Input
                    id="beneficiaryCountry"
                    name="beneficiaryCountry"
                    value={formData.beneficiaryCountry}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                    placeholder="country of residence"
                  />
                </div>
              </div>
            </div>

            {/* 5. PEP Questionnaire Section */}
            <div>
              <h2 className="font-heading text-3xl text-dark-brown mb-6">
                questionnaire
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="isPEPRelated" className="font-paragraph text-base text-dark-brown">
                    is any person related to the company a pep (politically exposed person)? *
                  </Label>
                  <Select
                    value={formData.isPEPRelated}
                    onValueChange={(value) => handleSelectChange('isPEPRelated', value)}
                    required
                  >
                    <SelectTrigger className="font-paragraph">
                      <SelectValue placeholder="select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes" className="font-paragraph">
                        yes
                      </SelectItem>
                      <SelectItem value="no" className="font-paragraph">
                        no
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* 6. Collateral Section */}
            <div>
              <h2 className="font-heading text-3xl text-dark-brown mb-6">
                collateral
              </h2>
              
              {/* Collaterals List */}
              <div className="space-y-4 mb-6">
                {collaterals.map((collateral) => (
                  <div key={collateral.id} className="border border-dark-brown/20 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <Label className="font-paragraph text-base text-dark-brown mb-2 block">
                          collateral type *
                        </Label>
                        <Select
                          value={collateral.type}
                          onValueChange={(value) =>
                            updateCollateral(collateral.id, {
                              type: value as 'real-estate' | 'other',
                              address: undefined,
                              description: undefined,
                            })
                          }
                        >
                          <SelectTrigger className="font-paragraph">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="real-estate" className="font-paragraph">
                              real estate
                            </SelectItem>
                            <SelectItem value="other" className="font-paragraph">
                              other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeCollateral(collateral.id)}
                        className="ml-4 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {collateral.type === 'real-estate' && (
                      <div className="space-y-2">
                        <Label className="font-paragraph text-base text-dark-brown">
                          address *
                        </Label>
                        <Input
                          value={collateral.address || ''}
                          onChange={(e) =>
                            updateCollateral(collateral.id, { address: e.target.value })
                          }
                          className="font-paragraph"
                          placeholder="enter property address"
                        />
                      </div>
                    )}

                    {collateral.type === 'other' && (
                      <div className="space-y-2">
                        <Label className="font-paragraph text-base text-dark-brown">
                          description *
                        </Label>
                        <Textarea
                          value={collateral.description || ''}
                          onChange={(e) =>
                            updateCollateral(collateral.id, { description: e.target.value })
                          }
                          className="font-paragraph"
                          placeholder="describe the collateral"
                          rows={3}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Button
                type="button"
                onClick={addCollateral}
                className="mb-8 px-6 py-2 bg-dark-brown/10 text-dark-brown font-paragraph rounded-lg hover:bg-dark-brown/20 transition-colors"
              >
                + add collateral
              </Button>

              {/* Surety Information */}
              <div className="space-y-6 border-t border-dark-brown/20 pt-6">
                <h3 className="font-heading text-2xl text-dark-brown">
                  surety information
                </h3>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="isRepresentativeSurety"
                    checked={formData.isRepresentativeSurety}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange('isRepresentativeSurety', checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="isRepresentativeSurety"
                    className="font-paragraph text-base text-dark-brown cursor-pointer"
                  >
                    the representative of the company is willing to act as a surety personally
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="isOtherPersonSurety"
                    checked={formData.isOtherPersonSurety}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange('isOtherPersonSurety', checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="isOtherPersonSurety"
                    className="font-paragraph text-base text-dark-brown cursor-pointer"
                  >
                    another person related to the company is willing to act as a surety
                  </Label>
                </div>

                {formData.isOtherPersonSurety && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-vibrant-yellow/10 p-6 rounded-lg">
                    <div className="space-y-2">
                      <Label className="font-paragraph text-base text-dark-brown">
                        name of surety person *
                      </Label>
                      <Input
                        value={otherSuretyPerson.name}
                        onChange={(e) =>
                          setOtherSuretyPerson({ ...otherSuretyPerson, name: e.target.value })
                        }
                        className="font-paragraph"
                        placeholder="full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-paragraph text-base text-dark-brown">
                        identification code *
                      </Label>
                      <Input
                        value={otherSuretyPerson.identificationCode}
                        onChange={(e) =>
                          setOtherSuretyPerson({
                            ...otherSuretyPerson,
                            identificationCode: e.target.value,
                          })
                        }
                        className="font-paragraph"
                        placeholder="identification code"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-10 py-6 bg-dark-brown text-vibrant-yellow font-paragraph text-lg rounded-lg hover:bg-dark-brown-light transition-all duration-300"
              >
                {isSubmitting ? 'submitting application...' : 'submit application'}
              </Button>
              <p className="font-paragraph text-sm text-dark-brown-light mt-4">
                * required fields. by submitting this form, you agree to our terms and conditions.
              </p>
            </div>
          </form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
