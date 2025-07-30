// src/components/FieldWorkForm.tsx

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
 // Adjust import path if needed

const countryStateCityData = {
  India: {
    TamilNadu: ["Chennai", "Madurai", "Coimbatore"],
    Karnataka: ["Bangalore", "Mysore"],
  },
  USA: {
    California: ["Los Angeles", "San Francisco"],
    Texas: ["Houston", "Dallas"],
  },
};

const skillOptions = ["Plumbing", "Electrical", "Carpentry", "Welding", "Painting"];

const FieldWorkforceForm: React.FC = () => {
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [gender, setGender] = useState<string>("");
  const [experience, setExperience] = useState<number | "">("");
  const [idProofFile, setIdProofFile] = useState<File | null>(null);

  const states = country ? Object.keys(countryStateCityData[country]) : [];
  const cities = state ? countryStateCityData[country]?.[state] || [] : [];

  const handleSkillToggle = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("skills", JSON.stringify(skills));
    formData.append("gender", gender);
    formData.append("experience", experience.toString());
    if (idProofFile) {
      formData.append("id_proof", idProofFile);
    }

    console.log("FormData Submitted:", {
      country,
      state,
      city,
      skills,
      gender,
      experience,
      idProofFile,
    });

    // TODO: You can send formData using fetch/axios here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-6"
    >
      <h2 className="text-xl font-bold">Add Field Workforce</h2>

      {/* Country */}
      <div>
        <Label>Country</Label>
        <Select onValueChange={setCountry}>
          <SelectTrigger>
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(countryStateCityData).map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* State */}
      <div>
        <Label>State</Label>
        <Select onValueChange={setState} disabled={!country}>
          <SelectTrigger>
            <SelectValue placeholder="Select State" />
          </SelectTrigger>
          <SelectContent>
            {states.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* City */}
      <div>
        <Label>City</Label>
        <Select onValueChange={setCity} disabled={!state}>
          <SelectTrigger>
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Skills */}
      <div>
        <Label>Skills</Label>
        <div className="flex flex-wrap gap-3 mt-2">
          {skillOptions.map((skill) => (
            <label
              key={skill}
              className="flex items-center gap-2 text-sm border p-2 rounded cursor-pointer"
            >
              <input
                type="checkbox"
                checked={skills.includes(skill)}
                onChange={() => handleSkillToggle(skill)}
              />
              {skill}
            </label>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div>
        <Label>Gender</Label>
        <Select onValueChange={setGender}>
          <SelectTrigger>
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Experience */}
      <div>
        <Label>Experience (in years)</Label>
        <Input
          type="number"
          min={0}
          placeholder="e.g. 3"
          value={experience}
          onChange={(e) => setExperience(Number(e.target.value))}
        />
      </div>

      {/* ID Proof Upload */}
      <div>
        <Label>ID Proof (Aadhar/Passport)</Label>
        <Input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setIdProofFile(file);
          }}
        />
        <p className="text-sm text-gray-500 mt-1">Accepted: JPG, PNG, PDF</p>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default FieldWorkforceForm;
