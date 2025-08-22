
// // export default UserForm;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";

// const UserForm: React.FC = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     organization_id: "",
//     first_name: "",
//     last_name: "",
//     alias: "",
//     email: "",
//     phone: "",
//     company: "",
//     address: "",
//     password_hash: "",
//     role: "",
//     is_active: true,
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save user");
//       }

//       // ✅ User saved successfully → Navigate back & refresh list
//       navigate("/users");

//     } catch (error) {
//       console.error("Error saving user:", error);
//       alert("Something went wrong while saving user.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl">
//       <h2 className="text-2xl font-bold mb-6">Create / Update User</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        
//         {/* First Name */}
//         <div>
//           <Label>First Name</Label>
//           <Input name="first_name" value={formData.first_name} onChange={handleChange} required />
//         </div>

//         {/* Last Name */}
//         <div>
//           <Label>Last Name</Label>
//           <Input name="last_name" value={formData.last_name} onChange={handleChange} />
//         </div>

//         {/* Alias */}
//         <div>
//           <Label>Alias</Label>
//           <Input name="alias" value={formData.alias} onChange={handleChange} />
//         </div>

//         {/* Email */}
//         <div>
//           <Label>Email</Label>
//           <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>

//         {/* Phone */}
//         <div>
//           <Label>Phone</Label>
//           <Input name="phone" value={formData.phone} onChange={handleChange} />
//         </div>

//         {/* Company */}
//         <div>
//           <Label>Company</Label>
//           <Input name="company" value={formData.company} onChange={handleChange} />
//         </div>

//         {/* Address (Full Width) */}
//         <div className="col-span-2">
//           <Label>Address</Label>
//           <Textarea name="address" value={formData.address} onChange={handleChange} />
//         </div>

//         {/* Password */}
//         <div>
//           <Label>Password</Label>
//           <Input type="password" name="password_hash" value={formData.password_hash} onChange={handleChange} required />
//         </div>

//         {/* Role */}
//         <div>
//           <Label>Role</Label>
//           <Select onValueChange={(value) => setFormData({ ...formData, role: value })}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select role" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="admin">Admin</SelectItem>
//               <SelectItem value="manager">Manager</SelectItem>
//               <SelectItem value="user">User</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Active Status */}
//         <div className="flex items-center space-x-2">
//           <Checkbox 
//             checked={formData.is_active}
//             onCheckedChange={(checked) => setFormData({ ...formData, is_active: Boolean(checked) })}
//           />
//           <Label>Active</Label>
//         </div>

//         {/* Submit Button */}
//         <div className="col-span-2 flex justify-end">
//           <Button type="submit" disabled={loading}>
//             {loading ? "Saving..." : "Save User"}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface UserFormData {
  organization_id: string | null;
  first_name: string;
  last_name: string;
  alias: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  password_hash: string;
  role: string;
  is_active: boolean;
}

const UserForm: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserFormData>({
    organization_id: null,
    first_name: "",
    last_name: "",
    alias: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    password_hash: "",
    role: "",
    is_active: true,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert empty strings to null for optional fields
      const payload = {
        ...formData,
        organization_id: formData.organization_id || null,
      };

      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save user");
      }

      // Success → navigate back
    navigate("/user");
    } catch (error: any) {
      console.error("Error saving user:", error);
      alert(`Error saving user: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">Create / Update User</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <div>
          <Label>First Name</Label>
          <Input name="first_name" value={formData.first_name} onChange={handleChange} required />
        </div>
        <div>
          <Label>Last Name</Label>
          <Input name="last_name" value={formData.last_name} onChange={handleChange} />
        </div>
        <div>
          <Label>Alias</Label>
          <Input name="alias" value={formData.alias} onChange={handleChange} />
        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <Label>Phone</Label>
          <Input name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <Label>Company</Label>
          <Input name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div className="col-span-2">
          <Label>Address</Label>
          <Textarea name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" name="password_hash" value={formData.password_hash} onChange={handleChange} required />
        </div>
        <div>
          <Label>Role</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, role: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={formData.is_active}
            onCheckedChange={(checked) => setFormData({ ...formData, is_active: Boolean(checked) })}
          />
          <Label>Active</Label>
        </div>
        <div className="col-span-2 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save User"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
