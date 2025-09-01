// import React, { useState, useEffect } from "react";  
// // import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const NewAsset: React.FC = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     assetName: "",
//     description: "",
//     assetNumber: "",
//     product: "",
//     parentAsset: "",
//     giai: "",
//     orderedDate: "",
//     installationDate: "",
//     purchasedDate: "",
//     warrantyExpiration: "",
//     company: "",
//     contact: "",
//     address: "",
//   });

//   const [saving, setSaving] = useState(false);
//     const [contacts, setContacts] = useState<any[]>([]);   // ✅ added contacts state

// useEffect(() => {
//     fetch("http://localhost:5000/api/contacts/dropdown")
//       .then(res => res.json())
//       .then(data => setContacts(data))
//       .catch(err => console.error("Error loading contacts:", err));
//   }, []);
//   const handleChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleCancel = () => {
//     navigate("/assets");
//   };

//   // ✅ Add handleSave here
//   const handleSave = async () => {
//   if (!formData.assetName.trim()) {
//     alert("Asset Name is required");
//     return;
//   }
//   try {
//     setSaving(true);
//     const response = await fetch("http://localhost:5000/api/newassets", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       const text = await response.text();
//       throw new Error(text || "Failed to save asset");
//     }

//     const created = await response.json();
//     console.log("✅ Created asset:", created);

//     navigate("/assets"); // redirect after success
//   } catch (err) {
//     console.error("Save failed:", err);
//     alert("Failed to save asset. Check console for details.");
//   } finally {
//     setSaving(false);
//   }
// };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Create Asset</h1>

//       {/* Asset Details */}
//       <div>
//         <h2 className="text-lg font-semibold mb-2">Asset Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {[
//             { label: "Asset Name", key: "assetName" },
//             { label: "Description", key: "description" },
//             { label: "Asset Number", key: "assetNumber" },
//             { label: "Product", key: "product" },
//             { label: "Parent Asset", key: "parentAsset" },
//             { label: "GIAI", key: "giai" },
//             { label: "Ordered Date", key: "orderedDate", type: "date" },
//             { label: "Installation Date", key: "installationDate", type: "date" },
//             { label: "Purchased Date", key: "purchasedDate", type: "date" },
//             { label: "Warranty Expiration", key: "warrantyExpiration", type: "date" },
//           ].map(({ label, key, type }) => (
//             <div key={key}>
//               <Label>{label}</Label>
//               <Input
//                 type={type || "text"}
//                 placeholder={label}
//                 value={(formData as any)[key]}
//                 onChange={(e) => handleChange(key, e.target.value)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Contact Details */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <Label>Company</Label>
//             <Input
//               placeholder="Search Company"
//               value={formData.company}
//               onChange={(e) => handleChange("company", e.target.value)}
//             />
//           </div>
//             <div>
//             <Label>Contact</Label>
//             <select
//               className="w-full border rounded p-2"
//               value={formData.contact}   // ✅ use formData.contact
//               onChange={(e) => handleChange("contact", e.target.value)}
//             >
//               <option value="">Select Contact</option>
//               {contacts.map((c) => (
//                 <option key={c.id} value={c.id}>
//                   {c.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
       

//       {/* Address */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-2">Address</h2>
//         <div className="w-full">
//           <Label>Address</Label>
//           <Input
//             placeholder="Enter Address"
//             value={formData.address}
//             onChange={(e) => handleChange("address", e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Footer Buttons */}
//       <div className="flex justify-end gap-2 mt-8">
//         <Button variant="outline" onClick={handleCancel}>
//           Cancel
//         </Button>
//         <Button onClick={handleSave}>Save</Button>
//       </div>
//     </div>
//   );
// };

// export default NewAsset;
import React, { useState, useEffect } from "react";  
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
    assetType: "", // ✅ new
    status: "",    // ✅ new
  });

  const [saving, setSaving] = useState(false);
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts/dropdown")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error("Error loading contacts:", err));
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    navigate("/assets");
  };

  const handleSave = async () => {
    if (!formData.assetName.trim()) {
      alert("Asset Name is required");
      return;
    }
    try {
      setSaving(true);
      const response = await fetch("http://localhost:5000/api/newassets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Failed to save asset");
      }

      const created = await response.json();
      console.log("✅ Created asset:", created);

      navigate("/assets");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Failed to save asset. Check console for details.");
    } finally {
      setSaving(false);
    }
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
            { label: "Asset Type", key: "assetType" },  // ✅ new field
            { label: "Status", key: "status" },        // ✅ new field
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
            <select
              className="w-full border rounded p-2"
              value={formData.contact}
              onChange={(e) => handleChange("contact", e.target.value)}
            >
              <option value="">Select Contact</option>
              {contacts.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
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
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default NewAsset;

