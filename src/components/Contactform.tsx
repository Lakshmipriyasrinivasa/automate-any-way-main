
// export default ContactForm;
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Option {
  id: string;
  name?: string; // for organizations, accounts
  username?: string; // for users
}

const ContactForm: React.FC = () => {
 const [formData, setFormData] = useState({
  organization_id: null,
  account_id: null,
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  type: "",
  street: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
  preferred_contact_method: "",
  last_service_date: "",
  special_instructions: "",
  updated_by: null,
});

  const [organizations, setOrganizations] = useState<Option[]>([]);
  const [accounts, setAccounts] = useState<Option[]>([]);
  const [users, setUsers] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/organizations")
      .then((res) => res.json())
      .then(setOrganizations)
      .catch(console.error);

    fetch("http://localhost:5000/api/accounts")
      .then((res) => res.json())
      .then(setAccounts)
      .catch(console.error);

    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value === "" ? null : value,
  });
};

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Submitting contact:", formData);
      const res = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to save contact");
      }

      alert("Contact added successfully!");
      setFormData({
        organization_id: "",
        account_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        type: "",
        street: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        preferred_contact_method: "",
        last_service_date: "",
        special_instructions: "",
        updated_by: "",
      });
    } catch (err: any) {
      console.error("Submit error:", err);
      alert(`Error adding contact: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <h2 className="text-xl font-bold">Add Contact</h2>

      {/* Dropdowns */}
     <label className="block">
  Organization
  <select
    name="organization_id"
    value={formData.organization_id}
    onChange={handleChange}
    required
    className="block w-full border rounded p-2 mt-1"
  >
    <option value="">Select organization</option>
    {organizations.map((org) => (
      <option key={org.id} value={org.id}>
        {org.name}
      </option>
    ))}
  </select>
</label>

      <label className="block">
        Account
        <select
          name="account_id"
          value={formData.account_id}
          onChange={handleChange}
          required
          className="block w-full border rounded p-2 mt-1"
        >
          <option value="">Select account</option>
          {accounts.map((acc) => (
            <option key={acc.id} value={acc.id}>
              {acc.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        Updated By
        <select
          name="updated_by"
          value={formData.updated_by}
          onChange={handleChange}
          required
          className="block w-full border rounded p-2 mt-1"
        >
          <option value="">Select user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username || user.name}
            </option>
          ))}
        </select>
      </label>

      {/* Other input fields */}
      <label className="block">
        First Name
        <Input
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Last Name
        <Input
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Email
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Phone
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Type
        <Input
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Street
        <Input
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        City
        <Input
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        State
        <Input
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Postal Code
        <Input
          name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Country
        <Input
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Preferred Contact Method
        <Input
          name="preferred_contact_method"
          value={formData.preferred_contact_method}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Last Service Date
        <Input
          type="date"
          name="last_service_date"
          value={formData.last_service_date}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <label className="block">
        Special Instructions
        <Textarea
          name="special_instructions"
          value={formData.special_instructions}
          onChange={handleChange}
          className="mt-1"
        />
      </label>

      <Button type="submit">Save Contact</Button>
    </form>
  );
};

export default ContactForm;


// // import React, { useState, useEffect } from "react";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Textarea } from "@/components/ui/textarea";

// // interface Option {
// //   id: string;
// //   name?: string; // for organizations/accounts
// //   username?: string; // for users
// // }

// // interface ContactFormData {
// //   organization_id: string | null;
// //   account_id: string | null;
// //   first_name: string;
// //   last_name: string;
// //   email: string;
// //   phone: string;
// //   type: string;
// //   street: string;
// //   city: string;
// //   state: string;
// //   postal_code: string;
// //   country: string;
// //   preferred_contact_method: string;
// //   last_service_date: string;
// //   special_instructions: string;
// //   updated_by: string | null;
// // }

// // const ContactForm: React.FC = () => {
// //   const [formData, setFormData] = useState<ContactFormData>({
// //     organization_id: null,
// //     account_id: null,
// //     first_name: "",
// //     last_name: "",
// //     email: "",
// //     phone: "",
// //     type: "",
// //     street: "",
// //     city: "",
// //     state: "",
// //     postal_code: "",
// //     country: "",
// //     preferred_contact_method: "",
// //     last_service_date: "",
// //     special_instructions: "",
// //     updated_by: null,
// //   });

// //   const [organizations, setOrganizations] = useState<Option[]>([]);
// //   const [accounts, setAccounts] = useState<Option[]>([]);
// //   const [users, setUsers] = useState<Option[]>([]);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/organizations")
// //       .then((res) => res.json())
// //       .then(setOrganizations)
// //       .catch(console.error);

// //     fetch("http://localhost:5000/api/accounts")
// //       .then((res) => res.json())
// //       .then(setAccounts)
// //       .catch(console.error);

// // fetch("http://localhost:5000/api/users")
// //   .then(res => res.json())
// //   .then(data => {
// //     setUsers(data);
// //     console.log("Users fetched:", data); // check if array has elements
// //   })
// //   .catch(console.error);

// //   }, []);

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// //   ) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value || null });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       const response = await fetch("http://localhost:5000/api/contacts", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.error || "Failed to add contact");
// //       }

// //       alert("Contact added successfully!");
// //       // Reset form
// //       setFormData({
// //         organization_id: null,
// //         account_id: null,
// //         first_name: "",
// //         last_name: "",
// //         email: "",
// //         phone: "",
// //         type: "",
// //         street: "",
// //         city: "",
// //         state: "",
// //         postal_code: "",
// //         country: "",
// //         preferred_contact_method: "",
// //         last_service_date: "",
// //         special_instructions: "",
// //         updated_by: null,
// //       });
// //     } catch (err: any) {
// //       console.error("Error adding contact:", err);
// //       alert(`Error adding contact: ${err.message}`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="p-4 space-y-3">
// //       <h2 className="text-xl font-bold">Add Contact</h2>

// //       {/* Organization Dropdown */}
// //       <label className="block">
// //         Organization
// //         <select
// //           name="organization_id"
// //           value={formData.organization_id || ""}
// //           onChange={handleChange}
// //           required
// //           className="block w-full border rounded p-2 mt-1"
// //         >
// //           <option value="">Select organization</option>
// //           {organizations.map((org) => (
// //             <option key={org.id} value={org.id}>
// //               {org.name}
// //             </option>
// //           ))}
// //         </select>
// //       </label>

// //       {/* Account Dropdown */}
// //       <label className="block">
// //         Account
// //         <select
// //           name="account_id"
// //           value={formData.account_id || ""}
// //           onChange={handleChange}
// //           required
// //           className="block w-full border rounded p-2 mt-1"
// //         >
// //           <option value="">Select account</option>
// //           {users.map((user) => (
// //   <option key={user.id} value={user.id}>
// //     {user.first_name} {user.last_name}
// //             </option>
// //           ))}
// //         </select>
// //       </label>

// //       {/* Updated By Dropdown */}
// //       <label className="block">
// //         Updated By
// //         <select
// //           name="updated_by"
// //           value={formData.updated_by || ""}
// //           onChange={handleChange}
// //           required
// //           className="block w-full border rounded p-2 mt-1"
// //         >
// //           <option value="">Select user</option>
// //           {users.map((user) => (
// //             <option key={user.id} value={user.id}>
// //               {user.username || user.name}
// //             </option>
// //           ))}
// //         </select>
// //       </label>

// //       {/* Other Input Fields */}
// //       <label className="block">
// //         First Name
// //         <Input name="first_name" value={formData.first_name} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         Last Name
// //         <Input name="last_name" value={formData.last_name} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         Email
// //         <Input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         Phone
// //         <Input name="phone" value={formData.phone} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         Type
// //         <Input name="type" value={formData.type} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         Street
// //         <Input name="street" value={formData.street} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         City
// //         <Input name="city" value={formData.city} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         State
// //         <Input name="state" value={formData.state} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         Postal Code
// //         <Input name="postal_code" value={formData.postal_code} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         Country
// //         <Input name="country" value={formData.country} onChange={handleChange} className="mt-1" />
// //       </label>
// //       <label className="block">
// //         Preferred Contact Method
// //         <Input
// //           name="preferred_contact_method"
// //           value={formData.preferred_contact_method}
// //           onChange={handleChange}
// //           className="mt-1"
// //         />
// //       </label>
// //       <label className="block">
// //         Last Service Date
// //         <Input
// //           type="date"
// //           name="last_service_date"
// //           value={formData.last_service_date}
// //           onChange={handleChange}
// //           className="mt-1"
// //         />
// //       </label>
// //       <label className="block">
// //         Special Instructions
// //         <Textarea
// //           name="special_instructions"
// //           value={formData.special_instructions}
// //           onChange={handleChange}
// //           className="mt-1"
// //         />
// //       </label>

// //       <Button type="submit" disabled={loading}>
// //         {loading ? "Saving..." : "Save Contact"}
// //       </Button>
// //     </form>
// //   );
// // };

// // export default ContactForm;


