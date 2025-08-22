import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AccountForm: React.FC = () => {
  const [formData, setFormData] = useState({
    organization_id: "",
    name: "",
    status: "",
    type: "",
    industry: "",
    territory_id: "",
    contract_status: "",
    credit_limit: "",
    payment_terms: "",
    total_revenue: "",
    customer_rating: "",
    account_manager: "",
    created_by: "",
    updated_by: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const normalizedData = {
    ...formData,
    organization_id: formData.organization_id?.trim() || null,
    territory_id: formData.territory_id?.trim() || null,
    account_manager: formData.account_manager?.trim() || null,
    created_by: formData.created_by?.trim() || null,
    updated_by: formData.updated_by?.trim() || null,
    credit_limit: formData.credit_limit ? Number(formData.credit_limit) : null,
    total_revenue: formData.total_revenue ? Number(formData.total_revenue) : null,
  };

  try {
    const res = await fetch("http://localhost:5000/api/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(normalizedData),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText);
    }

    const data = await res.json();
    console.log("✅ Account created:", data);
    alert("✅ Account created successfully!");
  } catch (err) {
    console.error("❌ Error creating account:", err);
    alert("Failed to create account. Check console for details.");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 p-4 border rounded-xl shadow-md max-w-lg mx-auto"
    >
      <Input name="organization_id" placeholder="Organization UUID" onChange={handleChange} />
      <Input name="name" placeholder="Account Name" required onChange={handleChange} />
      <Input name="status" placeholder="Status" onChange={handleChange} />
      <Input name="type" placeholder="Type" onChange={handleChange} />
      <Input name="industry" placeholder="Industry" onChange={handleChange} />
      <Input name="territory_id" placeholder="Territory UUID" onChange={handleChange} />
      <Input name="contract_status" placeholder="Contract Status" onChange={handleChange} />
      <Input name="credit_limit" placeholder="Credit Limit" type="number" onChange={handleChange} />
      <Input name="payment_terms" placeholder="Payment Terms" onChange={handleChange} />
      <Input name="total_revenue" placeholder="Total Revenue" type="number" onChange={handleChange} />
      <Input name="customer_rating" placeholder="Customer Rating" onChange={handleChange} />
      <Input name="account_manager" placeholder="Account Manager UUID" onChange={handleChange} />
      <Input name="created_by" placeholder="Created By (User UUID)" onChange={handleChange} />
      <Input name="updated_by" placeholder="Updated By (User UUID)" onChange={handleChange} />

      <Button type="submit" className="w-full">Create Account</Button>
    </form>
  );
};

export default AccountForm;
