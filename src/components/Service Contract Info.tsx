import React, { useState } from 'react';
import './ServiceContractForm.css'; // Optional: for styling

interface ServiceContractFormData {
  contractNumber: string;
  contractName: string;
  description: string;
  accountName: string;
  contactName: string;
  startDate: string;
  endDate: string;
  termMonths: string;
  specialTerms: string;
  discount: string;
  shippingHandling: string;
  tax: string;
  grandTotal: string;
  billingStreet: string;
  billingCity: string;
  billingZip: string;
  billingState: string;
  billingCountry: string;
  shippingStreet: string;
  shippingCity: string;
  shippingZip: string;
  shippingState: string;
  shippingCountry: string;
}

const ServiceContractForm: React.FC = () => {
  const [formData, setFormData] = useState<ServiceContractFormData>({
    contractNumber: '',
    contractName: '',
    description: '',
    accountName: '',
    contactName: '',
    startDate: '',
    endDate: '',
    termMonths: '',
    specialTerms: '',
    discount: '0.00%',
    shippingHandling: '',
    tax: '',
    grandTotal: '₹0.00',
    billingStreet: '',
    billingCity: '',
    billingZip: '',
    billingState: '',
    billingCountry: '',
    shippingStreet: '',
    shippingCity: '',
    shippingZip: '',
    shippingState: '',
    shippingCountry: '',
  });

  const [isAddressCollapsed, setIsAddressCollapsed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submit logic here
  };

  return (
    <div className="contract-container">
      <h2>New Service Contract</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Service Contract Information</h3>
          <div className="form-fields">
            <label>
              Service Contract Owner
              <input type="text" value="{formData.Contract Owner}" readOnly />
            </label>
            <label>
              Contract Number
              <input
                type="text"
                name="contractNumber"
                value={formData.contractNumber}
                onChange={handleChange}
              />
            </label>
            <label>
              * Contract Name
              <input
                type="text"
                name="contractName"
                value={formData.contractName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
            <label>
              * Account Name
              <input
                type="text"
                name="accountName"
                value={formData.accountName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Contact Name
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-fields right">
            <label>
              Start Date
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </label>
            <label>
              End Date
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </label>
            <label>
              Term (months)
              <input
                type="text"
                name="termMonths"
                value={formData.termMonths}
                onChange={handleChange}
              />
            </label>
            <label>
              Special Terms
              <textarea
                name="specialTerms"
                value={formData.specialTerms}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="form-section">
          <div className="form-fields">
            <label>
              Discount
              <input
                type="text"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                readOnly
              />
            </label>
            <label>
              Shipping and Handling
              <input
                type="text"
                name="shippingHandling"
                value={formData.shippingHandling}
                onChange={handleChange}
              />
            </label>
            <label>
              Tax
              <input
                type="text"
                name="tax"
                value={formData.tax}
                onChange={handleChange}
              />
            </label>
            <label>
              Grand Total
              <input
                type="text"
                name="grandTotal"
                value={formData.grandTotal}
                onChange={handleChange}
                readOnly
              />
            </label>
          </div>
        </div>

        <div className="address-section">
          <h3 onClick={() => setIsAddressCollapsed(!isAddressCollapsed)} className="collapsible-header">
            Address Information {isAddressCollapsed ? '▼' : '▲'}
          </h3>
          <div className={`address-content ${isAddressCollapsed ? 'collapsed' : ''}`}>
            <div className="address-columns">
              <div className="column">
                <h4>Billing Address</h4>
                <label>
                  Billing Street
                  <input
                    type="text"
                    name="billingStreet"
                    value={formData.billingStreet}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Billing City
                  <input
                    type="text"
                    name="billingCity"
                    value={formData.billingCity}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Billing Zip
                  <input
                    type="text"
                    name="billingZip"
                    value={formData.billingZip}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Billing State
                  <input
                    type="text"
                    name="billingState"
                    value={formData.billingState}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Billing Country
                  <input
                    type="text"
                    name="billingCountry"
                    value={formData.billingCountry}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="column">
                <h4>Shipping Address</h4>
                <label>
                  Shipping Street
                  <input
                    type="text"
                    name="shippingStreet"
                    value={formData.shippingStreet}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Shipping City
                  <input
                    type="text"
                    name="shippingCity"
                    value={formData.shippingCity}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Shipping Zip
                  <input
                    type="text"
                    name="shippingZip"
                    value={formData.shippingZip}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Shipping State
                  <input
                    type="text"
                    name="shippingState"
                    value={formData.shippingState}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Shipping Country
                  <input
                    type="text"
                    name="shippingCountry"
                    value={formData.shippingCountry}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button type="button">Cancel</button>
          <button type="button">Save & New</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceContractForm;