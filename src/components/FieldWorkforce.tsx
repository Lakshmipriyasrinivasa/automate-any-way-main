// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from "@/components/ui/select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow
// } from "@/components/ui/table";

// const getStoredRecords = () => {
//   const data = localStorage.getItem('fieldworkers');
//   return data ? JSON.parse(data) : [];
// };

// const FieldWorkforce: React.FC = () => {
//   const [location, setLocation] = useState('');
//   const [skill, setSkill] = useState('');
//   const [gender, setGender] = useState('');
//   const [records, setRecords] = useState<any[]>([]);
//   const [filteredRecords, setFilteredRecords] = useState<any[]>([]);
//   const [searchTriggered, setSearchTriggered] = useState(false);

//   const navigate = useNavigate();

//   const handleAdd = () => {
//     localStorage.removeItem('editWorker');
//     navigate("/register");
//   };

//   const handleSearch = () => {
//     const filtered = records.filter(worker => {
//       const locationMatch = location === '' || worker.location.toLowerCase().includes(location.toLowerCase());
//       const skillMatch = skill === '' || worker.skill.toLowerCase().includes(skill.toLowerCase());
//       const genderMatch = gender === '' || worker.gender === gender;
//       return locationMatch && skillMatch && genderMatch;
//     });
//     setFilteredRecords(filtered);
//     setSearchTriggered(true);
//   };

//   useEffect(() => {
//     const data = getStoredRecords();
//     setRecords(data);
//   }, []);

//   return (
    
//     <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Recently Viewed ▼</h1>
//           {/* <span style={{ color: '#666' }}>Recently Viewed ▼</span> */}
//         <Button onClick={handleAdd}>Add</Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
//         <Input
//           placeholder="City / State / Country"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <Input
//           placeholder="Skill"
//           value={skill}
//           onChange={(e) => setSkill(e.target.value)}
//         />
//         <Select onValueChange={setGender}>
//           <SelectTrigger>
//             <SelectValue placeholder="Select Gender" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Male">Male</SelectItem>
//             <SelectItem value="Female">Female</SelectItem>
//             <SelectItem value="Other">Other</SelectItem>
//           </SelectContent>
//         </Select>
//         <Button onClick={handleSearch}>Search</Button>
//       </div>

//       {/* Show results only if search was triggered */}
//       {searchTriggered && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold mb-4">Results</h2>
//           {filteredRecords.length > 0 ? (
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Name</TableHead>
//                   <TableHead>Skill</TableHead>
//                   <TableHead>Location</TableHead>
//                   <TableHead>Gender</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredRecords.map((worker, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{worker.name}</TableCell>
//                     <TableCell>{worker.skill}</TableCell>
//                     <TableCell>{worker.location}</TableCell>
//                     <TableCell>{worker.gender}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           ) : (
//             <div className="text-gray-500 mt-2">No records found.</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FieldWorkforce;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FieldWorker {
  id: string | number;
  full_name: string;
  gender: string;
  mobile: string;
  email?: string;
  current_city?: string;
  skills?: string;
  updated_at?: string;
}

const FieldWorkerList: React.FC = () => {
  const navigate = useNavigate();
  const [workers, setWorkers] = useState<FieldWorker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/workerforce")
      .then(res => res.json())
      .then(data => {
        setWorkers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Field Workers</h1>
        <Button onClick={() => navigate("/fieldwork/new")}>New</Button>
      </div>
      <div className="mb-2 text-sm text-gray-600">Recently Viewed ▼</div>
      <div className="mb-4 text-xs text-gray-400">
        {workers.length} items - Updated just now
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Full Name</th>
              <th className="px-4 py-2 text-left">Gender</th>
              <th className="px-4 py-2 text-left">Mobile</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Current City</th>
              <th className="px-4 py-2 text-left">Skills</th>
              {/* <th className="px-4 py-2 text-left">Updated At</th> */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-4">Loading...</td>
              </tr>
            ) : (
              workers.map(worker => (
                <tr key={worker.id || worker.mobile} className="border-t">
                  <td className="px-4 py-2">{worker.full_name || "-"}</td>
                  <td className="px-4 py-2">{worker.gender || "-"}</td>
                  <td className="px-4 py-2">{worker.mobile || "-"}</td>
                  <td className="px-4 py-2">{worker.email || "-"}</td>
                  <td className="px-4 py-2">{worker.current_city || "-"}</td>
                  <td className="px-4 py-2">{worker.skills || "-"}</td>
                  {/* <td className="px-4 py-2">{worker.updated_at ? new Date(worker.updated_at).toLocaleString() : "-"}</td> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FieldWorkerList;
