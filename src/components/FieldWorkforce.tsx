import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const getStoredRecords = () => {
  const data = localStorage.getItem('fieldworkers');
  return data ? JSON.parse(data) : [];
};

const FieldWorkforce: React.FC = () => {
  const [location, setLocation] = useState('');
  const [skill, setSkill] = useState('');
  const [gender, setGender] = useState('');
  const [records, setRecords] = useState<any[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<any[]>([]);
  const [searchTriggered, setSearchTriggered] = useState(false);

  const navigate = useNavigate();

  const handleAdd = () => {
    localStorage.removeItem('editWorker');
    navigate("/register");
  };

  const handleSearch = () => {
    const filtered = records.filter(worker => {
      const locationMatch = location === '' || worker.location.toLowerCase().includes(location.toLowerCase());
      const skillMatch = skill === '' || worker.skill.toLowerCase().includes(skill.toLowerCase());
      const genderMatch = gender === '' || worker.gender === gender;
      return locationMatch && skillMatch && genderMatch;
    });
    setFilteredRecords(filtered);
    setSearchTriggered(true);
  };

  useEffect(() => {
    const data = getStoredRecords();
    setRecords(data);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Field Workforce</h1>
        <Button onClick={handleAdd}>Add</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <Input
          placeholder="City / State / Country"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          placeholder="Skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <Select onValueChange={setGender}>
          <SelectTrigger>
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Show results only if search was triggered */}
      {searchTriggered && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          {filteredRecords.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Skill</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Gender</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecords.map((worker, index) => (
                  <TableRow key={index}>
                    <TableCell>{worker.name}</TableCell>
                    <TableCell>{worker.skill}</TableCell>
                    <TableCell>{worker.location}</TableCell>
                    <TableCell>{worker.gender}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-gray-500 mt-2">No records found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default FieldWorkforce;
