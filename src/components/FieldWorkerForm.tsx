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
    currentStreet: "",
    currentCity: "",
    currentState: "",
    currentCountry: "",
    permanentStreet: "",
    permanentCity: "",
    permanentState: "",
    permanentCountry: "",
    govId: "",
    skills: "",
    availability: "",
    workLocation:"",
    gps:"",
    medical: "",   

  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validation
  if (!form.fullName || !form.gender || !form.mobile || !form.currentCity || !form.skills) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!agreed) {
    alert("You must agree to the terms.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/workerforce", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: form.fullName,
        dob: form.dob,
        gender: form.gender,
        mobile: form.mobile,
        alt_mobile: form.altMobile,
        email: form.email,
        emergency_name: form.emergencyName,
        emergency_phone: form.emergencyPhone,
        current_address: form.currentStreet,
        permanent_address: form.permanentStreet,
        city: form.currentCity,
        state: form.currentState,
        country: form.currentCountry,
        gov_id: form.govId,
        skills: form.skills,
        availability: form.availability,
        work_location: form.workLocation,
        gps: form.gps,
        medical: form.medical
      })
    });

    let data: any = {};
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    }

    if (response.ok) {
      console.log("Worker added:", data);
      navigate("/fieldwork");
    } else {
      console.error("Error response:", data);
      alert(data.error || "Failed to save worker.");
    }
  } catch (err) {
    console.error("Error saving worker:", err);
    alert("Failed to save worker.");
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold">Field Worker Registration</h1>

        {/* Personal Info */}
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

        <Input placeholder="Mobile Phone Number" value={form.mobile} onChange={(e) => handleChange("mobile", e.target.value)} />
        <Input placeholder="Alternate Phone Number" value={form.altMobile} onChange={(e) => handleChange("altMobile", e.target.value)} />
        <Input placeholder="Email Address" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />

        <Input placeholder="Emergency Contact Name" value={form.emergencyName} onChange={(e) => handleChange("emergencyName", e.target.value)} />
        <Input placeholder="Emergency Contact Phone" value={form.emergencyPhone} onChange={(e) => handleChange("emergencyPhone", e.target.value)} />

        {/* Current Address */}
        <Textarea placeholder="Current Street Address" value={form.currentStreet} onChange={(e) => handleChange("currentStreet", e.target.value)} />
        <Input placeholder="Current City" value={form.currentCity} onChange={(e) => handleChange("currentCity", e.target.value)} />
        <Input placeholder="Current State" value={form.currentState} onChange={(e) => handleChange("currentState", e.target.value)} />
        <Input placeholder="Current Country" value={form.currentCountry} onChange={(e) => handleChange("currentCountry", e.target.value)} />

        {/* Permanent Address */}
        <Textarea placeholder="Permanent Street Address" value={form.permanentStreet} onChange={(e) => handleChange("permanentStreet", e.target.value)} />
        <Input placeholder="Permanent City" value={form.permanentCity} onChange={(e) => handleChange("permanentCity", e.target.value)} />
        <Input placeholder="Permanent State" value={form.permanentState} onChange={(e) => handleChange("permanentState", e.target.value)} />
        <Input placeholder="Permanent Country" value={form.permanentCountry} onChange={(e) => handleChange("permanentCountry", e.target.value)} />

        {/* Government ID */}
        <Input placeholder="Government ID Number" value={form.govId} onChange={(e) => handleChange("govId", e.target.value)} />

        {/* Skills */}
        <Textarea placeholder="Skills / Certifications" value={form.skills} onChange={(e) => handleChange("skills", e.target.value)} />

        <Select onValueChange={(val) => handleChange("availability", val)}>
          <SelectTrigger><SelectValue placeholder="Availability" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Full Time">Full Time</SelectItem>
            <SelectItem value="Part Time">Part Time</SelectItem>
          </SelectContent>
        </Select>

        <Input placeholder="Work Location / Region" value={form.workLocation} onChange={(e) => handleChange("workLocation", e.target.value)} />

        {/* Terms Agreement */}
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