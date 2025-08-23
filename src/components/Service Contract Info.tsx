import React, { useState } from 'react';
import './ServiceContractForm.css'; // Optional: for styling

interface ServiceContractFormData {
  contractOwner: string;
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
    contractOwner: "",
    contractNumber: '',
    contractName: '',
    description: '',
    accountName: '',
    contactName: '',
    startDate: '',
    endDate: '',
    termMonths: '',
    specialTerms: '',
    discount: "0.00",
    shippingHandling: '',
    tax: '',
    grandTotal: "0.00",
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
 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
     const res = await fetch("http://localhost:5000/api/service-contract", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        alert("Service contract saved!");
      } else {
        alert("Failed to save: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="contract-container">
      <h2>New Service Contract</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Service Contract Information</h3>
          <div className="form-fields">
          
      <label>
        Contract Owner
        <input
          type="text"
          name="contractOwner"
          value={formData.contractOwner}
          onChange={handleChange}
        />
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
  value={formData.discount + "%"}
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
    value={formData.grandTotal + "₹"}
    readOnly
  />
</label>

          </div>
        </div>

        <div className="address-section">
  <h3
    onClick={() => setIsAddressCollapsed(!isAddressCollapsed)}
    className="collapsible-header"
  >
    Address Information {isAddressCollapsed ? "▼" : "▲"}
  </h3>
  <div className={`address-content ${isAddressCollapsed ? "collapsed" : ""}`}>
    <div className="address-columns">
      <div className="column">
        <h4>Billing Address</h4>
        <div className="form-group">
          <label>Billing Street</label>
          <input type="text" name="billingStreet" value={formData.billingStreet} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Billing City</label>
          <input type="text" name="billingCity" value={formData.billingCity} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Billing Zip</label>
          <input type="text" name="billingZip" value={formData.billingZip} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Billing State</label>
          <input type="text" name="billingState" value={formData.billingState} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Billing Country</label>
          <input type="text" name="billingCountry" value={formData.billingCountry} onChange={handleChange} />
        </div>
      </div>

      <div className="column">
        <h4>Shipping Address</h4>
        <div className="form-group">
          <label>Shipping Street</label>
          <input type="text" name="shippingStreet" value={formData.shippingStreet} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Shipping City</label>
          <input type="text" name="shippingCity" value={formData.shippingCity} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Shipping Zip</label>
          <input type="text" name="shippingZip" value={formData.shippingZip} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Shipping State</label>
          <input type="text" name="shippingState" value={formData.shippingState} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Shipping Country</label>
          <input type="text" name="shippingCountry" value={formData.shippingCountry} onChange={handleChange} />
        </div>
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