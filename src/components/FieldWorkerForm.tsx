import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

// Save worker to localStorage
const saveToLocalStorage = (data: any) => {
  const existing = localStorage.getItem("fieldworkers");
  const parsed = existing ? JSON.parse(existing) : [];
  parsed.push(data);
  localStorage.setItem("fieldworkers", JSON.stringify(parsed));
};

const FieldWorkerForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    altMobile: "",
    email: "",
    emergencyName: "",
    emergencyPhone: "",
    currentAddress: "",
    permanentAddress: "",
    city: "",
    state: "",
    country: "",
    govId: "",
    skills: "",
    availability: "",
    workLocation: "",
    gps: "",
    medical: "",
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fullName || !form.gender || !form.mobile || !form.city || !form.skills) {
      alert("Please fill in all required fields");
      return;
    }

    if (!agreed) {
      alert("You must agree to the terms.");
      return;
    }

    const location = `${form.city}, ${form.state}, ${form.country}`;
    const newWorker = {
      name: form.fullName,
      skill: form.skills,
      location,
      gender: form.gender,
    };

    saveToLocalStorage(newWorker);
    navigate("/fieldwork");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold">Field Worker Registration</h1>

        <Input placeholder="Full Name" value={form.fullName} onChange={(e) => handleChange("fullName", e.target.value)} />
        <Input type="date" value={form.dob} onChange={(e) => handleChange("dob", e.target.value)} />

        <Select onValueChange={(val) => handleChange("gender", val)}>
          <SelectTrigger><SelectValue placeholder="Gender" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Input type="file" /> {/* Optional photo upload */}
        <Input placeholder="Mobile Phone Number" value={form.mobile} onChange={(e) => handleChange("mobile", e.target.value)} />
        <Input placeholder="Alternate Phone Number" value={form.altMobile} onChange={(e) => handleChange("altMobile", e.target.value)} />
        <Input placeholder="Email Address" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
        <Input placeholder="Emergency Contact Name" value={form.emergencyName} onChange={(e) => handleChange("emergencyName", e.target.value)} />
        <Input placeholder="Emergency Contact Phone" value={form.emergencyPhone} onChange={(e) => handleChange("emergencyPhone", e.target.value)} />
        <Textarea placeholder="Current Address" value={form.currentAddress} onChange={(e) => handleChange("currentAddress", e.target.value)} />
        <Textarea placeholder="Permanent Address" value={form.permanentAddress} onChange={(e) => handleChange("permanentAddress", e.target.value)} />
        <Input placeholder="City" value={form.city} onChange={(e) => handleChange("city", e.target.value)} />
        <Input placeholder="State" value={form.state} onChange={(e) => handleChange("state", e.target.value)} />
        <Input placeholder="Country" value={form.country} onChange={(e) => handleChange("country", e.target.value)} />
        <Input placeholder="Government ID Number" value={form.govId} onChange={(e) => handleChange("govId", e.target.value)} />
        <Input type="file" /> {/* Optional document upload */}
        <Textarea placeholder="Skills / Certifications" value={form.skills} onChange={(e) => handleChange("skills", e.target.value)} />

        <Select onValueChange={(val) => handleChange("availability", val)}>
          <SelectTrigger><SelectValue placeholder="Availability" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Full Time">Full Time</SelectItem>
            <SelectItem value="Part Time">Part Time</SelectItem>
          </SelectContent>
        </Select>

        <Input placeholder="Work Location / Region" value={form.workLocation} onChange={(e) => handleChange("workLocation", e.target.value)} />
        <Input placeholder="GPS Location" value={form.gps} onChange={(e) => handleChange("gps", e.target.value)} />
        <Textarea placeholder="Health/Medical Info (optional)" value={form.medical} onChange={(e) => handleChange("medical", e.target.value)} />

        <div className="flex items-center space-x-2">
          <Checkbox id="agree" checked={agreed} onCheckedChange={(val) => setAgreed(!!val)} />
          <label htmlFor="agree" className="text-sm">
            I agree to the Data Collection Policy & Terms.
          </label>
        </div>

        <Button type="submit" className="w-full">Submit</Button>
      </div>
    </form>
  );
};

export default FieldWorkerForm;
