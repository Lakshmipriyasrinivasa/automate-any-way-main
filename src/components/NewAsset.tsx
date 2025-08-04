import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NewAsset: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    assetName: "",
    description: "",
    assetNumber: "",
    product: "",
    parentAsset: "",
    giai: "",
    orderedDate: "",
    installationDate: "",
    purchasedDate: "",
    warrantyExpiration: "",
    company: "",
    contact: "",
    address: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    navigate("/assets");
  };

  const handleSave = () => {
    console.log("Saved Asset:", formData);
    // Send data to backend API here
    navigate("/assets");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Asset</h1>

      {/* Asset Details */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Asset Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Asset Name", key: "assetName" },
            { label: "Description", key: "description" },
            { label: "Asset Number", key: "assetNumber" },
            { label: "Product", key: "product" },
            { label: "Parent Asset", key: "parentAsset" },
            { label: "GIAI", key: "giai" },
            { label: "Ordered Date", key: "orderedDate", type: "date" },
            { label: "Installation Date", key: "installationDate", type: "date" },
            { label: "Purchased Date", key: "purchasedDate", type: "date" },
            { label: "Warranty Expiration", key: "warrantyExpiration", type: "date" },
          ].map(({ label, key, type }) => (
            <div key={key}>
              <Label>{label}</Label>
              <Input
                type={type || "text"}
                placeholder={label}
                value={(formData as any)[key]}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Company</Label>
            <Input
              placeholder="Search Company"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
            />
          </div>
          <div>
            <Label>Contact</Label>
            <Input
              placeholder="Search Contact"
              value={formData.contact}
              onChange={(e) => handleChange("contact", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Address</h2>
        <div className="w-full">
          <Label>Address</Label>
          <Input
            placeholder="Enter Address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-2 mt-8">
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default NewAsset;
