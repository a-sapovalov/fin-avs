/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: financialservices
 * Interface for FinancialServices
 */
export interface FinancialServices {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType text */
  keyBenefits?: string;
  /** @wixFieldType text */
  termsAndConditions?: string;
  /** @wixFieldType text */
  eligibilityCriteria?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
}
